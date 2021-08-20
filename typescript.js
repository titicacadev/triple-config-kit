module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'standard', 'promise', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    ...['./rules/standard', './rules/typescript', './rules/custom/common'].map(
      require.resolve,
    ),
    'plugin:prettier/recommended',
    require.resolve('./rules/prettier'),
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
  rules: {
    // prettier 맨 뒤로 옮기면서 생긴 불일치
    curly: ['error'],

    // typescript 관련 규칙이 뒤로 가면서 생긴 불일치
    'no-use-before-define': ['error'],

    // standard를 가장 마지막으로 옮기며 생긴 불일치 보정
    camelcase: ['off'],
  },
}
