const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
  },
});
