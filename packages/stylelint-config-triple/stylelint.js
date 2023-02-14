/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': null,
  },
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      customSyntax: require('postcss-styled-syntax'),
      rules: {
        // https://github.com/styled-components/stylelint-config-styled-components/blob/master/index.js
        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'no-empty-source': null,
        'no-missing-end-of-source-newline': null,

        'function-name-case': null,
        'value-keyword-case': null,
      },
    },
  ],
}
