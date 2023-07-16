const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const mode = isDev ? 'development' : 'production'

function styleLoader (isModule) {
  return [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: isModule && {
          localIdentName: isDev ? '[path][local]' : '[hash:base64:5]',
          exportLocalsConvention: 'camelCase'
        },
        sourceMap: true
      }
    },
    {
      loader: 'resolve-url-loader'
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}

const config = {
  mode,
  context: __dirname,
  target: 'web',
  stats: {
    preset: 'errors-warnings',
    performance: true,
    logging: 'warn'
  },
  performance: {
    hints: 'warning'
  },
  devServer: {
    hot: true,
    open: true,
    static: path.join(__dirname, 'public')
  },
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: __dirname,
    filename: isDev ? 'public/assets/[name].js' : 'public/assets/[contenthash:8].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'public/assets/[name]' : 'public/assets/[contenthash:8].css',
      chunkFilename: isDev ? 'public/assets/[name]' : 'public/assets/[id][contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'JLU',
      filename: 'public/index.html'
    }),
    !isDev && new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: 'public/assets/service-worker.js'
    }),
    isDev && new (require('@pmmmwh/react-refresh-webpack-plugin'))(),
    isDev && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins: [
            isDev && require.resolve('react-refresh/babel'),
            !isDev && 'transform-remove-console'
          ].filter(Boolean)
        }
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss/,
        use: styleLoader(false)
      },
      {
        test: /\.module.scss$/,
        use: styleLoader(true)
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'public/assets/[contenthash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ya?ml$/,
        loader: 'file-loader',
        options: {
          name: 'public/configs/[name]-[contenthash:8].[ext]'
        }
      },
      {
        test: /vendor\/.*.js$/,
        loader: 'file-loader',
        options: {
          name: 'public/vendor/[name]-[contenthash:8].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, 'src'),
      node_modules: path.resolve(__dirname, 'node_modules')
    }
  }
}

module.exports = config
