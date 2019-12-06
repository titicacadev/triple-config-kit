import React, { useCallback, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PagerCarousel from 'nuka-carousel'

import { fetchAdBanners, InventoryItem } from '../services/banners'

interface AdBannerProps {
  banners?: InventoryItem[]
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export default function AdBanner({ banners = [] }: AdBannerProps) {
  const [data, setData] = useState(banners)

  useEffect(() => {
    if (banners.length) return

    fetchAdBanners().then((fetchedBanners) => {
      setData(fetchedBanners)
    })
  }, [banners])

  const carouselRef = useRef()
  const onLoad = useCallback(() => {
    if (carouselRef) {
      const carousel: any = carouselRef.current

      if (carousel) {
        carousel.setSlideHeightAndWidth()
      }
    }
  }, [carouselRef])

  return (
    <PagerCarousel
      ref={carouselRef}
      speed={100}
      cellSpacing={25}
      renderTopRightControls={null}
      renderBottomCenterControls={null}
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
    >
      {data.map(({ image, id, target, desc }: InventoryItem) => (
        <Link key={`${id}`} href={target}>
          <a>
            <Image src={image} alt={desc} onLoad={onLoad} />
          </a>
        </Link>
      ))}
    </PagerCarousel>
  )
}
