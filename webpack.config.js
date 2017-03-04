const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.less$/, use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}, 'less-loader']},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.(jpg|png|svg)$/, loader: 'file-loader?name=images/[name].[ext]'}
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	devServer: {
		historyApiFallback: true
	}
}
