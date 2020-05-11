module.exports = {
	hooks: {
		'pre-commit': 'pretty-quick --staged',
	//	'pre-push': 'yarn lint-staged && yarn lint',
	},
};
