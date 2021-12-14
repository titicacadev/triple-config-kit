const { readdirSync } = require('fs')

const {
  createNamingConventionConfig,
  createNamingConventionOptions,
  addReactComponentNamingConvention,
} = require('./rules/typescript/naming-convention')

function createConfig({
  type,
  allowedNames = [],
  project,
  tsconfigRootDir,
  enableTypeCheck,
  hasBabel = checkBabelExist(),
} = {}) {
  if (type === undefined) {
    throw new Error('type 파라미터가 없습니다. ("frontend" | "node")')
  }

  const { overrides, ...restConfig } = getBaseConfig(type)

  return {
    ...restConfig,
    parser: hasBabel ? '@babel/eslint-parser' : undefined,
    overrides: [
      ...overrides,
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

function getBaseConfig(type) {
  const base = require('.')

  if (type === 'frontend') {
    const frontend = require('./frontend')

    return {
      ...base,
      ...frontend,
      extends: [...base.extends, ...frontend.extends],
      overrides: [...base.overrides, ...frontend.overrides],
    }
  }

  return {
    ...base,
  }
}
