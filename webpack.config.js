const commonConfig = require("./webpack/webpack.common");
const devConfig = require("./webpack/webpack.dev");
const prodConfig = require("./webpack/webpack.prod");
const { merge } = require("webpack-merge");

module.exports = () => {
  if (
    process.env.NODE_ENV === "staging" ||
    process.env.NODE_ENV === "production"
  ) {
    return merge(commonConfig, prodConfig);
  }
  return merge(commonConfig, devConfig);
};
