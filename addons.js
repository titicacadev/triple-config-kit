const {
  getRules,
  commonExcludes,
} = require('./rules/typescript/naming-convention')

function createConfig({ allowedNames = [], project } = {}) {
  const namingConventionIgnoreRegEx = `^(${[
    ...commonExcludes,
    ...allowedNames,
  ].join('|')})$`

  return {
    extends: require.resolve('.'),
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/naming-convention': getRules({
            regex: namingConventionIgnoreRegEx,
          }),
        },
      },
      ...(project
        ? [
            {
              files: ['*.ts', '*.tsx'],
              extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
              ],
              parserOptions: { project },
              settings: { 'import/resolver': { typescript: { project } } },
            },
          ]
        : []),
    ],
  }
}

module.exports = { createConfig }
