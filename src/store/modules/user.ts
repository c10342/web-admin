import { login } from "@/api/sys";
import { TOKEN } from "@/constant";
import { getItem, setItem } from "@/utils/storage";
import { Module } from "vuex";
import { RootData, UserData } from "../types";
const token = "04259857-f77f-496b-9eba-2181c73e953f";
const UserModule: Module<UserData, RootData> = {
  namespaced: true,
  state: { token: getItem(TOKEN) || "" },
  mutations: {
    setToken(userData, token: string) {
      userData.token = token;
      setItem(TOKEN, token);
    },
  },
  actions: {
    login(context, { userName, password }: any) {
      return login({ userName, password })
        .then(() => {
          this.commit("UserModule/setToken", token);
          return Promise.resolve();
        })
        .catch(() => {
          this.commit("UserModule/setToken", token);
          return Promise.resolve();
        });
    },
  },
};

export default UserModule;
