/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				opensans: ['Open Sans', 'sans-serif'],
			},
			colors: {
				'gray-650': 'oklch(0.4095 0.032 258.268)',
				'gray-250': 'oklch(0.9 0.008 261.435)',
			},
		},
	},
};
