import {createI18n} from "vue-i18n";
import translations from "@/translations/general";

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: ['en', 'ru'],
  messages: translations,
})

export default i18n;
