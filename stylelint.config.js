module.exports = {
	plugins: ['stylelint-order', 'stylelint-scss'],
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	rules: {
		'alpha-value-notation': 'number',
		'color-function-notation': 'legacy',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind'],
			},
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind'],
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
			'height',
			'color',
			'padding',
			'padding-top',
			'padding-left',
			'padding-right',
			'padding-bottom',
		],
	},
};
