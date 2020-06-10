module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    curly: ['error', 'all'],
    'import/order': ['error',  {
      groups: ["builtin", "external", ["parent", "sibling", "index"]],
      'newlines-between': 'always'
    }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: "^_+$" }],
  },
}
