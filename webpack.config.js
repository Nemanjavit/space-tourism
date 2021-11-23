const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");

// const extractPLugin=new MiniCssExtractPlugin({
//     filename:'main',
// })

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        type: "asset",
        test: /\.(svg|jpg|png)$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
