# Triple Javascript Coding Conventions
- eslint-config-triple은 트리플의 자바스크립트 코딩컨벤션을 지원하는 [eslint](http://eslint.org/) 룰 셋입니다.

> ### eslint-config-triple은 2개의 룰 셋을 제공합니다.
> - ES6+ 룰 셋 : `@titicacadev/eslint-config-triple`
> - Typescript 룰 셋 : `@titicacadev/eslint-config-triple/typescript`

## Install
```
#npm install eslint-config-triple
```

## Usage
### ES6+ 룰 셋을 사용하는 경우
```
// .eslintrc 파일
{
  "extends": "@titicacadev/eslint-config-triple",
  "rules": {
    // 프로젝트별 적용할 Rules
  }
}
```

### Typescript 룰 셋을 사용하는 경우
```
// .eslintrc 파일
{
  "extends": "@titicacadev/eslint-config-triple/typescript",
  "rules": {
    // 프로젝트별 적용할 Rules
  }
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