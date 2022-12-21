module.exports = {
  root: true,
  extends: ['standard'],
  globals: {
    IS_DEVELOPMENT: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    'no-new': 'off'
  }
}
