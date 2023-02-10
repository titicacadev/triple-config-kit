module.exports = {
  rules: {
    'react/display-name': 'error',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/prop-types': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
