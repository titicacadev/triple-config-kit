const {
  getRules,
  commonExcludes,
} = require('./rules/typescript/naming-convention')

const extendCandidates = {
  frontend: ['.', './frontend'].map(require.resolve),
  node: ['.'].map(require.resolve),
}

function createConfig({
  type,
  allowedNames = [],
  project,
  tsconfigRootDir,
  enableTypeCheck,
} = {}) {
  if (type === undefined) {
    throw new Error('type 파라미터가 없습니다. ("frontend" | "node")')
  }

  const namingConventionIgnoreRegEx = `^(${[
    ...commonExcludes,
    ...allowedNames,
  ].join('|')})$`

  return {
    extends: extendCandidates[type] || extendCandidates.node,
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
              ...(enableTypeCheck
                ? {
                    extends:
                      'plugin:@typescript-eslint/recommended-requiring-type-checking',
                    parserOptions: { project, tsconfigRootDir },
                  }
                : {}),
            }
          : {}),
      },
    ],
  }
}

module.exports = createConfig
