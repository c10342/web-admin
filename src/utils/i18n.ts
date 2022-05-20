import i18n from "@/locale";

export const getI18nText = (path: string) => {
  return (data: string) => {
    return i18n.global.t(`message.${path}.${data}`);
  };
};
