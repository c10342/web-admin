import { LANGUAGE, TAGSVIEW } from "@/constant";
import { getItem, setItem } from "@/utils/storage";
import { Module } from "vuex";
import { RootData, AppData, TagsViewItem } from "../types";

const AppModule: Module<AppData, RootData> = {
  namespaced: true,
  state: {
    sliderBarOpened: false,
    language: getItem(LANGUAGE) || "zh",
    tagsViewList: getItem(TAGSVIEW) || [],
  },
  mutations: {
    triggerSliderBarOpened(state) {
      state.sliderBarOpened = !state.sliderBarOpened;
    },
    setLanguage(state, lang) {
      state.language = lang;
      setItem(LANGUAGE, lang);
    },
    addTagsView(state, data: TagsViewItem) {
      const item = state.tagsViewList.find((item) => item.path === data.path);
      if (!item) {
        state.tagsViewList.push(data);
        setItem(TAGSVIEW, state.tagsViewList);
      }
    },
    changeTagsView(state, data: { index: number; tag: TagsViewItem }) {
      state.tagsViewList[data.index] = data.tag;
    },
  },
};

export default AppModule;
