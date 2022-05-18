import SvgIcon from "@/components/svg-icon/index.vue";
import Hamburger from "@/components/hamburger/index.vue";
import Breadcrumb from "@/components/breadcrumb/index.vue";
import { App } from "vue";

const components: any = { SvgIcon, Hamburger, Breadcrumb };

const install = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

export default {
  install,
};
