// const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primary: "#548B68",
				secondary: "#E4A954",
			},
			fontFamily: {
				sans: ["Roboto", "Arial", "sans-serif"],
				Almarai: ["Almarai"],
			},
			animation: {
				fadeIn: "fadeIn 2s ease-in forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "1rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("flowbite/plugin"),
		require("@tailwindcss/typography"),
	],
};
