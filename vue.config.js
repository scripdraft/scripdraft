module.exports = {
    publicPath: "/draft-project",

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
