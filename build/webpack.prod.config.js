const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/,
        loader: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ts|tsx)/,
        loader: "ts-loader",
        options: {
          libraryName: "antd",
          libraryDirectory: "lib",
          style: true,
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory(/** options */)],
          }),
          compilerOptions: {
            module: "es2015",
          },
        },
      },
    ],
  },
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
    }),
  ],
};
