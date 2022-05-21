import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.scss";
import CustomComponent from "./components";
import "./svg";
import "./permission";
import i18n from "./locale/index";
import ElementPlus from "./element-plus";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(CustomComponent)
  .use(i18n)
  .mount("#app");
