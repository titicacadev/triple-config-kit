# Triple Frontend Style Configs

> `eslint-config-triple` 은 [eslint](http://eslint.org/) 룰 셋을 기본으로 트리플 frontend 개발 스타일 전반의 설정을 제공합니다.

- `eslint-config-triple`는 아래의 룰 셋을 제공합니다.
  - eslint es6+ : `@titicaca/eslint-config-triple`
  - eslint typescript : `@titicaca/eslint-config-triple/typescript`
  - prettier : `@titicaca/eslint-config-triple/prettierrc`
  - stylelint : `@titicaca/eslint-config-triple/stylelint`

## Install

```bash
> npm install @titicaca/eslint-config-triple --save-dev
```

`eslint-config-triple` 에서는 아래의 [패키지들](https://github.com/titicacadev/eslint-config-triple/blob/master/package.json#L37)을 함께 설치합니다.

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `babel-eslint`
- `eslint`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-node`
- `eslint-plugin-prettier`
- `eslint-plugin-promise`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-standard`
- `prettier`
- `stylelint`
- `stylelint-config-recommended`
- `stylelint-config-styled-components`
- `stylelint-processor-styled-components`

따라서, `eslint-config-triple` 를 설치한 프로젝트에서는 해당 패키지들의 다른버전이 중복 설치되지 않도록,
의존성 목록을 수정해주시는것이 좋습니다.

## Usage

### eslint

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:es": "eslint '**/*.{js,ts,tsx}'",
  "lint:es:fix": "npm run lint:es -- --fix"
}
```

- ES6+ 룰 셋을 사용하는 경우

```json
// .eslintrc 파일
{
  "extends": "@titicaca/eslint-config-triple",
  "rules": {
    // 프로젝트별 적용할 Rules
  }
}
```

- Typescript 룰 셋을 사용하는 경우

```json
// .eslintrc 파일
{
  "extends": [
    "@titicaca/eslint-config-triple/typescript",
    "./eslintrc.naming-convention"
    ...
  ],
  "rules": {
    // 프로젝트별 적용할 Rules
  }
}
```

- `eslintrc.naming-convention.js` 에서 [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) 커스터 마이징

```js
const namingConvention = require('@titicaca/eslint-config-triple/rules/typescript/naming-convention')
const excludes = [
  ...namingConvention.commonExcludes,
  // my excludes
  '(banner|region|trip|event)_id',
  'filter_(id|value|layover_types|stop_points|airline|outbound_departure_time|inbound_departure_time)',
]
const regex = `^(${excludes.join('|')})$`

module.exports = {
  rules: {
    '@typescript-eslint/naming-convention': namingConvention.getRules({
      // rules to extend
      rules: [
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase', 'snake_case'],
        },
      ],
      // custom exclude pattern
      regex,
    }),
  },
}
```

eslint-config-triple 에서 정의하는 naming-convention 을 확장하고 싶을때 사용합니다.

### prettier

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:etc": "prettier '**/*.{json,yaml,md}' --check",
  "lint:etc:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

js, ts 파일은 `eslint-plugin-prettier`이 검사하므로 prettier는 기타 파일(`.json`, `.yaml`, `.md`)만 검사합니다.

- `.prettierrc` 파일로 규칙을 관리할 때

```js
'@titicaca/eslint-config-triple/prettierrc'
```

- `package.json` 파일로 규칙을 관리할 때

```json
{
  "name": "@titicaca/unicorn-project",
  "version": "0.0.1",
  "prettier": "@titicaca/eslint-config-triple/prettierrc"
  ...
}
```

### stylelint

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint:style": "stylelint './**/*.{js,ts,tsx}'"
}
```

만약 css 파일을 별도로 관리하는 프로젝트라면 `css`를 추가해주세요.

- `.stylelintrc` 파일

```json
{
  "extends": ["@titicaca/eslint-config-triple/stylelint"]
}
```

## Triple JavaScript Style Guilde

상세한 내용은 다음의 JavaScript 스타일 가이드를 참조하세요

### [Triple JavaScript Style Guilde](STYLE_GUIDE.md)

## 개발하기

### eslint 개발하기

eslint의 최종 설정을 스냅샷으로 기록합니다.

```bash
npm run test:snapshot
```

새로운 rule을 추가하여 스냅샷이 깨졌다면, 스냅샷을 업데이트해주세요.

```bash
npm run update-snapshot
```

개발중 스냅샷 테스트를 계속 수행하고 싶다면, watch 옵션을 사용하세요.

```bash
npm run test:snapshot:watch
```

## License

`eslint-config-triple` is released under the [MIT license](LICENSE).

```
Copyright (c) 2020 TRIPLE Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
