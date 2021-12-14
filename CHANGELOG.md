# CHANGELOG

## v3.0.2

- TypeScript 파일을 babel 파서로 파싱하는 문제 수정 [#183](https://github.com/titicacadev/eslint-config-triple/pull/183)
- JavaScript 파일에서 import 플러그인의 resolver가 js, jsx, ts, tsx 파일을 모두 참조할 수 있도록 설정 [#184](https://github.com/titicacadev/eslint-config-triple/pull/184)
- `stylelint` minor 업그레이드 [#180](https://github.com/titicacadev/eslint-config-triple/pull/180)
- `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin` minor 업그레이드 [#181](https://github.com/titicacadev/eslint-config-triple/pull/181)
- prettier 사용법 문서에서 잘못된 예시 수정 [#178](https://github.com/titicacadev/eslint-config-triple/pull/178), [#179](https://github.com/titicacadev/eslint-config-triple/pull/179)

## v3.0.1

- 기본 파서로 ESLint의 파서를 사용 [#176](https://github.com/titicacadev/eslint-config-triple/pull/176)
- babel을 사용하는 프로젝트인지 확인하고 `@babel/eslint-parser`를 사용하는 기능 추가 [#176](https://github.com/titicacadev/eslint-config-triple/pull/176)

## v3.0.0

### 주요 변경 사항

- 트리플 JavaScript 스타일 가이드 작성
- 의존하는 플러그인의 추천 규칙 사용
- stylelint 최신 버전 사용 및 설정 개선
- ESLint 설정을 해주는 `createConfig` 함수 추가

### 세부 변경 사항

- `@babel/eslint-parser`를 사용합니다. [#109](https://github.com/titicacadev/eslint-config-triple/pull/109)
- eslint 버전을 올립니다. [#113](https://github.com/titicacadev/eslint-config-triple/pull/113)
- ESLint 추천 규칙을 사용합니다. [#113](https://github.com/titicacadev/eslint-config-triple/pull/113), [#129](https://github.com/titicacadev/eslint-config-triple/pull/129)
- `import` 플러그인 버전을 올립니다. [#115](https://github.com/titicacadev/eslint-config-triple/pull/115)
- `import` 플러그인의 추천 규칙 모음을 사용합니다. [#115](https://github.com/titicacadev/eslint-config-triple/pull/115), [#130](https://github.com/titicacadev/eslint-config-triple/pull/130)
- `standard`의 추천 규칙 모음을 사용합니다. [#117](https://github.com/titicacadev/eslint-config-triple/pull/117), [#132](https://github.com/titicacadev/eslint-config-triple/pull/132)
- TypeScript 관련 최신 패키지를 사용합니다. [#120](https://github.com/titicacadev/eslint-config-triple/pull/120), [#133](https://github.com/titicacadev/eslint-config-triple/pull/133)
- `typescript-eslint`의 추천 규칙을 사용합니다. [#120](https://github.com/titicacadev/eslint-config-triple/pull/120)
- `prettier` 플러그인의 추천 규칙을 사용합니다. [#125](https://github.com/titicacadev/eslint-config-triple/pull/125)
- `jsx-a11y` 플러그인의 추천 규칙을 사용합니다. [#127](https://github.com/titicacadev/eslint-config-triple/pull/127)
- `promise` 플러그인의 추천 규칙을 사용합니다. [#128](https://github.com/titicacadev/eslint-config-triple/pull/128)
- TypeScript 파일을 `overrides` 옵션을 통해 검사하도록 변경합니다. [#133](https://github.com/titicacadev/eslint-config-triple/pull/133)
- prettier 버전을 올립니다. [#135](https://github.com/titicacadev/eslint-config-triple/pull/135)
- `standard-jsx`의 추천 규칙 모음을 사용합니다. [#137](https://github.com/titicacadev/eslint-config-triple/pull/137)
- 불필요한 자체 규칙 정의를 제거합니다. [#138](https://github.com/titicacadev/eslint-config-triple/pull/138)
- 설정 생성 함수를 추가합니다. [#145](https://github.com/titicacadev/eslint-config-triple/pull/145), [#167](https://github.com/titicacadev/eslint-config-triple/pull/167)
- `import` 플러그인이 TypeScript 모듈 alias를 인식할 수 있게 개선합니다.[#646](https://github.com/titicacadev/eslint-config-triple/pull/146)
- stylelint 버전을 올립니다. [#158](https://github.com/titicacadev/eslint-config-triple/pull/158)
- stylelint 설정을 개선합니다. [#158](https://github.com/titicacadev/eslint-config-triple/pull/158)
- `no-implicit-coercion` 규칙 활성화 [#161](https://github.com/titicacadev/eslint-config-triple/pull/161)
- `react-hooks/exhaustive-deps` 규칙을 워닝으로 변경합니다. [#162](https://github.com/titicacadev/eslint-config-triple/pull/162)
- frontend 규칙 모음을 분리합니다. [#163](https://github.com/titicacadev/eslint-config-triple/pull/163)
- `eslint-typescript`에서 추천하지 않는 import 규칙을 비활성화합니다. [#164](https://github.com/titicacadev/eslint-config-triple/pull/164)
- 스타일 가이드를 작성합니다. [#169](https://github.com/titicacadev/eslint-config-triple/pull/169)
- 가이드에 최대한 맞게 naming-convention 예외를 추가합니다. [#170](https://github.com/titicacadev/eslint-config-triple/pull/170)

## v2.4.0

### New Features

- [#94](https://github.com/titicacadev/eslint-config-triple/pull/94): react/self-closing-comp 규칙 추가
- [#101](https://github.com/titicacadev/eslint-config-triple/pull/101): import/newline-after-import 규칙을 추가합니다.

### Other Changes

- [#89](https://github.com/titicacadev/eslint-config-triple/pull/89): ⬆️ Bump ini from 1.3.5 to 1.3.8
- [#91](https://github.com/titicacadev/eslint-config-triple/pull/91): Rule discussion template에서 assignee 업데이트
- [#95](https://github.com/titicacadev/eslint-config-triple/pull/95): 👥 스티브의 새로운 깃헙 계정으로 변경
- [#96](https://github.com/titicacadev/eslint-config-triple/pull/96): 슬랙 알림 채널 변경
- [#97](https://github.com/titicacadev/eslint-config-triple/pull/97): ⬆️ Bump y18n from 4.0.0 to 4.0.1
- [#99](https://github.com/titicacadev/eslint-config-triple/pull/99): ESLint 최종 설정을 스냅샷으로 저장합니다.
- [#100](https://github.com/titicacadev/eslint-config-triple/pull/100): Prettier 설정을 추가합니다.
- [#102](https://github.com/titicacadev/eslint-config-triple/pull/102): 🔧 npm 패키지에 들어가는 파일 목록 명시

## v2.3.0

### New Features

- [#86](https://github.com/titicacadev/eslint-config-triple/pull/86): object shorthand 규칙을 추가합니다.

### Other Changes

- [#84](https://github.com/titicacadev/eslint-config-triple/pull/84): CODEOWNERS를 A서클로 변경합니다.
- [#87](https://github.com/titicacadev/eslint-config-triple/pull/87): npm token 참조 변경

## v2.2.1

- [#80](https://github.com/titicacadev/eslint-config-triple/pull/80): feat(canary): pr 서브 커맨드 fetch-github-pr 로 변경
- [#82](https://github.com/titicacadev/eslint-config-triple/pull/82): [#81] typescript peerDependency 제거 및 typescript 4 사용

## v2.2.0

### New Features

- import/order 설정 추가 ([#78](https://github.com/titicacadev/eslint-config-triple/pull/78))

## v2.0.0

- eslint@7, prettier@2 및 typescript@3.9 지원
- typescript-eslint@3 지원
  - v3 에서 제거된고 통합된 rule 관련 설정
  - [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) 관련 rule 및 커스터마이징 도구 추가

## v1.1.0

- no-unused-vars 룰을 조정합니다. (#55)
- ignoreRestSiblings: true 로 설정하여, 파라미터 destructuring 시 omit 할 멤버에 대한 lint 를 무시합니다. (#58)

```js
{
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
}
```

## v1.0.1

- [env] GitHub Actions 를 사용한 CI / CD 를 구축합니다. (#53)
- stylelint 관련 패키지 최신화 (#52)

## [v1.0.0](https://github.com/titicacadev/eslint-config-triple/milestone/4?closed=1)

- typescript@3.7.x 를 지원합니다. (#40)
  - prettier 와 eslint 를 모두 typescript 3.7 이상을 지원하는 버전으로 업데이트합니다.
- Stylelint 와 룰셋을 지원합니다. (#49)

## [v0.4.0](https://github.com/titicacadev/eslint-config-triple/issues?q=is%3Aissue+is%3Aclosed+milestone%3Av0.4.0)

- @typescript-eslint/no-empty-function 룰을 off 합니다. (#45)
- eslint-plugin-import 를 활성화하여 import/order 룰을 추가합니다. (#43)
- 한 줄짜리 if 문등에서도 중괄호를 사용하도록 curly 룰을 수정합니다. (#42)
- es6(js)와 typescript 의 camelcase 룰을 일치시킵니다. (#37)

## v0.3.1

prettier 와 충돌이 발생하는 comma-dangle 과 space-before-function-paren 룰 off
import('some-long-named-package') 와 같은 lazy import 시 comma-dangle rule 오류 발생
prettier 가 모두 handle 하도록합니다.

thanks @appear

## [v0.3.0](https://github.com/titicacadev/eslint-config-triple/milestone/2?closed=1)

- eslint-plugin-react-hooks 및 룰 추가 (#32)
- react/prop-types 룰 off (#28)
- 패키지 dependency 미세 조정 및 README.md 미세조정 (#30)

## v0.2.0

- babel-eslint 파서 기본 적용 (#24)
- prettier:recommends 설정 추가 (indent 룰 관련 prettier 와 충돌 케이스 관련) (#26)

## v0.1.0

- prettierrc 룰 셋 추가 (#18)

## v0.0.5

- `typescript`의 버전을 `peerDependencies`로 제한 (`>=3.2.1 <3.7.0`)

## v0.0.4

- no-use-before-define rule 재정의 (#11)
  - { functions: false, classes: true, variables: true } 로 정의
- indent rule 재정의 (#12)
  - ignoredNodes: ['ConditionalExpression > *'] 추가
  - 3항 연산자 하위의 indent 를 무시함 (prettier 를 존중)
- 참고용이던 recommends/airbnb 제거
- workspace 내 prettier 적용
