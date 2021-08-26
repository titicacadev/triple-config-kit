module.exports = {
  extends: [
    './style',
    './variables',
    './react',
    './react-hooks',
    './import',
  ].map(require.resolve),
  rules: {
    'no-console': 'error',
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': 'error',

    // eslint:recommended에서 새로 추가된 규칙은 비활성화
    'no-dupe-else-if': ['off'],
    'no-import-assign': ['off'],
    'no-setter-return': ['off'],
  },
}
