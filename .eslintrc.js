module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'better-styled-components'
	],
	rules: {
		semi: [2, 'always'],
		'better-styled-components/sort-declarations-alphabetically': 2,
		indent: [2, 'tab'],
		'no-tabs': 0
	}
};
