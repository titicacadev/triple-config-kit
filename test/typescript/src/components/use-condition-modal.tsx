import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {
  Text,
  Modal,
  Container,
  GetGlobalColor,
} from '@titicaca/triple-design-system'
import { useHistoryContext } from '@titicaca/triple-react-contexts'

import { CouponItem } from '../services/coupons'
import { List, ListItem } from './list'

const LinkText = styled.a`
  display: block;
  text-align: left;
  width: 97px;
  margin: 20px 0 0 0;
  padding: 5px 0 7px 10px;
  background: url(/benefit/static/images/ico-arrow-g@3x.png) 86px 7px no-repeat;
  background-size: 12px 12px;
  border: solid 1px rgba(${GetGlobalColor('gray')}, 0.2);
  border-radius: 4px;
  font-size: 13px;
  line-height: 16px;
  color: rgba(${GetGlobalColor('gray')}, 0.7);
  cursor: pointer;
`

interface UseConditionModalProps {
  coupons: CouponItem[]
}

export default function UseConditionModal({
  coupons = [],
}: UseConditionModalProps) {
  const [couponItem, setCouponItem] = useState()
  const { uriHash, back, replace } = useHistoryContext()

  useEffect(() => {
    const couponId = getCouponIdFromUriHash(
      uriHash || location.hash.replace('#', ''),
    )
    setCouponItem(coupons.find(({ id }) => id === couponId))
  }, [coupons, uriHash])

  const handleClose = () => {
    if (uriHash) {
      back()
    } else {
      replace('', { useRouter: true })
    }
  }

  return (
    <Modal open={!!couponItem} onClose={handleClose}>
      <Container padding={{ top: 40, bottom: 40, left: 30, right: 30 }}>
        <Text bold left size="huge" color="gray" margin={{ bottom: 20 }}>
          사용조건
        </Text>
        {couponItem && couponItem.name && (
          <Text left size="medium" lineHeight={1.38} color="blue">
            {couponItem.name}
          </Text>
        )}
        <List>
          <ListItem>
            &quot;쿠폰할인가&quot;가 표기된 상품을 예약할 때 보유한 쿠폰 중 최대
            혜택 쿠폰이 자동 적용됩니다. 쿠폰이 사용되면 주문예정금액에서
            쿠폰할인이 적용됩니다.
          </ListItem>
          <ListItem>
            결제 이전에 보유한 다른 쿠폰으로 변경 또는 쿠폰의 사용취소를 할 수
            있습니다.
          </ListItem>
        </List>
        <Link href="/benefit/coupons/notice">
          <LinkText>쿠폰 유의사항</LinkText>
        </Link>
      </Container>
      <Modal.Actions>
        <Modal.Action color="blue" onClick={handleClose}>
          확인
        </Modal.Action>
      </Modal.Actions>
    </Modal>
  )
}

export function getUseConditionModalHash(couponId: string) {
  return `coupon-${couponId}-use-condition.modal`
}
export function getCouponIdFromUriHash(uriHash?: string) {
  return ((uriHash || '').match(/^coupon-(.*)-use-condition.modal$/) || [])[1]
}
