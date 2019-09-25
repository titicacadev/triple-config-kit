module.exports = {
  extends: ['./style', './variables', './react', './react-hooks'].map(
    require.resolve,
  ),
}
