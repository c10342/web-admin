import SvgIcon from "@/components/svg-icon/index.vue";
import Hamburger from "@/components/hamburger/index.vue";
import { App } from "vue";

const components: any = { SvgIcon, Hamburger };

const install = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

export default {
  install,
};
