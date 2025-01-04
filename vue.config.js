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
        '@images': path.resolve(__dirname, 'src/assets/images')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        title: 'AlexBelostozky Photo',
        publicPath: process.env.NODE_ENV === 'production'
        ? '/AlexBelostozky-photo/'
        : '/',
      })
    ]
  },

  chainWebpack: (config) => {
    config.plugins.delete('html');
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
