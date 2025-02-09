const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const inicssExtractPlugin = require('mini-css-extract-plugin');

const { Template } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        open: true,
        hot: true,
    },
    entry: ['@babel/polyfill',path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [  
        new HtmlWebpackPlugin({filename: 'index.html', template: path.resolve(__dirname, 'src', 'index.html')}),
        new HtmlWebpackPlugin({filename: 'hut.html',template: path.resolve(__dirname, 'src', 'hut.html')}),
        new HtmlWebpackPlugin({filename: 'area.html',template: path.resolve(__dirname, 'src', 'area.html')}),
        new HtmlWebpackPlugin({filename: 'booking.html',template: path.resolve(__dirname, 'src', 'booking.html')}),
        new HtmlWebpackPlugin({filename: 'about.html',template: path.resolve(__dirname, 'src', 'about.html')}),
        new HtmlWebpackPlugin({filename: 'faq.html',template: path.resolve(__dirname, 'src', 'faq.html')}),
        
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')],
                        }
                    }
                },
                "sass-loader",
            ],
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].ext'
                }
            },
            {
                test: /\.(jpg?g|png|webp|gif|svg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                              quality: 75
                            }
                          },
                    }
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            }
        ]
    }
}