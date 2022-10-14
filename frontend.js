const {
  createNamingConventionOptions,
  createNamingConventionConfig,
  addReactComponentNamingConvention,
} = require('./rules/typescript/naming-convention')

module.exports = {
  extends: [
    ...[
      './plugin-configs/react',
      './plugin-configs/react-hooks',
      './plugin-configs/jsx-a11y',
    ].map(require.resolve),
    'standard-jsx',
    ...[
      './plugin-configs/react-jsx-runtime',
      './rules/react',
      './rules/react-hooks',
      './rules/prettier',
    ].map(require.resolve),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': createNamingConventionConfig({
          options: addReactComponentNamingConvention(
            createNamingConventionOptions(),
          ),
        }),
      },
    },
  ],
}
