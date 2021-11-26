module.exports = createNamingConventionConfig

function createNamingConventionConfig({ allowedNames } = {}) {
  return ['error', ...createOptions({ allowedNames })]
}

function createOptions({ allowedNames = [] }) {
  const filter = createFilter({ allowedNames })

  return [
    {
      selector: 'default',
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
      filter,
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
      filter,
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      filter,
    },
    {
      selector: 'variable',
      format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
      filter,
    },
    {
      selector: 'enumMember',
      format: ['PascalCase'],
      filter,
    },
  ]
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
