const path = require("path");
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "..", "dist", "js"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist/js",
    historyApiFallback: true,
    host: "0.0.0.0",
  },
};
