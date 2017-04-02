const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = merge(baseConfig, {
  entry: {
    app: './client/index.js',
    vendor: ['react']
  },
  devServer: {
    port: 9090,
    historyApiFallback: true
  },
  output: {
		path: path.resolve('dist'),
    filename: '[name].[chunkhash].js'
	},
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      devtool: 'source-map'
    }),
    new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
      minChunks: 2
		}),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    })]
  }
);
