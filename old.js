const path = require('path');

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: "development",
    entry: {
        myfile: './src/engine.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].build.js',
        publicPath: '/assets/',
        // libraryTarget: 'umd', // 'var', 'amd', 'commonjs', 'umd' - umd for everything
        // library: 'myfirstlibrary'
    },
    devserver: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true,
    }
}