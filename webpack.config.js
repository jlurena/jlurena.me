const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

function styleLoader(isModule) {
  return [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader:  'css-loader',
      options: {
        modules:   isModule,
        sourceMap: true
      }
    },
    {
      loader: 'resolve-url-loader'
    },
    {
      loader:  'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ];
}

module.exports = {
  mode:    process.env.NODE_ENV || 'development',
  context: __dirname,
  stats:   {
    preset:      'minimal',
    performance: true
  },
  entry:  path.resolve(__dirname, './src/index.jsx'),
  output: {
    path:     __dirname,
    filename: 'public/assets/[contenthash:8].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:      isDev ? '[name].css' : 'public/assets/[contenthash:8].css',
      chunkFilename: isDev ? '[id].css' : 'public/assets[id][contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'JLU'
    })
  ],
  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        use:     ['babel-loader']
      },
      {
        test:    /\.scss$/,
        exclude: /\.module.scss/,
        use:     styleLoader(false)
      },
      {
        test: /\.module.scss$/,
        use:  styleLoader(true)
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use:  [
          {
            loader:  'url-loader',
            options: {
              limit: 10000,
              name:  'public/assets/[contenthash:8].[ext]'
            },
          },
        ],
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
