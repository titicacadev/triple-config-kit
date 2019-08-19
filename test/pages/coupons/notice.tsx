import React from 'react'
import styled from 'styled-components'
import { Navbar } from '@titicaca/triple-design-system'
import { EventTrackingProvider } from '@titicaca/triple-react-contexts'
import { trackScreen, trackEvent, viewItem, backOrClose } from '@titicaca/triple-web-to-native-interfaces'
import { List, ListItem } from '../../src/components/list'
import SupportFooter from '../../src/components/support-footer'

const NoticeList = styled(List)`
  padding: 0 30px 40px 30px;
`
const NoticeListItem = styled(ListItem)`
  font-size: 16px;
  line-height: 1.63;
`
const noticeTexts = [
  '쿠폰은 트리플 앱에서 선결제하는 예약만 사용할 수 있으며 트리플 외부(현지포함)에서 결제한 예약에는 적용되지 않습니다.',
  '쿠폰은 1회 예약에 1개의 쿠폰만 사용 가능합니다.',
  '쿠폰은 사용기간이 지나면 자동 소멸되오니, 기간 내에 꼭 사용하시기 바랍니다.',
  '쿠폰은 현금 가치가 없으며 환불이나 현금 대체 수단은 제공되지 않습니다.',
  '쿠폰으로 할인 받을 수 있는 금액이 총구매금액보다 크더라도 차액은 환급되지 않습니다.',
  '쿠폰이 있는 경우에도 쿠폰을 선택하지 않으면 할인되지 않습니다.',
  '전체취소된 예약에서 사용된 쿠폰은 사용기간 종료 전에만 재지급됩니다. 부분취소 등으로 쿠폰사용금액이 남아있는 경우에는 재발급되지 않습니다.',
  '보유하신 쿠폰은 "내쿠폰함"에서 확인이 가능하며 각 쿠폰별 사용조건 및 유효기간을 확인하신 후 사용하시기 바랍니다.',
  '결제쿠폰은 일부 상품에 적용되지 않을 수 있습니다. 쿠폰이 적용가능한 상품은 "쿠폰할인가격"이 표기되어 있습니다.',
  '논쟁 시 트리플에 최종 해석권한이 있습니다.',
]

export default function Notice() {
  return (
    <EventTrackingProvider
      pageLabel="쿠폰 유의사항"
      trackScreen={trackScreen}
      trackEvent={trackEvent}
      viewItem={viewItem}
    >
      <Navbar title="쿠폰 유의사항" borderless={true}>
        <Navbar.Item icon="back" onClick={backOrClose} />
      </Navbar>
      <NoticeList>
        {noticeTexts.map((text, i) => (
          <NoticeListItem key={i}>{text}</NoticeListItem>
        ))}
      </NoticeList>
      <SupportFooter />
    </EventTrackingProvider>
  )
}
