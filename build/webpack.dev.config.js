const path = require("path");

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name]_[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
  },
  // devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    host: "127.0.0.1",
    port: 3000,
    historyApiFallback: {
      index: "/index.html",
    },
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
};

module.exports = config;
