/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['prettier'],
  rules: {
    /**
     * prettier에서 비활성화하지만 필요에 의해 다시 활성화하는 규칙
     */
    curly: ['error', 'all'],
  },
}
