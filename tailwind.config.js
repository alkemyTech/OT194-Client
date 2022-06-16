module.exports = {
	corePlugins: {
		preflight: false
	},
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				redPure: '#FF0000',
				redOng: '#DB5752',
				yellowOng: '#FAFA88',
				blueOng: '#9AC9FB',
				bluePure: '#0038FF'
			},
			screens: {
				xs: '375px'
			}
		}
	},
	plugins: []
};
