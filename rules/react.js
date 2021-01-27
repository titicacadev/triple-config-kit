module.exports = {
  rules: {
    'react/prop-types': 0, // See issue #28
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
