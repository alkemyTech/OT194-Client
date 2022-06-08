module.exports = {
	corePlugins: {
		preflight: false
	},
	content: ['./src/**/*.{html,js,jsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				redPure: '#FF0000',
				redOng: '#DB5752',
				yellowOng: '#FAFA88',
				blueOng: '#9AC9FB',
				bluePure: '#0038FF'
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
};
