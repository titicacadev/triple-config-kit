const { readdirSync } = require('fs')

const {
  createNamingConventionConfig,
  createNamingConventionOptions,
  addReactComponentNamingConvention,
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

  const hasBabel = checkBabelExist()

  return {
    extends: extendCandidates[type] || extendCandidates.node,
    parser: hasBabel ? '@babel/eslint-parser' : undefined,
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/naming-convention': createNamingConventionConfig({
            allowedNames,
            options:
              type === 'frontend'
                ? addReactComponentNamingConvention(
                    createNamingConventionOptions(),
                  )
                : undefined,
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

function checkBabelExist({ cwd = process.cwd() } = {}) {
  const files = readdirSync(cwd)

  const babelrcWithoutExtension = /\.babelrc$/
  const babelrcWithExtension = /\.babelrc\.(json|js|cjs|mjs)$/
  const babelConfig = /babel\.config\.(json|js|cjs|mjs)$/

  return files.some(
    (file) =>
      babelrcWithoutExtension.test(file) ||
      babelrcWithExtension.test(file) ||
      babelConfig.test(file),
  )
}
