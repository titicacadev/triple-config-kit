import React, { PureComponent } from 'react'
import Router from 'next/router'
import styled, { css } from 'styled-components'
import { Navbar, Container, Text } from '@titicaca/triple-design-system'
import { closeWindow } from '@titicaca/triple-web-to-native-interfaces'

interface MyErrorProps {
  isPublic?: boolean
  userAgent?: any
}

const ErrorContainer = styled.div`
  ${({ isPublic }: MyErrorProps) =>
    !isPublic &&
    css`
      -webkit-user-select: none;
      -user-select: none;
    `};
`

const Icon = styled.img`
  width: 74px;
  height: 74px;
`

const Button = styled.button`
  margin-top: 20px;
  padding: 11px 24px;
  font-size: 14px;
  font-weight: bold;
  color: #368fff;
  border-radius: 20px;
  border: solid 1px #368fff;
  background-color: transparent;
`

export default class Error extends PureComponent<MyErrorProps> {
  render() {
    const { isPublic } = this.props.userAgent || { isPublic: false }

    return (
      <ErrorContainer>
        {isPublic ? null : (
          <Navbar>
            <Navbar.Item floated="left" icon="back" onClick={closeWindow} />
          </Navbar>
        )}
        <Container margin={{ top: 223 }} textAlign="center">
          <Icon src="https://assets.triple.guide/images/img-empty-error@4x.png" />

          <Text bold size={18}>
            아이코!
          </Text>
          <Text
            center
            margin={{ top: 7 }}
            size="small"
            lineHeight={1.36}
            color="gray"
            alpha={0.5}
          >
            서비스 이용이 원할하지 않습니다.
            <br />
            잠시 후 다시 이용해주세요.
          </Text>

          <Button onClick={isPublic ? Router.back : closeWindow}>
            돌아가기
          </Button>
        </Container>
      </ErrorContainer>
    )
  }
}
