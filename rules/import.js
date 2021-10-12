module.exports = {
  rules: {
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/43
     * https://github.com/titicacadev/eslint-config-triple/issues/75
     */
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
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/98
     */
    'import/newline-after-import': 'error',
  },
}
