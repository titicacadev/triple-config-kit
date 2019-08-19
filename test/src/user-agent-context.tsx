import React, { createContext } from 'react'
import { UAParser } from 'ua-parser-js'

import { isPublic } from './common/user-agent'

const { Provider, Consumer } = createContext('')

export function withUserAgent(Component: React.ElementType) {
  return function UserAgentComponent(props: any) {
    return <Consumer>{(values: any) => <Component userAgent={values} {...props} />}</Consumer>
  }
}

export { Provider as UserAgentProvider }

export function generateUserAgentValues(userAgent: string) {
  return {
    isPublic: isPublic(userAgent),
    os: new UAParser(userAgent).getOS(),
  }
}
