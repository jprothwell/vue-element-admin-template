module.exports = {
    devServer: {
        port: 10080,
        disableHostCheck: true, // solve Invilid host header problem
        hotOnly: true, // 热更新
    }
}