module.exports = {
  extends: ['./react', './react-hooks', './import'].map(require.resolve),
  rules: {
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/37
     */
    camelcase: ['error', { properties: 'always' }],
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/74
     */
    'no-console': 'error',
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/45
     */
    'no-empty-function': 'off',
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'no-return-await': 'error',
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'no-unused-expressions': [
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
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'no-use-before-define': ['error', { functions: false }],
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/85
     */
    'object-shorthand': ['error', 'always'],
    /**
     * https://github.com/titicacadev/eslint-config-triple/pull/136
     */
    'require-atomic-updates': 'off',
  },
}
