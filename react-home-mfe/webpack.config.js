const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "techtalking";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    entry: {
      "root-config": "./src/index.dev.ts",
      "techtalking-react-home-mfe": "./src/techtalking-root-config.ts",
    },
    output: {
      filename: "[name].js",
      path: __dirname + "/dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "./src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
