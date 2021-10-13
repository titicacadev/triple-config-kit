const {
  commonExcludes,
  getRules: getNamingConvention,
} = require('./naming-convention')

const regex = `^(${commonExcludes.join('|')})$`

module.exports = {
  rules: {
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
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/45
     */
    '@typescript-eslint/no-empty-function': 'off',
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/55
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    camelcase: 'off',
    '@typescript-eslint/naming-convention': getNamingConvention({ regex }),
  },
}
