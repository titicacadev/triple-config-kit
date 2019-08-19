import React from 'react'
import styled from 'styled-components'
import { Container, Text, Button, GetGlobalColor } from '@titicaca/triple-design-system'
import { APP_URL_SCHEME } from '../config'

const SupportContainer = styled(Container)`
  background-color: #f5f5f5;
`
const SupportLink = styled.a`
  color: rgba(${GetGlobalColor('blue')}, 1);
  text-decoration: none;
`

export default function Support() {
  return (
    <SupportContainer padding={{ top: 40, left: 30, right: 30, bottom: 50 }}>
      <Container>
        <Text bold color="gray" size="huge">
          도움이 필요하신가요?
        </Text>
        <Text margin={{ top: 4 }} bold color="blue" size="huge">
          <SupportLink href="tel:1588-2539">1588-2539</SupportLink>
        </Text>

        <Text margin={{ top: 12 }} lineHeight={1.54} color="gray" alpha={0.5} size="tiny">
          해외에서는 +82-2-1588-2539
          <br />
          오전 9시 - 오후 10시 (365일 연중무휴)
        </Text>

        <Button.Group margin={{ top: 30 }} horizontalGap={6}>
          <Button basic color="gray" onClick={openKakaoTalkPlus}>
            카카오톡 문의
          </Button>
          <Button basic color="gray" onClick={mailToTriple}>
            이메일 문의
          </Button>
        </Button.Group>
      </Container>
    </SupportContainer>
  )
}

function openKakaoTalkPlus() {
  window.location.href = `${APP_URL_SCHEME}:///outlink?url=${encodeURIComponent(
    'kakaoplus://plusfriend/friend/@트리플서비스',
  )}&target=browser`
}

function mailToTriple() {
  window.location.href = 'mailto:help@triple-corp.com'
}
