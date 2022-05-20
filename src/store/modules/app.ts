import { LANGUAGE } from "@/constant";
import { getItem, setItem } from "@/utils/storage";
import { Module } from "vuex";
import { RootData, AppData } from "../types";
const AppModule: Module<AppData, RootData> = {
  namespaced: true,
  state: { sliderBarOpened: false, language: getItem(LANGUAGE) || "zh" },
  mutations: {
    triggerSliderBarOpened(state) {
      state.sliderBarOpened = !state.sliderBarOpened;
    },
    setLanguage(state, lang) {
      state.language = lang;
      setItem(LANGUAGE, lang);
    },
  },
};

export default AppModule;
