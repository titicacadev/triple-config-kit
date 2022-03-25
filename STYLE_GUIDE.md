# Triple JavaScript Guide

트리플에서 자바스크립트 코드를 작성하는 모든 이들에게 권장하는 코딩 방식을 안내합니다.

## 사용하는 라이브러리

- TypeScript를 사용합니다. 처음 보는 코드의 적응을 돕고, 잘못 참조하거나 맞지 않는 타입의 변수를 할당하는 등의 실수를 막아줍니다.
- Prettier를 사용합니다. 코드의 스타일을 자동으로 정리하는 포맷터입니다. 세세한 규칙을 일일히 정할 필요 없이 Prettier에 위임합니다.
- ESLint를 사용합니다. 프로그래머가 낼 수 있는 오류를 방지하고, Best Practice를 사용하도록 유도합니다. Prettier가 담당하지 않는 일부 스타일 규칙도 관리합니다.
- [standard ESLint 추천 규칙](https://standardjs.com/rules-kokr.html)을 사용합니다. 이 중 prettier와 충돌하는 규칙은 prettier를 따릅니다.
- ESLint와 설치한 플러그인의 추천 규칙을 사용합니다. 일부 규칙은 standard에서 제공하지 않기 때문에 추천 규칙을 사용하여 플러그인의 효용을 극대화합니다. 사용하는 추천 규칙은 다음과 같습니다.
  - ESLint 추천 규칙
  - import 플러그인 추천 규칙
  - react 플러그인 추천 규칙
  - react-hooks 플러그인 추천 규칙
  - jsx-a11y 플러그인 추천 규칙
  - promise 플러그인 추천 규칙
  - TypeScript 플러그인 추천 규칙

## 방향

1. Readability: 자기자신의 역할과 의도를 설명하는 코드를 작성하세요.
2. Simplicity: 위 원칙을 어기지 않으면서 간결한 코드를 작성하세요.
3. Performance: 위 원칙을 어기지 않으면서 좋은 성능을 내는 코드를 작성하세요.

## 형

- 연산자를 이용한 암시적인 형변환을 사용하지 마세요. 단, boolean으로 형변환하는 "!", "!!"는 사용합니다. [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)

## 함수

- 함수 표현식 대신 함수 선언을 사용하세요. 단, 화살표 함수는 사용합니다. [func-style](https://eslint.org/docs/rules/func-style)

## 객체

- 가능하면 단축 구문을 사용하세요. 단, 메서드는 단축 구문으로 사용하지 않습니다. [object-shorthand](https://eslint.org/docs/rules/object-shorthand)

## 참조

- 정의한 다음 참조하세요. 단, 함수 선언으로 정의한 함수는 정의하기 전에 참조할 수 있습니다. [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)
  - 다른 참조와 달리 함수 선언으로 정의한 함수는 호이스팅되기 때문에 정의하기 전에 참조하는 것이 문제가 되지 않습니다.

## 블록

- 모든 블록에 항상 중괄호를 사용하세요. [curly](https://eslint.org/docs/rules/curly)
- switch의 case 구문에서 블록을 정의하지 마세요. 변수나 함수, 클래스를 정의할 때 블록이 필요하지만 이는 해당 switch문이 무거워지고 있다는 신호입니다. 리팩토링하세요.

## 명명 규칙

- 어떤 역할을 수행하는지 이름으로 설명하세요. 함수의 이름과 파라미터를 보고 어떤 상황에서 사용하는지 유추할 수 있으면 좋은 이름입니다. 간단한 유틸리티 함수가 아니라면 파라미터는 그 역할에 맞는 이름을 붙여주세요. 이는 타입 파라미터에도 동일하게 적용합니다.
- 본인만의 줄임말은 쓰지 마세요. 널리 알려진 단어나 사내 도메인 언어로 활용하는 줄임말은 사용합니다.
- 줄임말을 대문자화할 때 한 단어로 보고 첫 글자만 대문자로 표시합니다. 예를 들어, "usePOI" 대신 "usePoi"를 사용합니다.
- 변수는 명사형, 함수는 동사형으로 지어주세요.
- 기본적으로 camelCase를 사용합니다. [camelCase](https://eslint.org/docs/rules/camelcase), [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md)
- file 단위의 상수는 BIG_SNAKE_CASE를 사용합니다.
- 클래스, 인터페이스, 타입 이름은 PascalCase를 사용합니다. [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md)
- 열거형의 이름과 멤버 모두 PascalCase를 사용합니다. [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md)
- 리액트 컴포넌트는 PascalCase를 사용합니다.
- 소스 파일 이름은 kebab-case를 사용합니다.

## 비동기 처리

- 콜백보다 promise, promise보다 async/await 문법을 선호합니다. [promise/prefer-await-to-callbacks](https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md), [promise/prefer-await-to-then](https://github.com/xjamundx/eslint-plugin-promise/blob/485509660ccc1901fd30040cf4e75c88922c6255/docs/rules/prefer-await-to-then.md)
- `forEach`의 콜백 함수로 비동기 함수를 넘기지 마세요.

## 코드 품질

- console 객체를 사용하지 않습니다. [no-console](https://eslint.org/docs/rules/no-console)
- 사용하지 않는 expression을 쓰지 않습니다. [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
- 사용하지 않는 변수를 쓰지 않습니다. 단, 객체에서 특정 속성을 제외하거나 함수에서 특정 파라미터를 사용하지 않을 때는 예외입니다. [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

## 포맷

- 파일 단위에서 호출하는 함수와 호출 당하는 함수 중, 호출하는 함수를 먼저 작성하세요. 단 다음 경우는 예외입니다.
  - 스크립트를 작성할 때. 최상위 함수를 선언하고 호출하는 것이 전부이기 때문에 함수 정의를 먼저 합니다.
  - 리액트 컴포넌트 내부에서. 화살표 함수로 콜백 함수를 정의하고 사용하는 패턴이 지배적입니다.
- 개행을 사용하여 코드의 의미를 분리합니다. 단, 두 줄 이상의 개행은 사용하지 않습니다. prettier, [import/newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md), [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
- 임포트 구문은 Node.js 표준 모듈, 외부 모듈, 내부 모듈, 부모 디렉토리, 형제 디렉토리 순으로 정렬합니다. [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)

## TypeScript

- 인터페이스를 쓰는 것을 원칙으로 하고 타입이 필요한 경우에만 타입을 사용하세요. [consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)
  - 타입이 필요한 경우:
    - Union Type을 사용할 때
- 객체의 타입을 정의할 때 단축 형태의 메서드를 사용하지 않습니다.
- 타입스크립트 형변환을 할 때 항상 "as" 키워드를 사용합니다. [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)
- 쉽게 추측 가능한 타입은 타이핑하지 마세요. [@typescript-eslint/no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md)
- any 타입을 사용하지 마세요. [@typescript-eslint/no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md)
- 클래스 멤버를 사용할 수 있는 권한에 대해 명시하세요. [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)
- `ts-check`를 제외한 다른 TypeScript 코멘트는 사용하지 않습니다. `ts-expect-error`는 설명이 있으면 사용할 수 있습니다. [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md)
- require 대신 import를 사용하세요. [@typescript-eslint/no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md)

## React

- JSX에서 children이 없으면 닫는 태그를 따로 두지 않습니다. [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- JSX를 조건부 렌더링할 때 삼항 연산자를 사용합니다. short-circuit을 사용했을 때 조건식에 boolean이 아닌 값이 들어가면 해당 값이 렌더링되는 문제가 생깁니다.
- 자식이 하나 뿐인 Fragment를 사용하지 마세요. [react/jsx-no-useless-fragment](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-useless-fragment.md)
- 컴포넌트의 이름을 명시하세요. [react/dislay-name](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)
- prop-types를 사용하지 않습니다. TypeScript를 대신 사용합니다. [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)
- 함수 컴포넌트를 사용합니다. 에러 경게 컴포넌트를 만들 때에만 클래스 컴포넌트를 사용합니다.
- 컴포넌트 생명 주기 동안 바뀌지 않는 값을 상태로 관리하지 마세요. 상수나 `useRef`를 대신 사용할 수 있습니다.
- 상태는 컴포넌트 트리에서 그 상태가 있어야 하는 가장 낮은 위치에 선언합니다. 불필요한 prop drilling을 막을 수 있습니다.
- 독립적인 상태는 각각의 `useState`로 관리하세요. 만약 `setState`를 연속으로 호출하는 코드가 생기면 그 때가 상태를 합칠 때입니다.
- `useEffect`는 한 번에 한 가지 역할을 하도록 분리하세요.
- `useEffect` 안에서만 쓰이는 함수가 있다면 `useEffect` 안에서 정의하세요. 불필요한 의존성 참조를 막을 수 있습니다.
- `useEffect`, `useMemo`, `useCallback`의 의존성 목록에는 변경의 여지가 있는 모든 의존성을 추가합니다. 특정 의존성을 제외해야 한다면 제외하는 이유에 대해 주석을 남겨주세요. react-hooks/exhaustive-deps
- `useMemo`, `useCallback`, `memo`를 사용할 때는 성능을 측정하세요. 무조건 감싸는 것은 큰 성능 향상을 주지 못하고, 가독성도 떨어집니다.
- Higher Order Component (HOC)는 꼭 필요할 때만 사용합니다. 웬만하면 훅으로 대체할 수 있습니다.

## Next.js

- 페이지 내용을 별도의 모듈로 구현하세요. pages 디렉토리의 컴포넌트의 내용을 최소화하세요.
- 특정 페이지에서만 사용하는 쿼리라면 pages 디렉토리의 컴포넌트에서 접근하여 prop으로 전달하세요.
- `getServerSideProps`에서 쿼리 스트링을 prop으로 전달하지 마세요. 쿼리 스트링은 클라이언트에서도 참조할 수 있기 때문에 불필요한 HTTP 요청이 발생합니다.
- rewrites 보다 file system routes를 선호합니다.

## 기여하기

이 가이드는 구성원의 토론을 거쳐 계속 변화합니다. TypeScript, JavaScript를 사용하는 트리플 구성원이라면 누구나 새로운 내용이나 기존 내용의 변경을 제안할 수 있습니다. 코드 리뷰 중에 계속 언급하는 내용이 있다면 이 가이드에 반영하기 좋은 주제일 수 있습니다. 자주 실수하는 코드라거나, 좋은 코드 구조에 대한 아이디어도 이 문서에서 논의할 가치가 있습니다. 이런 내용이 떠올랐다면 GitHub 이슈를 만들어 주세요.
여러분의 참여를 기대하고 있겠습니다. 😄

## 버전 관리 방법

- `major`: ESLint 규칙을 "error"로 추가
- `minor`: 가이드에 항목 추가
- `minor`: ESLint 규칙을 "warn"으로 추가
- `minor`: 존재하는 규칙이나 가이드를 제거
- `patch`: 가이드와 다른 ESLint 규칙을 수정

## 참고

- [Feross Aboukhadijeh: Write Perfect Code With Standard And ESLint - JSConf.Asia 2018](https://www.youtube.com/watch?v=kuHfMw8j4xk)
- [Airbnb Javascript 스타일 가이드](https://github.com/ParkSB/javascript-style-guide)
- [프로그래머를 위한 이름 짓는 원리 - 그린랩스](https://green-labs.github.io/programmers-naming)
- [kettanaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- [Types or Interfaces? in TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react#types-or-interfaces)
- [mithi/react-philosophies](https://github.com/mithi/react-philosophies)
