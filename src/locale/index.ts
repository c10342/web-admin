import { createI18n } from "vue-i18n";
import zhLang from "./lang/zh";
import enLang from "./lang/en";
import { getItem } from "@/utils/storage";
import { LANGUAGE } from "@/constant";

const lang = {
  zh: zhLang,
  en: enLang,
};

const i18n = createI18n({
  locale: getItem(LANGUAGE) || "zh",
  fallbackLocale: "en",
  messages: lang,
});

export default i18n;
