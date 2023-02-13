// eslint-disable-next-line no-undef
module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 settings: {
  react: {
   version: "detect",
  },
 },
 extends: [
  "eslint:recommended",
  "plugin:react/recommended",
  "eslint-config-prettier",
 ],
 overrides: [],
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["react"],
 rules: {
  quotes: ["error", "double"],
  semi: ["warn", "always"],
  "react/react-in-jsx-scope": "off",
  "no-unused-vars": "warn",
 },
};
