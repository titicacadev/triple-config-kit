/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard-jsx',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
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
