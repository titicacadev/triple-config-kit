# Triple Frontend Style Configs
> `eslint-config-triple` 은 [eslint](http://eslint.org/) 룰 셋을 기본으로 트리플 frontend 개발 스타일 전반의 설정을 제공합니다.

- `eslint-config-triple`는 아래의 룰 셋을 제공합니다.
  - eslint es6+ : `@titicaca/eslint-config-triple`
  - eslint typescript : `@titicaca/eslint-config-triple/typescript`
  - prettier : `@titicaca/eslint-config-triple/prettierrc`

## Install
```
> npm install @titicaca/eslint-config-triple
```

## Usage
### eslint
* ES6+ 룰 셋을 사용하는 경우
```
// .eslintrc 파일
{
  "extends": "@titicaca/eslint-config-triple",
  "rules": {
    // 프로젝트별 적용할 Rules
  }
}
```

* Typescript 룰 셋을 사용하는 경우
```
// .eslintrc 파일
{
  "extends": "@titicaca/eslint-config-triple/typescript",
  "rules": {
    // 프로젝트별 적용할 Rules
  }
}
```

### prettier
* `.prettierrc` 파일
```js
"@titicaca/eslint-config-triple/prettierrc"
```

* `package.json` 파일
```js
{
  "name": "@titicaca/unicorn-project",
  "version": "0.0.1",
  "prettier": "@titicaca/eslint-config-triple/prettierrc"
  ...
}
```

## Triple JavaScript Style Guilde
상세한 내용은 다음의 JavaScript 스타일 가이드를 참조하세요  

### [Triple JavaScript Style Guilde](STYLE_GUIDE.md)


## License
`eslint-config-triple` is released under the [MIT license](LICENSE).

```
Copyright (c) 2019 TRIPLE Corp.

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