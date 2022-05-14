import { createStore } from "vuex";
import UserModule from "./modules/user";
import { RootData } from "./types";

export default createStore<RootData>({
  state: {},
  getters: {
    token: (state) => state.UserModule.token,
  },
  mutations: {},
  actions: {},
  modules: { UserModule },
});
