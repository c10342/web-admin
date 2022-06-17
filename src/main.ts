import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/styles/index.scss";
import CustomComponent from "./components";
import "./svg";
import "./permission";
import i18n from "./locale/index";
import ElementPlus from "./element-plus";

async function render() {
  if (store.getters.token) {
    await store.dispatch("UserModule/getUserInfo");
  }
  createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(CustomComponent)
    .use(i18n)
    .mount("#app");
}

render();
