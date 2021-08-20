module.exports = {
  rules: {
    // typescript 관련 규칙이 뒤로 가면서 생긴 불일치
    'no-use-before-define': ['error'],

    // standard를 가장 마지막으로 옮기며 생긴 불일치 보정
    camelcase: ['off'],
  },
}
