'use strict'
const path              = require('path'),
  config                = require('./config')(),
  webpack               = require('webpack'),
  merge                 = require('webpack-merge'),
  FriendlyErrorsPlugin  = require('friendly-errors-webpack-plugin'),
  HtmlWebpackPlugin     = require('html-webpack-plugin'),
  DashboardPlugin       = require('webpack-dashboard/plugin'),
  ExtractTextPlugin     = require('extract-text-webpack-plugin');

function configuraWebpack() {
  let configuracao = {
    entry: [path.join(__dirname, './app/src/main.js')/* , 'webpack-hot-middleware/client?overlay=false' */],
    output: {
      path: config.rootDir,
      filename: 'js/[name].js',
      publicPath: config.publicDir
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, './app/src')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              js: 'babel-loader',
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              })
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'src'),
          exclude: path.join(__dirname, 'node_modules'),
          options: {
            plugins: ['transform-runtime'],
            presets: ['es2015']
          }
        },
        {
          test: /\.css$/,
          loader: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=src/semantic-ui/themes/default/assets/fonts/[name].[ext]'
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }

  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'pro') {
    return merge(configuracao, {
      devtool: '#source-map',
      plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(__dirname, './app/static/view/index.html'),
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
        }),
        new webpack.DefinePlugin({
          'process.env': config.env
        })
      ]
    });
  } else {
    return merge(configuracao, {
      devtool: 'eval-source-map',
      plugins: [
        new webpack.DefinePlugin({
          'process.env': config.env
        }),
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new FriendlyErrorsPlugin(),
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(__dirname, './app/static/view/index.html'),
          inject: true
        })
      ]
    });
  }
}

module.exports = configuraWebpack();
