const commonExcludes = [
  '_*',
  '__html',
  'Provider',
  'Consumer',
  'Component',
  'Content-Type',
  'X-Soto-Session',
]
/**
 * https://github.com/titicacadev/eslint-config-triple/issues/37
 */
const rules = [
  'error',
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
    format: ['strictCamelCase', 'UPPER_CASE'],
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
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
