const keywordsTailwind = {
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
  plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
  extends: [
    'stylelint-config-tailwindcss',
    'stylelint-config-standard',
    '@stylistic/stylelint-config',
  ],
  ignoreFiles: ['node_modules', '.next', '.github', 'out', 'build'],
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'import-notation': 'string',
        'custom-property-pattern': '^([a-z][a-z0-9]*)(-[a-zA-Z0-9]+)*$',
        'at-rule-no-unknown': [true, keywordsTailwind],
        'alpha-value-notation': 'number',
        'rule-empty-line-before': 'always-multi-line',
        'custom-property-empty-line-before': 'never',
        'declaration-empty-line-before': 'never',
        'at-rule-empty-line-before': [
          'always',
          {
            except: ['inside-block'],
            ignoreAtRules: ['import'],
          },
        ],
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
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'font',
          'font-family',
          'color',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom',
        ],
      },
    },

    {
      plugins: ['stylelint-scss'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-tailwindcss/scss',
      ],
      files: ['**/*{.scss,.sass}'],
      customSyntax: 'postcss-scss',
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [true, keywordsTailwind],
      },
    },
  ],
};
