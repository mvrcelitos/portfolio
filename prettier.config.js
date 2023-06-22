// prettier.config.js
module.exports = {
	useTabs: true,
	tabWidth: 3,
	semi: true,
	printWidth: 100,
	singleQuote: false,
	jsxSingleQuote: false,
	bracketSpacing: true,
	bracketSameLine: true,
	trailingComma: "all",
	arrowParens: "always",
	plugins: [require("prettier-plugin-tailwindcss")],
};