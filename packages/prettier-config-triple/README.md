# @titicaca/prettier-config-triple

## Installation

```bash
npm install @titicaca/prettier-config-triple prettier --save-dev
```

## Usage

`package.json` 파일의 `scripts` 속성에 다음을 추가해주세요.

```json
{
  "scripts": {
    "format": "prettier . --check",
    "format:fix": "prettier . --write"
  }
}
```

`.prettierrc` 파일을 생성하고 다음을 추가해주세요.

<!-- prettier-ignore -->
```js
"@titicaca/prettier-config-triple"
````

또는 `package.json` 파일에 다음을 추가해주세요.

```json
{
  "prettier": "@titicaca/prettier-config-triple"
}
```
