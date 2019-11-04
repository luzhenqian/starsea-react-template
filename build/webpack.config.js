// @ts-nocheck
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const prodConfig = require("./webpack.prod.config");
const devConfig = require("./webpack.dev.config");

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : prodConfig;
  return merge(baseConfig, config);
};
