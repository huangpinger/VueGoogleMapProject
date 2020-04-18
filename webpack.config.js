const path = require('path');
const webpack = require('webpack');
//解析vue文件的loader，如果没有，解析vue文件会报错
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//必要条件，否则无法访问页面
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devServer: {
        open: false,
        contentBase: path.join(__dirname, 'dist'),
        port: 9001,
        hot:true,
        host: '127.0.0.1'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new htmlPlugin({
            template: path.join(__dirname, './index.html'), // 指定路径去生成模板页面
            filename: 'index.html',                //指定生成内存页面的名称
        }),
    ],
    module: {
        rules: [
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },
    resolve: {
        alias: {
            // 修改Vue倍导入时包的路径
            "vue$": "vue/dist/vue.js",
        },
        extensions: ['*', '.js', '.json', '.vue', '.scss'],   //配置可省略的后缀名， 空字符串必须使用*代替否则会打包失败
        modules: ['src', 'node_modules', 'common']
    },
    // externals: {
    //     'google': 'google'
    // },
}
