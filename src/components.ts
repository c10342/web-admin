import SvgIcon from "@/components/svg-icon/index.vue";
import { App } from "vue";

const components: any = { SvgIcon };

const install = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

export default {
  install,
};
