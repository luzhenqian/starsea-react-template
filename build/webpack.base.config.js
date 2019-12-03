const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name]_[chunkhash:8].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@images": path.resolve(__dirname, "../src/assets/images"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@api": path.resolve(__dirname, "../src/api"),
      "@actions": path.resolve(__dirname, "../src/redux/actions"),
      "@reducers": path.resolve(__dirname, "../src/redux/reducers"),
    },
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["tslint-loader"],
      },
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        loader: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory()],
              }),
              compilerOptions: {
                module: "es2015",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8092,
              name: "img/[name]_[hash:8].[ext]",
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
              name: "media/[name]_[hash:8].[ext]",
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
              name: "font/[name]_[hash:8].[ext]",
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
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
      // chunks: ["vendors"],
    }),
    new StyleLintPlugin({
      files: ["src/*.css", "src/**/*.css"],
    }),
  ],
};

module.exports = config;
