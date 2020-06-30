module.exports = {
  extends: [
    './eslint',
    './standard',
    './prettier',
    './react',
    './react-hooks',
  ].map(require.resolve)
}
