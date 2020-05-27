module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  rules: {
    quotes: ['error',​'single', { avoidEscape: true​}],
    'comma-dangle': ['error',​'always-multiline']
  }
}
