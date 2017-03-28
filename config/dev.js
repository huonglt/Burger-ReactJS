const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const webpack = require('webpack');

module.exports =  merge(baseConfig, {
	devServer: {
    port: 8080,
		historyApiFallback: true
	},
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('dev')})
  ]
});
