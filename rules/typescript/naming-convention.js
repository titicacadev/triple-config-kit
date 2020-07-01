const commonExcludes = [
  '_*',
  '__html',
  'Provider',
  'Consumer',
  'Component',
  'Content-Type',
  'X-Soto-Session',
]
const rules = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
  },
  {
    selector: 'parameter',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'property',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['UPPER_CASE', 'PascalCase', 'camelCase'],
  },
]

module.exports = {
  rules,
  commonExcludes,
  getRules({ regex = '', rules: customRules = [] }) {
    const baseRules = [...rules, ...customRules]

    if (!regex) {
      return baseRules
    } else {
      return baseRules.map((item) =>
        typeof item !== 'string'
          ? {
              ...item,
              filter: {
                regex,
                match: false,
              },
            }
          : item,
      )
    }
  },
}
