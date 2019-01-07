const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
	VueLoaderPlugin
} = require('vue-loader')
module.exports = {
	entry: path.resolve(__dirname + '/main.js'),
	mode: 'production',

	output: {
		path: path.resolve(__dirname + '/dist/'),
		filename: 'simple-pagination.js',
		libraryTarget: 'umd',
		library: 'SimplePagination',
	},

	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: {
							loader: 'babel-loader',
							options: {
								presets: ['env'],
							},
						},
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				terserOptions: {
					compress: {
						inline: false,
					},
					output: {
						comments: false,
					},
				},
			}),
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'simple-pagination.css',
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),

	],
};