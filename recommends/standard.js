module.exports = {
  env: {
    es6: true,
    es2021: false,
  },

  extends: ['standard'],

  rules: {
    'handle-callback-err': ['error', '^(err|error)$'],
    'lines-between-class-members': ['error', 'always'],
    'no-negated-in-lhs': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-return-await': 'error',
    'standard/no-callback-literal': 'error',

    // 추천 규칙 모음을 사용하면서 새로 추가된 규칙 비활성화
    'array-callback-return': 'off',
    'default-case-last': 'off',
    'dot-notation': 'off',
    'import/no-absolute-path': 'off',
    'no-loss-of-precision': 'off',
    'no-unreachable-loop': 'off',
    'no-useless-backreference': 'off',
    'no-var': 'off',
    'node/handle-callback-err': 'off',
    'node/no-callback-literal': 'off',
    'node/no-exports-assign': 'off',
    'node/no-new-require': 'off',
    'node/no-path-concat': 'off',
    'prefer-regex-literals': 'off',

    // 추천 규칙 모음을 사용하면서 변경된 규칙설정 보정
    'no-empty': ['error', { allowEmptyCatch: false }],
    'use-isnan': [
      'error',
      { enforceForIndexOf: false, enforceForSwitchCase: true },
    ],
  },
}
