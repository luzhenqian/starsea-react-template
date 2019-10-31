// @ts-nocheck
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const prodConfig = require("./webpack.prod.config");
const devConfig = require("./webpack.dev.config");

let config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;
module.exports = merge(baseConfig, config);
