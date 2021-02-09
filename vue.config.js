const path = require('path')
module.exports = {
    devServer: {
        //host: '0.0.0.0', // 默认host可以不写
        port: '8888',      // 更改端口，方便访问就改为80
        proxy: {
            '/admin': {
                target: 'http://localhost:9999', // 需要代理时，配置端口，也就是调用接口的配置（前后端分离，前端调用后端的接口）
            }
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .test(/\.svg$/)
            .include.add(path.resolve(__dirname, './src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule
            .test(/\.svg$/)
            .exclude.add(path.resolve(__dirname, './src/icons'))
            .end()
            .use('file-loader')
            .loader('file-loader')
    }
}
