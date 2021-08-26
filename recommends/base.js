module.exports = {
  extends: ['./standard', './prettier', './react', './react-hooks'].map(
    require.resolve,
  ),
}
