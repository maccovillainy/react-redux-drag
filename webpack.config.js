module.exports = {

  watch: true,

  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query:{
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ["transform-decorators-legacy"]
        }
      }
    ]
  }
};