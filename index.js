module.exports = {
  extends: [
    './recommends/eslint',
    './recommends/standard',
    './recommends/prettier',
    './recommends/react',
    './recommends/react-hooks',
    './rules/style',
    './rules/variables',
    './rules/react',
    './rules/react-hooks',
    './rules/import',
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
  rules: {},
}
