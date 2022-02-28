const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "HOST",
      filename: "remoteEntry.js",
      exposes: {
        "./counterReducer": "./src/state/counter/index.js",
        "./counterActions": "./src/state/counter/actions.js",
      },
      remotes: {
        APP_TWO: "APP_TWO@http://localhost:4002/remoteEntry.js",
        APP_ONE: "APP_ONE@http://localhost:4001/remoteEntry.js",
      },
      shared: [
        {
          ...deps,
          react: { requiredVersion: deps.react, singleton: true },
          "react-dom": {
            requiredVersion: deps["react-dom"],
            singleton: true,
          },
          "react-redux": {
            requiredVersion: deps["react-redux"],
            singleton: true,
          },
          "@reduxjs/toolkit": {
            requiredVersion: deps["@reduxjs/toolkit"],
            singleton: true,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "src/components/"),
      state: path.resolve(__dirname, "src/state/"),
    },
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },
    hot: true,
    port: 4000,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      },
      {
        test: /.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true, sourceMap: true } },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /.css$/,
        exclude: /.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, sourceMap: true },
          },
        ],
      },
    ],
  },
};
