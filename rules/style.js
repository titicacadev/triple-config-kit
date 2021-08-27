module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
  },
}
