import React, { useState } from 'react'
import { NextPageContext } from 'next'
import { Navbar, Text, Footer } from '@titicaca/triple-design-system'
import { EventTrackingProvider, useHistoryContext } from '@titicaca/triple-react-contexts'
import { closeWindow, trackScreen, trackEvent, viewItem } from '@titicaca/triple-web-to-native-interfaces'
import styled from 'styled-components'
import { fetchMyCoupons, CouponItem } from '../../src/services/coupons'
import { fetchAdBanners, InventoryItem } from '../../src/services/banners'
import Tabs from '../../src/components/tabs'
import Coupon from '../../src/components/coupon'
import AdBanner from '../../src/components/ad-banner'
import UseConditionModal, { getUseConditionModalHash } from '../../src/components/use-condition-modal'

interface CouponBoxProps {
  coupons: CouponItem[]
  banners: InventoryItem[]
}

const CouponList = styled.ul`
  padding: 20px 25px;
  background-color: #f5f5f5;
`
const BannerHolder = styled.li`
  display: block;
  margin: 0 0 10px 0;
  padding: 0;
  &:last-child {
    margin: 0;
  }
`
const CouponBox = function({ coupons, banners }: CouponBoxProps) {
  const [tab, setTab] = useState('AVAILABLE')
  const { push } = useHistoryContext()

  return (
    <EventTrackingProvider pageLabel="쿠폰함" trackScreen={trackScreen} trackEvent={trackEvent} viewItem={viewItem}>
      <Navbar borderless={true}>
        <Navbar.Item icon="back" onClick={closeWindow} />
      </Navbar>
      <Text.Title margin={{ left: 30, top: 30, bottom: 30 }}>쿠폰함</Text.Title>
      <Tabs
        value={tab}
        options={[{ label: '사용 가능한 쿠폰', value: 'AVAILABLE' }, { label: '지난 쿠폰', value: 'USED' }]}
        onChange={(_, newTab) => setTab(newTab)}
      />
      <CouponList>
        {coupons
          .filter((item: CouponItem) => item.status === tab)
          .map((item: CouponItem, index: number, items: CouponItem[]) => (
            <React.Fragment key={item.id}>
              <Coupon
                key={item.id}
                {...item}
                onClick={() => push(getUseConditionModalHash(item.id), { useRouter: true })}
              />
              {(index === 2 || (items.length <= 2 && index === items.length - 1)) && (
                <BannerHolder key="ad-banner">
                  <AdBanner banners={banners} />
                </BannerHolder>
              )}
            </React.Fragment>
          ))}
      </CouponList>
      <Footer />

      <UseConditionModal coupons={coupons} />
    </EventTrackingProvider>
  )
}

CouponBox.getInitialProps = async function({ req }: NextPageContext) {
  const coupons = await fetchMyCoupons(req)
  const banners = await fetchAdBanners(req)

  return { coupons, banners }
}

export default CouponBox
