# @titicaca/eslint-config-triple

## Installation

```bash
npm install @titicaca/eslint-config-triple eslint --save-dev
```

## Usage

`package.json`의 scripts 속성에 다음을 추가해주세요.

```json
{
  "scripts": {
    "lint:es": "eslint .",
    "lint:es:fix": "eslint . --fix"
  }
}
```

`.eslintrc.js` 파일을 생성하세요. 컨픽은 여러 종류로 구분되어 있어서 프로젝트에 필요한 컨픽만 이어붙어서 사용할 수 있습니다.

JavaScript, TypeScript 코드 린트 규칙을 설정하려면 다음을 추가하세요.

```json
{
  "extends": ["@titicaca/eslint-config-triple"]
}
```

TypeScript 코드에서 타입 정보까지 활용한 더 엄격한 규칙을 사용하려면 다음을 추가하세요. 이 컨픽도 기본적으로 사용하기를 권장합니다.

```json
{
  "extends": [
    "@titicaca/eslint-config-triple",
    "@titicaca/eslint-config-triple/requiring-type-checking"
  ]
}
```

React 프론트엔드 프로젝트에서는 다음을 추가하세요.

```json
{
  "extends": [
    // 다른 컨픽...
    "@titicaca/eslint-config-triple/frontend"
  ]
}
```

`Prettier`를 사용한다면 다음을 가장 마지막에 추가하세요.

```json
{
  "extends": [
    // 다른 컨픽...
    "@titicaca/eslint-config-triple/prettier"
  ]
}
```

### Contribute

eslint의 최종 설정을 스냅샷으로 기록합니다.

```bash
pnpm run test:snapshot
```

새로운 rule을 추가하여 스냅샷이 깨졌다면, 스냅샷을 업데이트해주세요.

```bash
pnpm run update-snapshot
```

개발중 스냅샷 테스트를 계속 수행하고 싶다면, watch 옵션을 사용하세요.

```bash
pnpm run test:snapshot:watch
```
