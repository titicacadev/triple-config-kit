module.exports = {
  plugins: ["prettier", "react", "react-hooks"],
  extends: [
    "./recommends/eslint",
    "./recommends/prettier",
    "./recommends/react",
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/strict",
    "./rules/react",
    "./rules/react-a11y",
    "./rules/react-hooks"
  ].map(require.resolve),
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "detect" // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    }
  },
  rules: {}
};
