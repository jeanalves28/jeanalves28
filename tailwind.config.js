/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./app/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./pages/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./components/**/*.{html,js,jsx,ts,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mPlusRounded1c: 'var(--font-m-plus-rounded-1c)',
			},

			boxShadow: {
				'blur-btn-theme': '0 0 0.25rem 0.2rem rgba(37, 207, 242, 0.25)',
				'blur-btn-active-theme': '0 0 0.25rem 0.3rem rgba(37, 207, 242, 0.25)',
				'blur-btn-theme-dark': '0 0 0.25rem 0.2rem rgba(49, 217, 251, 0.65)',
				'blur-btn-active-theme-dark':
					'0 0 0.25rem 0.3rem rgba(49, 217, 251, 0.65)',
				'input-blue-theme-dark': '0 0 .15rem 0.25rem rgba(49, 217, 251, 0.8)',
			},

			borderColor: {
				'blue-btn-theme': 'rgb(49, 217, 251)',
				'ghost-white': '#f8f8ff',
			},

			spacing: {
				13: '3.5rem',
			},

			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},

			flexGrow: {
				2: '2',
				3: '3',
			},

			textColor: {
				'ghost-white': '#f8f8ff',
			},

			backgroundColor: {
				'ghost-white': '#f8f8ff',
				'black-theme': '#0d1117'
			},

			screens: {
				laptop: '1440px',
				desktop: '1366px',
				ipad: '1025px',
			},

			transitionProperty: {
				bg: 'background-color',
			},

			keyframes: {
				'opacity-transition-open': {
					from: {
						opacity: 0,
						transform: 'translateY(-0.5rem)',
					},

					to: {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},

				'opacity-transition-close': {
					from: {
						opacity: 1,
						transform: 'translateY(0)',
					},

					to: {
						opacity: 0,
						transform: 'translateY(-0.5rem)',
					},
				},

				'fading-close': {
					from: {
						opacity: 1,
					},

					to: {
						opacity: 0,
					},
				},

				'fading-open': {
					from: {
						opacity: 0,
						transform: 'translateY(3rem)',
					},

					to: {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},

				'fading-black-transparent': {
					from: {
						opacity: 0,
					},

					to: {
						'background-color': 'rgba(0, 0, 0, 0.3)',
					},
				},

				'grow-container': {
					from: {
						opacity: 0,
						transform: 'scale(.9, .9)',
					},

					to: {
						opacity: 1,
						transform: 'scale(1, 1)',
					},
				},

				'fading-simple': {
					from: {
						opacity: 0,
					},

					to: {
						opacity: 1,
					},
				},
			},

			animation: {
				'translate-open': 'opacity-transition-open .15s both ease-out',
				'translate-close': 'opacity-transition-close .15s both ease-in',
				'fading-close': 'fading-close .15s linear',
				'fading-up-container-1': 'fading-open .9s .2s backwards ease-out',
				'fading-up-container-2': 'fading-open .9s .4s backwards ease-out',
				'fading-up-container-3':
					'fading-open .75s calc(2 * .95s) backwards ease-out',
				'fading-bg-black': 'fading-black-transparent .5s both linear',
				'grow-container': 'grow-container .2s .5s both ease-out',
				'fading-simple': 'fading-simple .5s backwards linear',
			},
		},
	},

	plugins: [],
};
