module.exports = {
  extends: ['./standard', './prettier', './react-hooks'].map(
    require.resolve,
  ),
}
