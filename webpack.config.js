
/* Configure HTMLWebpack plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

/* Configure BrowserSync */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BrowserSyncPluginConfig = new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/'
}, config = {
    reload: false
});

/* Configure ProgressBar */
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ProgressBarPluginConfig = new ProgressBarPlugin();

/* Configure UgilfyJS */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const UglifyJsPluginConfig = new UglifyJSPlugin({
    sourceMap: true
});

/* Export configuration */
module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.ts'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: { extensions: [".web.ts", ".web.js", ".ts", ".js"] },
    plugins: [
        HTMLWebpackPluginConfig,
        BrowserSyncPluginConfig,
        ProgressBarPluginConfig,
        UglifyJsPluginConfig,
    ]
};
