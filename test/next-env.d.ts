/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="./typings/koa-proxies" />

declare interface Document {
  openedAt?: number
}
declare module 'nuka-carousel' {
  const PageCarousel: any
  export default PageCarousel
}
declare module '@titicaca/triple-react-contexts' {
  export var HistoryProvider: any
  export var EventTrackingProvider: any
  export function withHistory(Component: (props: any) => JSX.Element): any
  export function useHistoryContext(): HistoryContext
  export interface HistoryActions {
    push: (hash: string, options?: { useRouter: boolean }) => void
    replace: (hash: string, options?: { useRouter: boolean }) => void
    back: () => void
    navigate: (href: string, params: { [key: string]: any }) => void
  }
  export interface HistoryContext extends HistoryActions {
    uriHash: string
  }
  export interface HistoryConsumerProps {
    uriHash?: string
    historyActions: HistoryActions
  }
}
