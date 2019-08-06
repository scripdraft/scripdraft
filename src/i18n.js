import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    english: "English",
    turkish: "Turkish",
    draftProject: "Draft Project",
    team: "Team",
    technologies: "Technologies",
    contribute: "Contribute",
    github: "GitHub",
  },
  tr: {
    english: "İngilizce",
    turkish: "Türkçe",
    draftProject: "Taslak Projesi",
    team: "Ekip",
    technologies: "Teknolojiler",
    contribute: "Destek Ver",
    github: "GitHub",

  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "tr", // set fallback locale
  messages // set locale messages
});

export default i18n;