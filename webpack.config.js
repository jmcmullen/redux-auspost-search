var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
