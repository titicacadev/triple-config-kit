export function isPublic(userAgent: string): boolean {
  return !userAgent || !userAgent.match(/Triple-(iOS|Android)/i)
}
