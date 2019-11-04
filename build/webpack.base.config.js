// @ts-nocheck
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@images": path.resolve(__dirname, "../src/assets/images"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        enforce: "pre",
        use: ["ts-loader", "tslint-loader"],
      },
      {
        test: /\.css/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "img/[hash:7].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "media/[hash:7].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "font/[hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.htm",
      title: "starsea模板",
    }),
    new StyleLintPlugin({
      files: ["src/*.css", "src/**/*.css", "src/**/**/*.css"],
    }),
  ],
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
