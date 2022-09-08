/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/*.js", "src/components/*.js"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				cabin: ["Cabin", "sans-serif"],
			},
			backgroundImage: {
				dashboardImg: "url('../images/weather.jpg')",
			},
		},
	},
	plugins: [],
};
