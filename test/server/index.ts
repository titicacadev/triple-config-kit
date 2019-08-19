import next from 'next'
import Koa from 'koa'
import morgan from 'koa-morgan'
import mount from 'koa-mount'
import Router from 'koa-router'
import proxy from 'koa-proxies'
import qs from 'koa-qs'
import * as Sentry from '@sentry/node'

const dev = process.env.NODE_ENV !== 'production'
const PORT = parseInt(process.env.PORT || '3000', 10)
const SENTRY_DSN = process.env.SENTRY_DSN

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.SENTRY_ENV,
  })
}

const API_URL_BASE = process.env.API_URI_BASE || 'https://triple-dev.titicaca-corp.com'

async function main() {
  const nextApp = next({ dev })
  const app = qs(new Koa(), 'extended')
  const router = new Router()

  await nextApp.prepare()
  const handler = nextApp.getRequestHandler()

  router.prefix('/benefit').get('/health-check', (ctx: Koa.Context) => {
    ctx.status = 200
  })

  app
    .use(morgan('combined'))
    .use(router.routes())
    .use(
      proxy('/api', {
        target: API_URL_BASE,
        changeOrigin: true,
      }),
    )
    .use(
      mount('/benefit', (ctx: Koa.Context) => {
        ctx.respond = false
        handler(ctx.req, ctx.res)
      }),
    )

  if (SENTRY_DSN) {
    app.on('error', (err, ctx) => {
      Sentry.withScope((scope) => {
        scope.addEventProcessor(async (event) => Sentry.Handlers.parseRequest(event, ctx.request))

        Sentry.captureException(err)
      })
    })
  }

  app.listen(PORT)
}

try {
  main()
} catch (err) {
  if (!dev) {
    Sentry.captureException(err)
  }
}
