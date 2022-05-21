import i18n from "@/locale";
import store from "@/store";
import { watch } from "vue";

export const getI18nText = (path: string) => {
  return (data: string) => {
    return i18n.global.t(`message.${path}.${data}`);
  };
};

export const watchLanguageSwitch = (
  ...cbs: Array<(language: string) => any>
) => {
  watch(
    () => store.getters.language,
    (language: string) => {
      cbs.forEach((cb) => cb(language));
    }
  );
};
