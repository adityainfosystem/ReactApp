﻿const path = require('path');
var BomPlugin = require('webpack-utf8-bom');
var ManifestPlugin = require('webpack-manifest-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//C:\Repositories\dev\node_modules\.bin\webpack --config webpack.config.js --watch
module.exports={
	entry:'./src/index.js',
	output:{filename:'bundle.js',path: path.resolve(__dirname,'dist')},
	devServer: {
     	contentBase: './dist'
    },
  
	devtool: 'inline-source-map',
	plugins: 
		[   
			new BomPlugin(true),
			new ManifestPlugin(),
			new htmlWebpackPlugin({
				template: 'index.htm'
			}),
			new CleanWebpackPlugin(['dist']),
			//new UglifyJSPlugin()
		],
	 stats: {
         colors: true
     },
	 module:{
		rules:[
			{
				test: /\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				use:['file-loader']
			},
			{
	         test: /\.(csv|tsv)$/,
	         use: [
	           'csv-loader'
	         ]
	       },
	       {
         test: /\.xml$/,
	         use: [
	           'xml-loader'
	         ]
	       },
	       {
	         test: /\.json$/,
	         use: [
	           'json-loader'
	         ]
	       },
			{
				 test: /\.js$/,
				 include: [
					path.resolve(__dirname, "src")
				  ],
				 loader: 'babel-loader?cacheDirectory',
				 query: {
					 presets: ['es2015','react']
				 }
			 }
		]
	}
}