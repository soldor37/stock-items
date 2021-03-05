// vue.config.js
module.exports = {
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