// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackModules = require('webpack-modules')
const isProduction = process.env.NODE_ENV === 'production'

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',

            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class',
            // Not necessary unless you consume a module requiring `react-dom-factories`
            'react-dom-factories': 'preact-compat/lib/react-dom-factories',

            'components': path.resolve(__dirname, './src/components')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new WebpackModules(),
        // Add your plugins here
        // Profile more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    optimization: {
        chunkIds: 'named',
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Profile more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
