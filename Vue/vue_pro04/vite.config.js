// 配置代理服务器，实现跨域访问
module.exports = {
    peoxy: {
        '/api': {
            target: 'https://pvp.qq.com/',
            changeOrigin: true, //是否允许跨域
            rewrite: path => path.replace(/^\api/, ' ') //替换成空字符串
        }
    }
}