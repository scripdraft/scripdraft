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
    draft: "Draft",
    draftText: "Click commit to save a snapshot of the current text. Then you can use the back and forward buttons to browse among these commits. You may also use the keyboard shortcut Ctrl+P to commit.",
    back: "Back",
    commit: "Commit",
    forward: "Forward",
    reset: "Reset to last commit",
    clear: "Clear All",
    about: "About this widget",
    aboutText: "",


  },
  tr: {
    english: "İngilizce",
    turkish: "Türkçe",
    draftProject: "Taslak Projesi",
    team: "Ekip",
    technologies: "Teknolojiler",
    contribute: "Destek Ver",
    github: "GitHub",
    draft: "Draft",
    draftText: "İşle tuşuna tıklayarak veya Ctrl+P ile mevcut metni kaydedin. Geri veya İleri tuşlarıyla bir önceki kayıtlara ulaşabilirsiniz.",
    back: "Geri",
    commit: "İşle",
    forward: "İleri",
    reset: "Son işlemi resetle",
    clear: "Hepsini Sil",
    about: "Widget Hakkında",
    aboutText: "",


  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "tr", // set fallback locale
  messages // set locale messages
});

export default i18n;