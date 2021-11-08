module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
  },
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
      extends: ['stylelint-config-styled-components'],
      rules: {
        'function-name-case': null,
        'value-keyword-case': null,
      },
    },
  ],
}
