/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11yrecommended',
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

  // extends: [
  //   ...[
  //     './plugin-configs/react',
  //     './plugin-configs/react-hooks',
  //     './plugin-configs/jsx-a11y',
  //   ].map(require.resolve),
  //   'standard-jsx',
  //   ...[
  //     './plugin-configs/react-jsx-runtime',
  //     './rules/react',
  //     './rules/react-hooks',
  //     './rules/prettier',
  //   ].map(require.resolve),
  // ],
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/naming-convention': createNamingConventionConfig({
  //         options: addReactComponentNamingConvention(
  //           createNamingConventionOptions(),
  //         ),
  //       }),
  //     },
  //   },
  // ],
}
