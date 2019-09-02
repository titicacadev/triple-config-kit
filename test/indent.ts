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

export default user
