/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
}
