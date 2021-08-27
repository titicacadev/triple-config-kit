module.exports = {
  rules: {
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

    // 추천 규칙에서 warning이지만 기존에 error였던 규칙 보정
    'import/no-duplicates': 'error',
  },
}
