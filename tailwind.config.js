/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			animation: {
				"bg-colors": "background-colors 20s infinite linear alternate",
				"text-colors": "text-colors 20s infinite linear alternate",
			},
		},
	},
	plugins: [],
};
