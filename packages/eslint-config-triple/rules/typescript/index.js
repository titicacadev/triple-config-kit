const { rules: baseRules } = require('../base')

const { createNamingConventionConfig } = require('./naming-convention')

module.exports = {
  rules: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      baseRules['no-use-before-define'],
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      baseRules['no-unused-expressions'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],
    camelcase: 'off',
    '@typescript-eslint/naming-convention': createNamingConventionConfig(),

    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
  },
}
