module.exports = {
  root: true,
  extends: ['standard'],
  globals: {
    IS_DEVELOPMENT: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  ignorePatterns: [".next", "**/public"],
  rules: {
    'no-new': 'off',
    'no-unused-vars': 'off',
    'space-infix-ops': 'off',
    'keyword-spacing': 'off',
    quotes: 'off',
    "comma-spacing": "off",
    "block-spacing": "off",
    "no-sequences": "off",
    "no-undef": "off",
    eqeqeq: "off",
    "space-before-blocks": "off",
    yoda: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "no-var": "off",
    "semi-spacing": "off",
    "object-curly-spacing": "off",
    "no-floating-decimal": "off",
    "space-unary-ops": "off",
    "no-unused-expressions": "off",
    "key-spacing": "off",
    "no-mixed-operators": "off",
    "no-redeclare": "off",
    "no-void": "off",
    "one-var": "off",
    "no-return-assign": "off",
    "no-useless-escape": "off",
    "no-use-before-define":"off",
    "no-fallthrough": "off",
    "no-tabs": "off",
    "no-extra-parens": "off",
    "wrap-iife": "off",
    "no-prototype-builtins": "off",
    "no-case-declarations": "off"
  }
}
