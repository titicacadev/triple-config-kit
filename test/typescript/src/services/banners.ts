import { IncomingMessage } from 'http'

import fetch from 'isomorphic-fetch'

import { API_URI_BASE } from '../config'

export interface InventoryItem {
  id: number
  image: string
  target: string
  desc: string
  detailedDesc: string
  bucket?: unknown
}

export interface InventoryItemsResponse {
  items: InventoryItem[]
}

export async function fetchAdBanners(
  req?: IncomingMessage,
): Promise<InventoryItem[]> {
  // const response = await fetch(`/api/inventories/v1/menu/items`)
  const response = await fetch(
    `${
      req ? API_URI_BASE : ''
    }/api/inventories/v1/poi-01929c6f-9213-4a78-a31d-3d37d6ef54e9-v0/items`,
  )
  const { items = [] }: InventoryItemsResponse = await response.json()

  return items
}
