module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://192.168.0.108:8022/',
                target: 'http://ff.suiyongrongxin.com/',
                // secure: true,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                ws: true,
                pathRewrite: {
                    '^/api': ''// 将目标的服务器地址 替换为如下的地址
                }
            }
        }
    }
}