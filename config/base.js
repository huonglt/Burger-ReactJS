const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('build'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{ test: /\.(jpg|png|svg)$/, use: 'file-loader?name=images/[name].[ext]'}
		]
	},
  plugins: [
    new HtmlWebpackPlugin({template: './client/index.html',filename: 'index.html', inject: 'body'})
  ]
}
