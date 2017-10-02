module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
		],

	}
};
