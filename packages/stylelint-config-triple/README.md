# @titicaca/stylelint-config-triple

## Installation

```bash
npm install @titicaca/stylelint-config-triple stylelint --save-dev
```

## Usage

`package.json`의 scripts 속성에 다음을 추가해주세요.

```json
{
  "lint:style": "stylelint './**/*.{js,ts,tsx}'",
  "lint:style:fix": "stylelint './**/*.{js,ts,tsx}' --fix"
}
```

만약 css 파일을 별도로 관리하는 프로젝트라면 파일 확장자에 `css`를 추가해주세요.

`.stylelintrc` 파일을 생성하고 다음을 추가해주세요.

<!-- prettier-ignore -->
```json
{
  "extends": ["@titicaca/stylelint-config-triple"]
}
````
