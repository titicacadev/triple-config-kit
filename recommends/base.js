module.exports = {
  extends: ['./eslint', './standard', './prettier', './react'].map(
    require.resolve,
  ),
}
