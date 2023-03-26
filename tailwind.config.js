/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"brand-purple": "#6912AA",
				"brand-red": "#FF0000",
				"brand-green": "#34C759",
			},
			fontFamily: {
				"mabry-pro": ["Mabry Pro", "sans-serif"],
			},
		},
	},
	plugins: [],
};
