const TerserPlugin = require('terser-webpack-plugin')

const SHORT_SHA = process.env.SHORT_SHA
const CDN_URL_BASE = process.env.CDN_URL_BASE
const API_URI_BASE = process.env.API_URI_BASE || 'https://triple-dev.titicaca-corp.com'
const WEB_URL_BASE = process.env.WEB_URL_BASE || 'https://triple-dev.titicaca-corp.com'
const APP_URL_SCHEME = process.env.APP_URL_SCHEME || 'dev-soto'
const AF_ONELINK_PID = process.env.AF_ONELINK_PID || 'benefit_web'
const AF_ONELINK_ID = process.env.AF_ONELINK_ID || 'u4VW'
const AF_ONELINK_SUBDOMAIN = process.env.AF_ONELINK_SUBDOMAIN || 'triple-dev'
const GA_PROPERTY_ID = process.env.GA_PROPERTY_ID || 'UA-82146406-12'
const FB_APP_ID = process.env.FB_APP_ID || '220271005042158'
const SENTRY_DSN = process.env.SENTRY_DSN
const SENTRY_ENV = process.env.SENTRY_ENV || 'development'

module.exports = {
  assetPrefix: CDN_URL_BASE ? `${CDN_URL_BASE}/applications/benefit/${SHORT_SHA}` : '/benefit',
  generateEtags: false,
  publicRuntimeConfig: {
    API_URI_BASE,
    WEB_URL_BASE,
    APP_URL_SCHEME,
    AF_ONELINK_PID,
    AF_ONELINK_ID,
    AF_ONELINK_SUBDOMAIN,
    GA_PROPERTY_ID,
    FB_APP_ID,
    SENTRY_DSN,
    SENTRY_ENV,
  },
  webpack: (config) => {
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          safari10: true,
        },
      }),
    ]

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./src/polyfills.js')) {
        entries['main.js'].unshift('./src/polyfills.js')
      }

      return entries
    }

    return config
  },
}
