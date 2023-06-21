module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["tsconfig.json", "tsconfig.dev.json"],
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	ignorePatterns: [
		"/lib/**/*", // Ignore built files.
	],
	plugins: ["@typescript-eslint", "prettier", "simple-import-sort", "import"],
	rules: {
		"prettier/prettier": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/no-unresolved": [
			"error",
			{
				ignore: ["^firebase-functions/.+"],
			},
		],
	},
}
