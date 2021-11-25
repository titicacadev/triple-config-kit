module.exports = {
  rules: {
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
  },
}
