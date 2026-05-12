const keywords = {
  ignoreAtRules: [
    /** tailwindcss v4 */
    'theme',
    'source',
    'utility',
    'variant',
    'custom-variant',
    'plugin',
    'reference',
    /** tailwindcss v3 */
    'tailwind',
    'apply',
    'layer',
    'config',
    /** tailwindcss v1, v2 */
    'variants',
    'responsive',
    'screen',
  ],
};

/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-tailwindcss',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  ignoreFiles: ['node_modules', '.next', '.github', 'out', 'build'],
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      rules: {
        'at-rule-no-unknown': [true, keywords],
        'scss/at-rule-no-unknown': [true, keywords],
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'order/properties-order': [
          'display',
          'flex-flow',
          'justify-content',
          'align-items',
          'align-content',
          'gap',
          'row-gap',
          'column-gap',
          'position',
          'top',
          'left',
          'right',
          'bottom',
          'width',
          'height',
          'color',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom',
        ],
      },
    },
  ],
};
