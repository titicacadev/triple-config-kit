module.exports = {
  extends: ['./react', './react-hooks', './import'].map(require.resolve),
  env: {
    es6: true,
    es2021: false,
  },
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-console': 'error',
    'no-negated-in-lhs': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-return-await': 'error',
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': 'error',
  },
}
