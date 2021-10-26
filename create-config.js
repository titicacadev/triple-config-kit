const {
  getRules,
  commonExcludes,
} = require('./rules/typescript/naming-convention')

function createConfig({ allowedNames = [] } = {}) {
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
    ],
  }
}

module.exports = createConfig
