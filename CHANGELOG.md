# CHANGELOG

## v2.0.0

* eslint@7, prettier@2 및 typescript@3.9 지원
* typescript-eslint@3 지원
  * v3 에서 제거된고 통합된 rule 관련 설정
  * [naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) 관련 rule 및 커스터마이징 도구 추가

## v1.1.0

* no-unused-vars 룰을 조정합니다. (#55)
* ignoreRestSiblings: true 로 설정하여, 파라미터 destructuring 시 omit 할 멤버에 대한 lint 를 무시합니다. (#58)

```js
{
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
}
 ```

## v1.0.1

* [env] GitHub Actions 를 사용한 CI / CD 를 구축합니다. (#53)
* stylelint 관련 패키지 최신화 (#52)

## [v1.0.0](https://github.com/titicacadev/eslint-config-triple/milestone/4?closed=1)

* typescript@3.7.x 를 지원합니다. (#40)
  * prettier 와 eslint 를 모두 typescript 3.7 이상을 지원하는 버전으로 업데이트합니다.
* Stylelint 와 룰셋을 지원합니다. (#49)

## [v0.4.0](https://github.com/titicacadev/eslint-config-triple/issues?q=is%3Aissue+is%3Aclosed+milestone%3Av0.4.0)

* @typescript-eslint/no-empty-function 룰을 off 합니다. (#45)
* eslint-plugin-import 를 활성화하여 import/order 룰을 추가합니다. (#43)
* 한 줄짜리 if 문등에서도 중괄호를 사용하도록 curly 룰을 수정합니다. (#42)
* es6(js)와 typescript 의 camelcase 룰을 일치시킵니다. (#37)

## v0.3.1

prettier 와 충돌이 발생하는 comma-dangle 과 space-before-function-paren 룰 off
import('some-long-named-package`) 와 같은 lazy import 시 comma-dangle rule 오류 발생
prettier 가 모두 handle 하도록합니다.

thanks @appear

## [v0.3.0](https://github.com/titicacadev/eslint-config-triple/milestone/2?closed=1)

* eslint-plugin-react-hooks 및 룰 추가 (#32)
* react/prop-types 룰 off (#28)
* 패키지 dependency 미세 조정 및 README.md 미세조정 (#30)

## v0.2.0

* babel-eslint 파서 기본 적용 (#24)
* prettier:recommends 설정 추가 (indent 룰 관련 prettier 와 충돌 케이스 관련) (#26)

## v0.1.0

* prettierrc 룰 셋 추가 (#18)

## v0.0.5

* `typescript`의 버전을 `peerDependencies`로 제한 (`>=3.2.1 <3.7.0`)

## v0.0.4

* no-use-before-define rule 재정의 (#11)
  * { functions: false, classes: true, variables: true } 로 정의
* indent rule 재정의 (#12)
  * ignoredNodes: ['ConditionalExpression > *'] 추가
  * 3항 연산자 하위의 indent 를 무시함 (prettier 를 존중)
* 참고용이던 recommends/airbnb 제거
* workspace 내 prettier 적용
