import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

const DEFAULT_LANG = 'zh';
const LOCALE_KEY = 'localeLanguage';

const locales = {
  zh: require('./locales/zh.json'),
  en: require('./locales/en.json')
};

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: LocaleMessages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages: loadLocaleMessages()
});

export const setup = (lang: any) => {
  if (lang === undefined) {
    const lg = window.localStorage.getItem(LOCALE_KEY);
    lang = lg ? lg : 'zh';
    // if (locales[lang] === undefined) {
    //   lang = DEFAULT_LANG;
    // }
  }
  window.localStorage.setItem(LOCALE_KEY, lang);

  Object.keys(locales).forEach(lang => {
    document.body.classList.remove(`lang-${lang}`);
  });
  document.body.classList.add(`lang-${lang}`);
  document.body.setAttribute('lang', lang);

  // Vue.config.lang = lang;
  i18n.locale = lang;
};

let lang = 'zh';

// location.search.replace(/lang=([a-z-]+)&?/i, function(a: string, b: string) {
//   a = b;
// });

setup(lang);

export default i18n;
