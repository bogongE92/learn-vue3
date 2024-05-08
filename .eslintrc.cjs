/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // axios await 오류 잡아주기
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
