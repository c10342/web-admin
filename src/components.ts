import SvgIcon from "@/components/svg-icon/index.vue";
import Hamburger from "@/components/hamburger/index.vue";
import Breadcrumb from "@/components/breadcrumb/index.vue";
import LangSelect from "@/components/lang-select/index.vue";
import Screenfull from "@/components/screenfull/index.vue";
import HeaderSearch from "@/components/header-search/index.vue";
import TagsView from "@/components/tags-view/index.vue";
import { App } from "vue";

const components: any = {
  SvgIcon,
  Hamburger,
  Breadcrumb,
  LangSelect,
  Screenfull,
  HeaderSearch,
  TagsView,
};

const install = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

export default {
  install,
};
