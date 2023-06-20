/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
  theme: {
    extend: {
		boxShadow: {
			cardBoxShadow: '3px 3px #a1a1aa',
			layoutBoxShadow: '6px 6px #a1a1aa',
		},
		fontFamily: {
			sourceCodePro: "'Source Code Pro', monospace"
		}
	},
  },
	plugins: [
		'tailwindcss: {}',
		'autoprefixer: {}',
	],
}

