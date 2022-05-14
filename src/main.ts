import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/styles/index.scss";
import CustomComponent from "./components";
import "./svg";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(CustomComponent)
  .mount("#app");
