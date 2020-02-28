/*
 * @Author: Aaron
 * @Date: 2020-01-15 19:32:13
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 16:25:00
 * @Description: file content
 */
const path = require('path')
module.exports = {
    entry: './example/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolveLoader:{
        alias: {
            'vue-auto-name-loader': path.resolve(__dirname, './src/index.js')
        }
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: [
                        { loader: 'vue-auto-name-loader', options: { prefix: 'what' } }
                    ]
                }
            }
          },
        ]
    }
};