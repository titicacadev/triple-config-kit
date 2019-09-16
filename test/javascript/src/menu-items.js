import React from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'

export default function MenuItems() {
  return (
    <>
      <Menu.Item>
        <Link href="/">
          <a>Main</a>
        </Link>
      </Menu.Item>
    </>
  )
}
