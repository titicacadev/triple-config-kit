module.exports = {
  extends: ['./react', './react-hooks', './import'].map(require.resolve),
  env: {
    es6: true,
    es2021: false,
  },
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'handle-callback-err': ['error', '^(err|error)$'],
    'lines-between-class-members': ['error', 'always'],
    'no-console': 'error',
    'no-negated-in-lhs': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-return-await': 'error',
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': 'error',

    // standard 추천 규칙 모음을 사용하면서 새로 추가된 규칙 비활성화
    'array-callback-return': 'off',
    'default-case-last': 'off',
    'dot-notation': 'off',
    'import/no-absolute-path': 'off',
    'no-loss-of-precision': 'off',
    'no-unreachable-loop': 'off',
    'no-useless-backreference': 'off',
    'no-var': 'off',
    'node/handle-callback-err': 'off',
    'node/no-exports-assign': 'off',
    'node/no-new-require': 'off',
    'node/no-path-concat': 'off',
    'prefer-regex-literals': 'off',

    // standard 추천 규칙 모음을 사용하면서 변경된 규칙설정 보정
    'no-empty': ['error', { allowEmptyCatch: false }],
    'use-isnan': [
      'error',
      { enforceForIndexOf: false, enforceForSwitchCase: true },
    ],
  },
}
