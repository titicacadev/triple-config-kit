const {
  getRules,
  commonExcludes,
} = require('./rules/typescript/naming-convention')

function createConfig({ allowedNames = [], project, enableTypeCheck } = {}) {
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
        ...(project
          ? {
              ...(enableTypeCheck
                ? {
                    extends:
                      'plugin:@typescript-eslint/recommended-requiring-type-checking',
                    parserOptions: { project },
                  }
                : {}),
              /**
               * import plugin with Typescript configuration
               * https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
               */
              settings: {
                'import/resolver': {
                  typescript: {
                    alwaysTryTypes: true,
                    project,
                  },
                },
              },
            }
          : {}),
      },
    ],
  }
}

module.exports = createConfig
