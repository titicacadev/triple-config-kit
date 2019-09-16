declare module 'koa-proxies' {
  import * as Koa from 'koa'

  namespace koaProxies {}

  function koaProxies(name: string, options?: any): Koa.Middleware

  export = koaProxies
}
