const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
    devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    sentryWebpackPlugin({
      org: "sentry",
      // org: "embark",
      project: "javascript-react",

      // Auth tokens can be obtained by creating an internal integration
      // at https://<organization_id>.sentry.io/settings/developer-settings/
      // and need "Release: Admin" and "Organization: Read & Write" permissions
      // prod
      //authToken: "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",

      authToken: "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",

      // Enable automatically creating releases and associating commits
      release: {
        create: true,
        setCommits: {
          auto: true,
        },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: "asset",
        parser: {
          dataUrlCondition: {
            // maxSize: 10000,
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
