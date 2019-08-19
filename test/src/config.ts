import getConfig from 'next/config'

export const {
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
} = getConfig().publicRuntimeConfig
