import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    english: "English",
    turkish: "Turkish",
    draftProject: "ScripDraft",
    team: "Team",
    technologies: "Technologies",
    contribute: "Contribute",
    github: "GitHub",
    draft: "ScripDraft",
    draftText: "Click commit to save a snapshot of the current text. Then you can use the back and forward buttons to browse among these commits. You may also use the keyboard shortcut Ctrl+Enter to commit.",
    back: "Back",
    commit: "Commit",
    forward: "Forward",
    reset: "Reset to last commit",
    clear: "Clear All",
    about: "About this widget",
    aboutText: "I like to think of this little widget as a place where you can draft emails if you are obsessively worried about getting the tone just right—an email to your boss perhaps. Committing your changes and then being able to browse back and forward to review them is sort of a more robust implementation of undo/redo than a basic text editor—but not quite as robust as, say, Git. This is a React app that uses Redux for managing state. I wrote it while actively trying to think of some kind of widget where the notion of a stream of immutable states seemed relevant to what the app does. That \"stream of immutable states\" thing is central to the way React and Redux work. In a sense, this thing actually lets you take a snapshot of these states (by clicking the commit button) even as you move forward with new changes. Thus the stream of states. And the user can actively pick some special ones to keep in memory. On first glance, it may look like the state here is just the content of the textarea. That is the state of the front-facing editor component (more or less), but the app's state contains all the commit history. Thus, the state contains all the previous commits plus a pointer to what commit is currently being displayed, and some other things that turned out necessary to make the widget function in the least surprising way. This was my first encounter with writing Redux actions and reducer functions and wiring those things up to a component's state and its rendering. It also uses the localStorage API to autosave the entire app's state (including all commit history) as the user works. I need to clean up the source a bit more before I recommend anybody read it. I'll update this page with a link to the source when that is ready.",
    login: {
      login: "Login",
      username: "Username",
      password: "Password",
      dontHaveAccount: "Dont Have an Account?",
      createAccount: "Create an Account",
      forgotPassword: "Forgot Password?",
      submit: "Submit",
      google: "Login with Google",
      or: "or",
    },
    signup: {
      warning: {
        fullname: "Your fullname should be at least 3 characters."
      },
      signup: "Sign Up",
      fullname: "Your Full Name",
      username: "Choose an Username",
      email: "Enter your e-mail",
      iveRead: "I have read and agree to the ",
      privacyPolicy: "Privacy Policy",
      passwordFirst: "Choose a password",
      passwordSecond: "Retype your password",
    }
  },
  tr: {
    english: "İngilizce",
    turkish: "Türkçe",
    draftProject: "ScripDraft",
    team: "Ekip",
    technologies: "Teknolojiler",
    contribute: "Destek Ver",
    github: "GitHub",
    draft: "ScripDraft",
    draftText: "İşle tuşuna tıklayarak veya Ctrl+Enter ile mevcut metni kaydedin. Geri veya İleri tuşlarıyla bir önceki kayıtlara ulaşabilirsiniz.",
    back: "Geri",
    commit: "İşle",
    forward: "İleri",
    reset: "Son işlemi resetle",
    clear: "Hepsini Sil",
    about: "Widget Hakkında",
    aboutText: "I like to think of this little widget as a place where you can draft emails if you are obsessively worried about getting the tone just right—an email to your boss perhaps. Committing your changes and then being able to browse back and forward to review them is sort of a more robust implementation of undo/redo than a basic text editor—but not quite as robust as, say, Git. This is a React app that uses Redux for managing state. I wrote it while actively trying to think of some kind of widget where the notion of a stream of immutable states seemed relevant to what the app does. That \"stream of immutable states\" thing is central to the way React and Redux work. In a sense, this thing actually lets you take a snapshot of these states (by clicking the commit button) even as you move forward with new changes. Thus the stream of states. And the user can actively pick some special ones to keep in memory. On first glance, it may look like the state here is just the content of the textarea. That is the state of the front-facing editor component (more or less), but the app's state contains all the commit history. Thus, the state contains all the previous commits plus a pointer to what commit is currently being displayed, and some other things that turned out necessary to make the widget function in the least surprising way. This was my first encounter with writing Redux actions and reducer functions and wiring those things up to a component's state and its rendering. It also uses the localStorage API to autosave the entire app's state (including all commit history) as the user works. I need to clean up the source a bit more before I recommend anybody read it. I'll update this page with a link to the source when that is ready.",
    login: {
      login: "Giriş",
      username: "Kullanıcı Adı",
      password: "Parola",
      dontHaveAccount: "Hesabın yok mu?",
      createAccount: "Yeni Hesap Aç",
      forgotPassword: "Şifremi Unuttum",
      submit: "Gönder",
      google: "Google ile giriş yap",
      or: "veya"
    },
    
  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages // set locale messages
});

export default i18n;