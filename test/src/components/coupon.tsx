import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { GetGlobalColor } from '@titicaca/triple-design-system'
import { formatNumber } from '@titicaca/triple-design-system/lib/utilities'
import { CouponStatus, CouponItem } from '../services/coupons'

const CouponContainer = styled.li`
  display: block;
  position: relative;
  z-index: 1;
  height: 164px;
  background: url(/benefit/static/images/img-punch@3x.png) no-repeat right center #fff;
  background-size: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`
const DescriptionContainer = styled.dl`
  display: block;
  padding: 25px 0 0 20px;
  margin: 0;
`
const CouponName = styled.dt<{ status: CouponStatus }>`
  color: ${({ status }) => grayColorByStatus(status)};
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`
const UseCondition = styled.dd<{ status: CouponStatus }>`
  margin-top: 2px;
  color: ${({ status }) => grayColorByStatus(status, 0.8)};
  font-size: 14px;
  line-height: 18px;
`
const ExpireDate = styled.dd<{ status: CouponStatus }>`
  color: ${({ status }) => grayColorByStatus(status, 0.5)};
  font-size: 13px;
  height: 20px;
  line-height: 20px;
`
const CouponValue = styled.em<{ status: CouponStatus }>`
  position: absolute;
  z-index: 1;
  left: 20px;
  bottom: 25px;
  font-weight: bold;
  font-size: 26px;
  color: ${({ status }) => couponValueColorByStatus(status)};
  height: 32px;
  line-height: 32px;
`
const UseConditionAvailableButton = styled.button.attrs({ type: 'button' })`
  color: ${grayColorByStatus('AVAILABLE', 0.4)};
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  position: absolute;
  z-index: 1;
  display: block;
  right: 20px;
  bottom: 25px;
  font-size: 13px;
  height: 20px;
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
`
const UseConditionDisabledButton = styled(UseConditionAvailableButton).attrs({ disabled: true })`
  color: ${grayColorByStatus('DISABLED')};
  text-decoration: none;
  cursor: auto;
`

interface CouponProps extends CouponItem {
  onClick?: (e: React.SyntheticEvent) => void
}

function Coupon({ name, description, status, validityPeriod, discountPolicy, onClick }: CouponProps) {
  const expireDate = new Date(validityPeriod.endAt.replace('[Etc/UTC]', ''))
  const couponValue =
    discountPolicy.type === 'AMOUNT' ? `${formatNumber(discountPolicy.value)}원` : `${discountPolicy.value}%`

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (status === 'AVAILABLE') {
      onClick && onClick(e)
    }
  }

  const UseConditionButton = status === 'AVAILABLE' ? UseConditionAvailableButton : UseConditionDisabledButton

  return (
    <CouponContainer onClick={handleClick}>
      <DescriptionContainer>
        <CouponName status={status}>{name}</CouponName>
        <UseCondition status={status}>{description}</UseCondition>
        <ExpireDate status={status}>{moment(expireDate).format('YY.MM.DD까지')}</ExpireDate>
      </DescriptionContainer>

      <CouponValue status={status}>{couponValue}</CouponValue>
      <UseConditionButton onClick={handleClick}>사용조건</UseConditionButton>
    </CouponContainer>
  )
}

function grayColorByStatus(status: CouponStatus, opacity: number = 1) {
  return `rgba(${GetGlobalColor('gray')}, ${status === 'AVAILABLE' ? opacity : 0.3})`
}

function couponValueColorByStatus(status: CouponStatus) {
  const colorValue = GetGlobalColor(status === 'AVAILABLE' ? 'blue' : 'gray')

  return `rgba(${colorValue}, ${status === 'AVAILABLE' ? '1' : '0.3'})`
}

export default Coupon
