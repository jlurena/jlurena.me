const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const mode = isDev ? 'development' : 'production';

function styleLoader(isModule) {
  return [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader:  'css-loader',
      options: {
        modules: isModule && {
          localIdentName:         isDev ? '[path][local]' : '[hash:base64:5]',
          exportLocalsConvention: 'camelCase',
        },
        sourceMap: true,
      },
    },
    {
      loader: 'resolve-url-loader',
    },
    {
      loader:  'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ];
}

const config = {
  mode,
  context: __dirname,
  target:  'web',
  stats:   {
    preset:      'minimal',
    performance: true,
  },
  devServer: {
    hot:         true,
    open:        true,
    contentBase: path.join(__dirname, 'public'),
  },
  entry:  path.resolve(__dirname, './src/index.jsx'),
  output: {
    path:     path.resolve(__dirname, 'public'),
    filename: isDev ? 'assets/[name].js' : 'assets/[contenthash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:      isDev ? 'assets/[name]' : 'assets/[contenthash:8].css',
      chunkFilename: isDev ? 'assets/[name]' : 'assets/[id][contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      title:    'JLU',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins:        ['react-hot-loader/babel'],
        },
      },
      {
        test:    /\.scss$/,
        exclude: /\.module.scss/,
        use:     styleLoader(false),
      },
      {
        test: /\.module.scss$/,
        use:  styleLoader(true),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:  [
          {
            loader:  'url-loader',
            options: {
              limit: 10000,
              name:  'assets/[contenthash:8].[ext]',
            },
          },
        ],
      },
      {
        test:    /vendor\/.*.js$/,
        loader:  'file-loader',
        options: {
          name: 'vendor/[name]-[contenthash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:      {
      app:          path.resolve(__dirname, 'src'),
      node_modules: path.resolve(__dirname, 'node_modules'),
    },
  },
};

if (isDev) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
