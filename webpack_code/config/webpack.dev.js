// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    // 相对路径和绝对路径都行
    entry: "./src/main.js",
    // 输出
    output: {
        path: undefined,
        filename: "js/main.js",
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: [
                    "style-loader", //将js中css通过创建style标签添加到html文件中生效
                    "css-loader" //将css资源编译成commentjs的模块到js中
                ],
            }, {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            }, {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, //10kb
                    }
                },
                // 配置图片打包后的目录
                generator: {
                    filename: "static/images/[hash:10][ext][query]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
                // presets: ["@babel/preset-env"], //可以单独写成一个文件
            },
        ]
    },
    // 插件
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "9020", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式
    mode: "development", // 开发模式
    devtool: "cheap-module-source-map",
};