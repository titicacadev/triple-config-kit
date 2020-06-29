module.exports = {
  extends: [
    'standard',
    ...([
      './eslint',
      // './standard',
      './prettier',
      './react',
      './react-hooks',
    ].map(require.resolve)),
  ]
}
