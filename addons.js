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

function withTypeCheckingRules(config, { project }) {
  return {
    ...config,
    extends: [
      ...config.extends,
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: { ...config.parserOptions, project },
  }
}

module.exports = { createConfig, withTypeCheckingRules }
