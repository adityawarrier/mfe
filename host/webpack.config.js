const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "src/components/"),
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
