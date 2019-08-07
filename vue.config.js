module.exports = {
    publicPath: "/kaan-portfolio",

    css: {
        modules: true,
        extract: false
    },

    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "tr",
            localeDir: "locales",
            enableInSFC: true
        }
    }
};
