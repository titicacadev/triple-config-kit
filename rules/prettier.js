module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    /**
     * prettier에서 비활성화하지만 필요에 의해 다시 활성화하는 규칙
     */
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/42
     */
    curly: ['error', 'all'],
  },
}
