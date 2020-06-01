import type { InternalFoo } from './types'

export type { Foo } from './types'

export interface Wrapper {
  internal: InternalFoo
}

export function test(param: string | undefined | null): string {
  const handler = (param?: { isValid: boolean }) =>
    param?.isValid ? 'test' : 'fail'

  return param ?? handler()
}
