const {
  getRules,
  commonExcludes,
} = require('./rules/typescript/naming-convention')

function createConfig({ project, allowedNames = [] } = {}) {
  const namingConventionIgnoreRegEx = `^(${[
    ...commonExcludes,
    ...allowedNames,
  ].join('|')})$`

  return {
    extends: require.resolve('.'),
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parserOptions: { project },
        settings: { 'import/resolver': { typescript: { project } } },
        rules: {
          '@typescript-eslint/naming-convention': getRules({
            regex: namingConventionIgnoreRegEx,
          }),
        },
      },
    ],
  }
}

module.exports = { createConfig }
