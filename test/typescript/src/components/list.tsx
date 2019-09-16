import styled from 'styled-components'
import { GetGlobalColor } from '@titicaca/triple-design-system'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const ListItem = styled.li`
  display: block;
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0 0 0 18px;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(${GetGlobalColor('gray')}, 0.9);
  background: url(https://assets.triple.guide/images/img-bullet-oval@3x.png) 0
    5px no-repeat;
  background-size: 10px 10px;
`
