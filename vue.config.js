// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/stock-items/'
        : '/',
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                //подключение глобально файла с миксинами и переменными
                additionalData: `@import "@/styles/main.scss";`
            }
        }
    }
}