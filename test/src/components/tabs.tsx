import React from 'react'
import styled from 'styled-components'
import { GetGlobalColor } from '@titicaca/triple-design-system'

const activeColor = `rgba(${GetGlobalColor('blue')}, 1)`
const inactiveColor = `rgba(${GetGlobalColor('gray')}, 0.3)`

const TabsContainer = styled.ul`
  background-color: transparent;
  white-space: nowrap;
  display: table;
  table-layout: fixed;
  width: 100%;
  list-style: none;
`

const Tab = styled.li`
  display: table-cell;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  list-style: none;
`

const TabLabel = styled.span<{ active?: boolean }>`
  display: block;
  margin: 0 10px;
  color: ${({ active }) => (active ? activeColor : inactiveColor)};
  font-size: 14px;
  font-weight: bold;
  border-bottom: solid 1px ${({ active }) => (active ? activeColor : 'transparent')};
  background-color: transparent;
  height: 36px;
  line-height: 36px;
`

export default function Tabs({
  value: currentValue,
  options = [],
  onChange = () => {},
}: {
  value?: any
  options?: { label: string; value: any }[]
  onChange?: (e?: React.SyntheticEvent, value?: any) => any
}) {
  return (
    <TabsContainer>
      {options.map(({ label, value }, i) => (
        <Tab key={i} onClick={(e) => onChange(e, value)}>
          <TabLabel active={currentValue === value}>{label}</TabLabel>
        </Tab>
      ))}
    </TabsContainer>
  )
}
