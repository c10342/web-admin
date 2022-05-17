import { Module } from "vuex";
import { RootData, AppData } from "../types";
const AppModule: Module<AppData, RootData> = {
  namespaced: true,
  state: { sliderBarOpened: false },
  mutations: {
    triggerSliderBarOpened(state) {
      state.sliderBarOpened = !state.sliderBarOpened;
    },
  },
};

export default AppModule;
