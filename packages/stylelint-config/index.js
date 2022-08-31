// const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-prettier/recommended',
    'stylelint-config-idiomatic-order',
    // 'stylelint-config-property-sort-order-smacss',
    // 'stylelint-config-recess-order'
  ],
  // plugins: ['stylelint-order'],
  rules: {
    // 'order/order': [],
    // 'order/properties-order': [],
    // 'order/properties-order': [sortOrderSmacss()],
    'string-quotes': 'single',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
      },
    ],
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['screen', 'mixin', 'include', 'layer'] },
    ],
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 'order/properties-alphabetical-order': true,
  },
};
