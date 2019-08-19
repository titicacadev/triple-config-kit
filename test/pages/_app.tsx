import React from 'react'
import App, { AppContext, AppProps, Container } from 'next/app'
import Head from 'next/head'
import Cookies from 'universal-cookie'
import { HistoryProvider } from '@titicaca/triple-react-contexts'
import * as Sentry from '@sentry/browser'

import { APP_URL_SCHEME, WEB_URL_BASE, SENTRY_DSN, SENTRY_ENV } from '../src/config'
import { UserAgentProvider, generateUserAgentValues } from '../src/user-agent-context'

const SESSION_KEY = 'x-soto-session'

interface MyAppProps extends AppProps {
  pageProps: any
  sessionId?: string
  userAgent?: any
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    const userAgent = generateUserAgentValues(ctx.req ? ctx.req.headers['user-agent'] || '' : navigator.userAgent)

    const sessionId = ctx.req ? new Cookies(ctx.req.headers.cookie).get(SESSION_KEY) : undefined

    return { sessionId, userAgent, pageProps }
  }

  constructor(props: MyAppProps, ...args: any[]) {
    super(props, ...args)

    const { sessionId } = this.props
    if (sessionId) {
      new Cookies().set(SESSION_KEY, sessionId, { path: '/' })
    }

    if (SENTRY_DSN) {
      Sentry.init({
        dsn: SENTRY_DSN,
        environment: SENTRY_ENV,
      })
    }
  }

  componentDidMount() {
    window.document.openedAt = new Date().getTime()
  }

  render() {
    const { Component, userAgent, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
          />
          <meta name="description" content="최신 가이드북 제공, 길찾기 탑재, 맛집 추천" />
          <meta property="og:title" content="실시간 여행 가이드 - 트리플" />
          <meta property="og:url" content="https://triple.guide/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="fb:app_id" content="136540730081853" />
          <meta property="og:image" content="https://assets.triple.guide/images/default-cover-image.jpg" />
          <meta property="og:description" content="최신 가이드북 제공, 길찾기 탑재, 맛집 추천" />
          <meta property="al:ios:url" content="com.titicacacorp.triple:///" />
          <meta property="al:ios:app_store_id" content="1225499481" />
          <meta property="al:ios:app_name" content="트리플" />
          <meta name="apple-itunes-app" content="app-id=1225499481, app-argument=com.titicacacorp.triple:///" />
          <meta property="al:android:url" content="triple:///" />
          <meta property="al:android:package" content="com.titicacacorp.triple" />
          <meta property="al:android:app_name" content="트리플" />
          <meta name="msapplication-TileColor" content="#1FC1B6" />
          <meta name="msapplication-TileImage" content="https://triple.guide/icons/favicon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" href="https://triple.guide/icons/favicon-152x152.png" />
          <title>트리플</title>
        </Head>

        <Container>
          <HistoryProvider
            appUrlScheme={APP_URL_SCHEME}
            webUrlBase={WEB_URL_BASE}
            isPublic={userAgent.isPublic}
            isAndroid={userAgent.os.name === 'Android'}
          >
            <UserAgentProvider value={userAgent}>
              <Component userAgent={userAgent} {...pageProps} />
            </UserAgentProvider>
          </HistoryProvider>
        </Container>
      </Container>
    )
  }
}

export default MyApp
