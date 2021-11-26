const {
  createNamingConventionOptions,
  createNamingConventionConfig,
  addReactComponentNamingConvention,
} = require('./rules/typescript/naming-convention')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard-jsx',
    ...['./rules/react', './rules/react-hooks', './rules/prettier'].map(
      require.resolve,
    ),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': createNamingConventionConfig({
          options: addReactComponentNamingConvention(
            createNamingConventionOptions(),
          ),
        }),
      },
    },
  ],
}
