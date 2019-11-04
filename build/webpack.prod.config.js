const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  // optimization: {
  //   splitChunks: {
  //     minSize: 0,
  //     cacheGroups: {
  //       commons: {
  //         name: "commons",
  //         chunks: "all",
  //         minChunks: 2,
  //       },
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
  plugins: [new CleanWebpackPlugin()],
};
