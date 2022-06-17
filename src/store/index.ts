import { createStore } from "vuex";
import UserModule from "./modules/user";
import AppModule from "./modules/app";
import PermissionModule from "./modules/permission";
import { RootData } from "./types";

export default createStore<RootData>({
  state: {},
  getters: {
    token: (state) => state.UserModule.token,
    sliderBarOpened: (state) => state.AppModule.sliderBarOpened,
    language: (state) => state.AppModule.language,
    tagsViewList: (state) => state.AppModule.tagsViewList,
    userInfo: (state) => state.UserModule.userInfo,
  },
  mutations: {},
  actions: {},
  modules: { UserModule, AppModule, PermissionModule },
});
