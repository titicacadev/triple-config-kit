module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'standard',
    ...['./rules/base', './rules/prettier'].map(require.resolve),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        ...['./rules/typescript', './rules/prettier'].map(require.resolve),
      ],
      rules: {},
    },
  ],
}
