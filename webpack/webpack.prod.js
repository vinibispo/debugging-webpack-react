const path = require("path");
module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "..", "dist", "js"),
    publicPath: "/js/",
    filename: "bundle.js",
  },
};
