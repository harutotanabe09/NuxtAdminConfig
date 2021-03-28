module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-primer',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'primer/colors': [true],
  },
  plugins: [
    'stylelint-config-primer/plugins/no-override',
    'stylelint-config-primer/plugins/no-unused-vars',
    'stylelint-config-primer/plugins/no-unused-vars',
  ],
}
