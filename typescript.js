module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    require.resolve('./recommends/eslint'),
    'plugin:import/errors',
    'plugin:import/warnings',
    require.resolve('./rules/import'),
    'plugin:react/recommended',
    require.resolve('./recommends/react'),
    require.resolve('./rules/react'),
    'plugin:react-hooks/recommended',
    require.resolve('./recommends/react-hooks'),
    require.resolve('./rules/react-hooks'),
    ...[
      './recommends/standard',
      './rules/style',
      './rules/variables',
      './recommends/typescript-eslint',
      './rules/typescript',
      './custom-rules',
    ].map(require.resolve),
    'plugin:prettier/recommended',
    require.resolve('./recommends/prettier'),
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
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
  },
}
