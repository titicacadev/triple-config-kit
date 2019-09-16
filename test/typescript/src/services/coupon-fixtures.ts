import { CouponItem } from './coupons'

export default [
  {
    id: 'fixture-1',
    name: '',
    description: '만능 테스트용 쿠폰',
    discountPolicy: {
      type: 'RATE',
      value: 15,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:44:19.76Z[Etc/UTC]',
      endAt: '2019-11-07T08:44:19.76Z[Etc/UTC]',
    },
    status: 'AVAILABLE',
    maxDiscountAmount: 1000,
    useConditions: [],
  },
  {
    id: 'fixture-2',
    name: '[프로모션] 여행자클럽 레벨1 월간프로모션',
    description: '여행자클럽 레벨1 월간프로모션',
    discountPolicy: {
      type: 'AMOUNT',
      value: 1000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:44:19.76Z[Etc/UTC]',
      endAt: '2019-11-07T08:44:19.76Z[Etc/UTC]',
    },
    status: 'AVAILABLE',
    maxDiscountAmount: 1000,
    useConditions: [],
  },
  {
    id: 'fixture-3',
    name: '호텔 5000원 할인 쿠폰',
    description: '호텔 예약시 5000원 할인',
    discountPolicy: {
      type: 'AMOUNT',
      value: 5000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:47:44.308Z[Etc/UTC]',
      endAt: '2019-08-16T08:47:44.308Z[Etc/UTC]',
    },
    status: 'AVAILABLE',
    maxDiscountAmount: 5000,
    useConditions: [
      {
        type: 'CONTENT_PROVIDER',
        value: 'HOTEL',
        inclusion: true,
      },
    ],
  },
  {
    id: 'fixture-4',
    name: '써먹어버린 쿠포온~~',
    description: '여행자클럽 레벨1 월간프로모션',
    discountPolicy: {
      type: 'AMOUNT',
      value: 30000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:44:19.76Z[Etc/UTC]',
      endAt: '2019-11-07T08:44:19.76Z[Etc/UTC]',
    },
    status: 'USED',
    maxDiscountAmount: 1000,
    useConditions: [],
  },
  {
    id: 'fixture-5',
    name: '써먹어버린 쿠폰 22222',
    description: '호텔 예약시 5000원 할인',
    discountPolicy: {
      type: 'AMOUNT',
      value: 2000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:47:44.308Z[Etc/UTC]',
      endAt: '2019-08-16T08:47:44.308Z[Etc/UTC]',
    },
    status: 'USED',
    maxDiscountAmount: 5000,
    useConditions: [
      {
        type: 'CONTENT_PROVIDER',
        value: 'HOTEL',
        inclusion: true,
      },
    ],
  },
  {
    id: 'fixture-6',
    name: '[프로모션] 여행자클럽 레벨1 월간프로모션',
    description: '여행자클럽 레벨1 월간프로모션',
    discountPolicy: {
      type: 'AMOUNT',
      value: 1000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:44:19.76Z[Etc/UTC]',
      endAt: '2019-11-07T08:44:19.76Z[Etc/UTC]',
    },
    status: 'DISABLED',
    maxDiscountAmount: 1000,
    useConditions: [],
  },
  {
    id: 'fixture-7',
    name: '호텔 5000원 할인 쿠폰',
    description: '호텔 예약시 5000원 할인',
    discountPolicy: {
      type: 'DISABLED',
      value: 5000,
    },
    validityPeriod: {
      startAt: '2019-08-09T08:47:44.308Z[Etc/UTC]',
      endAt: '2019-08-16T08:47:44.308Z[Etc/UTC]',
    },
    status: 'DISABLED',
    maxDiscountAmount: 5000,
    useConditions: [
      {
        type: 'CONTENT_PROVIDER',
        value: 'HOTEL',
        inclusion: true,
      },
    ],
  },
] as CouponItem[]
