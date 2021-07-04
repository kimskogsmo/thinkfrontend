const path = require("path");
/**
 * webpack & plugins
 */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
/**
 * postcss plugins
 */
const postcssAutoPrefixer = require("autoprefixer");
const postcssCustomProperties = require("postcss-custom-properties");

/**
 * set development mode
 */
const isDev = process.env.NODE_ENV !== "prod";

/**
 * webpack config
 */
module.exports = {
  // entry files
  mode: 'production',
  entry: {
      'app': './app.js'
  },
    output: {
      publicPath: '/out',
      path: path.resolve(__dirname, "./out")
  },
  devtool: isDev && "source-map",
  devServer: {
    port: 9000,
      open: true,
      contentBase: path.join(__dirname, '/'),
  },
  module: {
    rules: [
      // js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // the following plugins will need @babel/runtime installed as a dependency
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-transform-regenerator'
            ]
          }
        }
      },
      // css
      {
        test: /\.css$/,
        use: [
          // default to standard style loader
          !isDev ? MiniCssExtractPlugin.loader : "style-loader",
          // standard css loader
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
              minimize: !isDev,
              importLoaders: 1
            }
          },
          // postcss loader (autoprefix + embed custom properties)
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              autoprefixer: {
                browsers: ["last 2 versions"]
              },
              sourceMap: isDev,
              plugins: [
                postcssAutoPrefixer,
                postcssCustomProperties({
                  importFrom: "./out/style.css",
                  preserve: false
                })
              ]
            }
          }
        ]
      },
      // images & files
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/",
              useRelativePath: true
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // for older webpack extensions interop
    new webpack.LoaderOptionsPlugin({}),
    // html setup (minify for prod)
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: !isDev && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: false
      }
    }),
    // extract css
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // minify & inline css
    new StyleExtHtmlWebpackPlugin({
      enabled: !isDev,
      minify: {
        level: {
          1: {
            all: true
          },
          2: {
            all: true
          }
        }
      }
    }),
    // inline js
    new ScriptExtHtmlWebpackPlugin({
      inline: ["app.js"]
    }),
    // copy assets to dist
    // new CopyWebpackPlugin([{ from: "./source/assets", to: "./" }])
  ]
};