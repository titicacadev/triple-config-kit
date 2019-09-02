module.exports = {
  rules: {
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
  },
}
