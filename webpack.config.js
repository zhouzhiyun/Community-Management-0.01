const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
			{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                'vue-loader'
                ]
            },
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: [
					"babel-loader" 
				]
			}
		]
    },
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, 'assets'),
			'vue': 'vue/dist/vue.esm.js',
			'material-design-icons': 'C:/material-design-icons'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'],
        })
    ]
};