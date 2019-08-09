module.exports = {
    publicPath: "/scrip-draft",

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
