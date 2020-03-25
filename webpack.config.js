//Require modules
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer      = require('autoprefixer');



//init
//Objects
var extractThemeCSS  = new ExtractTextPlugin('design/theme/styles.theme.min.css');
var extractVendorCSS = new ExtractTextPlugin('design/vendor/styles.vendor.min.css');
// var extractVendorSTYL = new ExtractTextPlugin('design/vendor/styles.vendor.min.css');
//Variables
var entryPoints  = {};
var plugins      = [];
var devtoolValue = '';
var NODE_ENV     = process.env.NODE_ENV;


//Actions
//1
plugins.push(extractThemeCSS);
plugins.push(extractVendorCSS);

// console.log('plugins after pushed = ', plugins);
//2
switch(NODE_ENV) {
    case 'development':
        devtoolValue = 'source-map';
        break;
    case 'production':
        devtoolValue = 'nosources-source-map';
        break;
}
//3
entryPoints  = {
    './templates/home.bundle':     ['./components/pages/Home.jsx'],
    './templates/about.bundle':    ['./components/pages/About.jsx'],
    './templates/works.bundle':    ['./components/pages/Works.jsx'],
    './templates/contacts.bundle': ['./components/pages/Contacts.jsx'],

    './design/vendor/scripts.vendor.min': './design/vendor/hubScripts.js',
    './design/theme/scripts.theme.min': './design/theme/hubScripts.js',

    './design/stylesTheme':  './design/theme/hubStyles.js',
    './design/stylesVendor': './design/vendor/hubStyles.js',
};
//4
if (NODE_ENV === 'production') {
    var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    plugins.push(
        new UglifyJsPlugin({
            sourceMap: true
        })
    );
}
//5
if (NODE_ENV === 'development') {
    var liveReloadString = 'webpack-dev-server/client?http://localhost:9000';

    for (var prop in entryPoints) {
        typeof entryPoints[prop] ===  "object" ? entryPoints[prop].unshift(liveReloadString) : true;
    }
}



module.exports = {
    // mode: NODE_ENV,

    devtool: false,

    context: __dirname + '/draft',
    entry: entryPoints,
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env', 'react'] }
                    }
                ]
            },
            {
                test: /design\/theme\/?(?:[^\/]+\/?)*.styl$/,
                use: extractThemeCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ],
                    }
                )
            },
            {
                test: /design\/vendor\/?(?:[^\/]+\/?)*.styl$/,
                use: extractVendorCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'stylus-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ],
                    }
                )
            },
            {
                test: /design\/vendor\/?(?:[^\/]+\/?)*.css$/,
                use: extractVendorCSS.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 10', 'last 2 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            }
                        ],
                    }
                )
            }
        ]
    },
    plugins: plugins,

    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + '/build/',
        publicPath: '/',
        watchContentBase: true,
    }
};