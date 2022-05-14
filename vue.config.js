const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const svgPath = path.resolve(__dirname, "src/assets/svg");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module.rule("svg").exclude.add(svgPath).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(svgPath)
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
});
