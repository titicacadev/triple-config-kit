module.exports = createNamingConventionConfig

function createNamingConventionConfig({ allowedNames } = {}) {
  return ['error', ...createOptions({ allowedNames })]
}

function createOptions({ allowedNames = [] }) {
  const filter = createFilter({ allowedNames })

  const commonProps = { filter }

  const addCommonProps = (options) =>
    options.map((option) => ({ ...option, ...commonProps }))

  return addCommonProps([
    {
      selector: 'default',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'variable',
      format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
    },
    {
      selector: 'enumMember',
      format: ['PascalCase'],
    },
  ])
}

function createFilter({ allowedNames: customAllowedNames }) {
  const predefined = ['__html', 'Provider', 'Consumer', 'Component']
  const allowedNames = [...predefined, ...customAllowedNames]

  const regex = `^(${allowedNames.join('|')})$`

  return {
    regex,
    match: false,
  }
}
