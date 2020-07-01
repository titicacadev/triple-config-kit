const {
  commonExcludes,
  getRules: getNamingConvention,
} = require('./naming-convention')
const regex = `^(${commonExcludes.join('|')})$`

module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
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
    '@typescript-eslint/naming-convention': getNamingConvention(regex),
  },
}
