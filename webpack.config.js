const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
    },
};