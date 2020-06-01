import type { InternalFoo } from './types'

export type { Foo } from './types'

export interface Wrapper {
  internal: InternalFoo
}
