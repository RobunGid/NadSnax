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
			animation: {
				skeleton:
					'skeletonFadeIn 0.4s ease-in-out 0.25s 1 normal forwards, skeletonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0.2s infinite;',
				fadeIn: 'fadeIn 0.15s ease-in-out 0s forwards;',
			},

			keyframes: () => ({
				skeletonFadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				skeletonPulse: {
					'50%': {
						opacity: 0.65,
					},
				},
				fadeIn: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
			}),
		},
	},
};
