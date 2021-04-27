module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    curly: ['error', 'all'],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
  },
}
