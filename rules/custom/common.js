module.exports = {
  rules: {
    'no-console': 'error',
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': 'error',
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/newline-after-import': 'error',
    'react/prop-types': 0, // See issue #28
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',

    // eslint:recommended에서 새로 추가된 규칙
    'no-dupe-else-if': ['off'],
    'no-import-assign': ['off'],
    'no-setter-return': ['off'],
    'import/default': ['off'],
    'import/named': ['off'],
    'import/namespace': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off'],
    'import/no-unresolved': ['off'],

    // standard를 가장 마지막으로 옮기며 생긴 불일치 보정
    camelcase: ['error', { properties: 'always' }],
    curly: ['error', 'all'],
    'no-use-before-define': [
      'error',
      { classes: true, functions: false, variables: true },
    ],
  },
}
