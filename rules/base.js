module.exports = {
  extends: ['./react', './react-hooks', './import'].map(require.resolve),
  env: {
    es6: true,
    es2021: false,
  },
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
    'no-return-await': 'error',
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
    'require-atomic-updates': 'error',
  },
}
