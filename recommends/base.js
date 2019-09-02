module.exports = {
  extends: ['./eslint', './prettier', './standard', './react'].map(
    require.resolve,
  ),
}
