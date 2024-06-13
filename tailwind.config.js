/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		'./src/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./app/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./pages/**/*.{html,js,jsx,ts,tsx,mdx}',
		'./components/**/*.{html,js,jsx,ts,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
