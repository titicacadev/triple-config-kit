interface WithKey {
  [key: string]: any
}

const ctx: {
  req?: {
    headers?: {
      [key: string]: string
    }
  }
} = {}

const user = ctx.req
  ? {
      name: ctx.req.headers['x-forwarded-user'],
      email: ctx.req.headers['x-forwarded-email'],
      groups: ctx.req.headers['x-forwarded-groups'],
    }
  : undefined

const conditionA = true
const conditionB = false
const valueA: WithKey = {}
const valueB: WithKey = {}
const valueC: WithKey = {}

const nestedTernart = conditionA
  ? {
      name: valueA.req.headers['x-forwarded-user'],
      email: valueA.req.headers['x-forwarded-email'],
      groups: valueA.req.headers['x-forwarded-groups'],
    }
  : conditionB
  ? {
      name: valueB.req.headers['x-forwarded-user'],
      email: valueB.req.headers['x-forwarded-email'],
      groups: valueB.req.headers['x-forwarded-groups'],
    }
  : valueC

export default {
  user,
  nestedTernart,
}
