module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': 'error',
    'no-empty-function': 'off',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-return-await': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    'no-use-before-define': ['error', { functions: false }],
    'no-void': ['error', { allowAsStatement: true }],
    'object-shorthand': ['error', 'properties'],
    'require-atomic-updates': 'off',
  },
}
