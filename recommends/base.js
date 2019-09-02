module.exports = {
  extends: ['./eslint', './prettier', './react', './standard', './react'].map(
    require.resolve,
  ),
}
