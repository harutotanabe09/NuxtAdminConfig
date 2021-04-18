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
    'primer/box-shadow': [true],
    'selector-max-type': 2,
    'selector-max-compound-selectors': 12,
    'max-nesting-depth': 12,
  },
  plugins: [
    'stylelint-config-primer/plugins/no-override',
    'stylelint-config-primer/plugins/no-unused-vars',
  ],
}
