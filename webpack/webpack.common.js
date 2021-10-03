const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { EnvironmentPlugin } = require("webpack");

module.exports = {
  entry: path.join(__dirname, "..", "src", "main.jsx"),
  output: {
    path: path.resolve(__dirname, "..", "dist", "js"),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "index.template.ejs"),
      title: "Sopha",
      hash: true,
    }),
    new EnvironmentPlugin(["NODE_ENV", "SERVER_ENV"]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,

        type: "asset/resource",
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,

        type: "asset/resource",
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,

        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".css",
      ".jpg",
      ".png",
      ".ttf",
      ".svg",
      ".woff",
      ".eot",
    ],
  },
};
