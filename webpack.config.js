var path = require('path');
var webpack = require('webpack');

var port = 8080;
var publicPath = '/resources/react/';

module.exports = {
	entry: './resources/react/component_1/main.js',
	output: {
		path: path.resolve(__dirname, './public/build/react/'),
		filename: 'app.js'
	},
	devServer: {
		contentBase: "public/build/react/",
		proxy: {
			"/api/*": {
				target: "http://192.168.99.100/",
				secure: false
			}
		}
	},
	module : {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	},
	watch:true
};