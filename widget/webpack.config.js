const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = [
  {
    entry: {
        app: './src/index.js',
        },
        output: {
            filename: 'widget.bundle.js',
            path: path.resolve(__dirname, '../public'),
            },
            
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
   
  },
  plugins: [htmlWebpackPlugin]
},
{
  entry: {
      app: './src/index.js',
      },
      output: {
          filename: 'main.js',
          path: path.resolve(__dirname, './dist'),
          },
          
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ],
 
},
plugins: [htmlWebpackPlugin]
},


];