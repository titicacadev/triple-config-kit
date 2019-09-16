import fetch from 'isomorphic-fetch'
import Cookies from 'universal-cookie'
import { IncomingMessage } from 'http'
import { API_URI_BASE } from '../config'
import CouponFixtures from './coupon-fixtures'

export type CouponStatus = 'AVAILABLE' | 'USED' | 'DISABLED'
export type CouponDiscountPolicyType = 'RATE' | 'AMOUNT'
export type CouponUseConditionType = 'CONTENT_PROVIDER' | 'MIN_PURCHASE_AMOUNT'

export interface CouponValidityPeriod {
  startAt: string
  endAt: string
}

export interface CouponDiscountPolicy {
  type: CouponDiscountPolicyType
  value: number
}

export interface CouponUseCondition {
  type: CouponUseConditionType
  value: string
  inclusion?: boolean
}

export interface CouponItem {
  id: string
  name: string
  description: string
  validityPeriod: CouponValidityPeriod
  status: CouponStatus
  maxDiscountAmount: number
  discountPolicy: CouponDiscountPolicy
  useConditions: CouponUseCondition[]
}

export interface CouponListResponse {
  items: CouponItem[]
  nextPageToken: string
}

export async function fetchMyCoupons(
  req?: IncomingMessage,
): Promise<CouponItem[]> {
  const sessionId = req
    ? new Cookies(req.headers.cookie).get('x-soto-session')
    : null
  const response = await fetch(
    `${req ? API_URI_BASE : ''}/api/benefit/me/coupons?statuses=AVAILABLE`, // @TODO - USED,DISABLE 도 같이 조회해야하나 현재 500오류 노출됨
    sessionId ? { headers: { 'X-Soto-Session': sessionId } } : undefined,
  )
  const { items = [] }: CouponListResponse = await response.json()

  // @TODO - fixture 제거
  return items.concat(CouponFixtures)
}
