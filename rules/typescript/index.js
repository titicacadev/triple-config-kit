const {
  commonExcludes,
  getRules: getNamingConvention,
} = require('./naming-convention')

const regex = `^(${commonExcludes.join('|')})$`

module.exports = {
  rules: {
    'no-var': 'off',

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': true,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true },
    ],
    camelcase: 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    '@typescript-eslint/naming-convention': getNamingConvention({ regex }),

    // 추천 규칙 사용하면서 추가된 규칙 비활성화
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // 추천 규칙 사용하면서 꺼진 규칙 활성화
    'constructor-super': 'error',
    'getter-return': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-redeclare': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unsafe-negation': 'error',
    'valid-typeof': 'error',
  },
}
