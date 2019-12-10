module.exports = {
  rules: {
    camelcase: ['error', { properties: 'always' }],
    'import/order': ['error',  {
      groups: ["builtin", "external", ["parent", "sibling", "index"]],
      'newlines-between': 'always'
    }]
  },
}
