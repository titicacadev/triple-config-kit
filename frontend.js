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
}
