module.exports = {
  rules: {
    // standard를 가장 마지막으로 옮기며 생긴 불일치 보정
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_+$', ignoreRestSiblings: true },
    ],
  },
}
