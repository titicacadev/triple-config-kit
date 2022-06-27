module.exports = {
  extends: [
    'eslint:recommended',
    './plugin-configs/import',
    './plugin-configs/promise',
    'standard',
    ...[
      './rules/base',
      './rules/import',
      './rules/promise',
      './rules/prettier',
    ].map(require.resolve),
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        './plugin-configs/typescript',
        './plugin-configs/import-typescript',
        ...['./rules/typescript', './rules/prettier'].map(require.resolve),
      ],
      settings: {
        /**
         * import plugin with Typescript configuration
         * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
}
