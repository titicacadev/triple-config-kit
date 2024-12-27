# Changelog

## 5.3.0

### Minor Changes

- c159982: 의존성 업데이트

## 5.2.1

### Patch Changes

- ada71e5: release 워크플로우 수정

## 5.2.0

### Minor Changes

- 9cdd78a: 패키지 업데이트

## v5.1.1

- curly 룰 추가 [https://github.com/titicacadev/triple-config-kit/pull/265](#265)

## v5.1.0

- css prop 허용 [https://github.com/titicacadev/triple-config-kit/pull/220](#220)
- 의존성 업데이트 [https://github.com/titicacadev/triple-config-kit/pull/225](#225)

## v5.0.0

- 컨픽들을 monorepo로 분리 [https://github.com/titicacadev/triple-config-kit/pull/211](#211)
- 컨픽 설정을 단순하게 변경 [https://github.com/titicacadev/triple-config-kit/pull/213](#213)
  - createConfig 함수를 사용하지 않고 eslint의 표준 옵션인 `extends`를 사용하도록 합니다.
  - capture-plugin-configs가 필요 없게 됩니다.
  - 컨픽을 4 종류로 구분했습니다.
    - `@titicaca/eslint-config-triple`은 기본적인 컨픽입니다. 자바스크립트, 타입스크립트 코드 린트 규칙이 설정됩니다.
    - `@titicaca/eslint-config-triple/requiring-type-checking`은 타입스크립트 코드에서 type 정보까지 활용한 규칙이 설정됩니다. 기존 createConfig 함수의 `enableTypeCheck: true` 일 때와 동일합니다. 하지만 false로 쓰고 있던 프로젝트들이 일부 있기도 해서 기본에 포함되지는 않고 분리되어 있습니다. 일반적으로는 이 컨픽도 사용하기를 권장합니다.
    - `@titicaca/eslint-config-triple/frontend`은 React 코드 관련된 규칙이 설정됩니다.
    - `@titicaca/eslint-config-triple/prettier`은 Prettier와 같이 사용할 때 가장 마지막에 추가되어야 합니다.
  - 네이밍 컨벤션 관련된 규칙이 변경됩니다.
    - @eslint/camelcase을 항상 사용합니다. [standardjs 컨픽](https://github.com/standard/eslint-config-standard/blob/80b9734d817a9babc2d02bb30cfbc98265299a00/.eslintrc.json#L40)을 extends 하므로 property는 검사되지 않아서 써드파티 때문에 snake_case로 된 이름을 ignore 하여 써야했던 문제가 해결됩니다.
    - 리액트 코드는 react/jsx-pascal-case로 PascalCase를 검사합니다.
    - @typescript-eslint/naming-convention은 타입 정보가 필요한 규칙입니다. 설정 되어 있으면 추가적으로 타입과 enum의 naming convention을 검사합니다.
    - 기존에 커버하던 대부분 범위를 포함하면서 allowedNames 같은 예외 설정이 거의 필요 없게 됩니다.
