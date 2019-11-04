// @ts-nocheck
const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new StyleLintPlugin({
      files: ["src/*.{css}","src/**/*.{css}", "src/**/**/*.{css}"],
    }),
  ],
};
