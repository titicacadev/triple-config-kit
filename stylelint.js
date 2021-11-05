module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.{js,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-styled-components',
        'stylelint-config-prettier',
      ],
    },
  ],
}
