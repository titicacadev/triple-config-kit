module.exports = {
  extends: [
    './style',
    './variables',
    './react',
    './react-hooks',
    './import',
  ].map(require.resolve),
}
