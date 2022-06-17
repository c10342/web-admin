import { TOKEN } from "@/constant";
import router from "@/router";
import { getItem, removeItem, setItem } from "@/utils/storage";
import { Module } from "vuex";
import { RootData, UserData } from "../types";
import userInfoData from "@/mock/user-info";
const UserModule: Module<UserData, RootData> = {
  namespaced: true,
  state: { token: getItem(TOKEN) || "", userInfo: "" },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    clearToken(state) {
      state.token = "";
      removeItem(TOKEN);
    },
    clearUserInfo(state) {
      state.userInfo = "";
    },
  },
  actions: {
    login(context, { userName, password }: any) {
      this.commit("UserModule/setToken", userName);
      return Promise.resolve();
    },
    logout() {
      this.commit("UserModule/clearToken");
      this.commit("UserModule/clearUserInfo");
      this.commit("AppModule/removeAll");
      router.push("/login");
      window.location.reload();
    },
    getUserInfo(context) {
      this.commit(
        "UserModule/setUserInfo",
        (userInfoData as any)[context.state.token]
      );
      return Promise.resolve();
    },
  },
};

export default UserModule;
