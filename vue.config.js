const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === 'production'
		? '/AlexBelostozky-photo/'
		: '/',

	transpileDependencies: true,

	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@styles': path.resolve(__dirname, 'src/assets/styles'),
				'@images': path.resolve(__dirname, 'src/assets/images'),
			},
		},
		plugins: [
			// Плагин для главной страницы
			new HtmlWebpackPlugin({
				template: './public/index.html',
				filename: 'index.html',
				title: 'AlexBelostozky Photo',
				publicPath: process.env.NODE_ENV === 'production'
					? '/AlexBelostozky-photo/'
					: '/',
			}),
			// Плагин для 404.html
			new HtmlWebpackPlugin({
				template: './src/templates/404.html',
				filename: '404.html',
				inject: false,
				publicPath: process.env.NODE_ENV === 'production'
					? '/AlexBelostozky-photo/'
					: '/',
			}),
		]
	},

	chainWebpack: (config) => {
		config.plugins.delete('html');
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
	},

	css: {
		loaderOptions: {
			scss: {
				sassOptions: {
					indentedSyntax: true,
					logger: console
				},
				additionalData: '@import "@styles/variables.sass"',
			}
		},
		sourceMap: true
	}
})
