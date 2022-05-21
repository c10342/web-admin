import i18n from "@/locale";
import { RouteRecordRaw } from "vue-router";

export interface FueSearchItem {
  path: string;
  title: string[];
}
// 筛选出可供搜索的路由对象
export const generateRoutes = (routes: RouteRecordRaw[], prefixTitle = []) => {
  let res: FueSearchItem[] = [];
  for (const route of routes) {
    // 创建包含path和title的item
    const data: FueSearchItem = {
      //   path: resolve(basePath, route.path),
      path: route.path,
      title: [...prefixTitle],
    };
    //   当前存在meta，使用i18n国际化解析
    //   动态路由不允许被检索
    //   动态路由正则
    const reg = /.*\/:.*/;
    if (route.meta && route.meta.title && !reg.exec(route.path)) {
      const i18nTitle = i18n.global.t(`message.route.${route.meta.title}`);
      data.title = [...data.title, i18nTitle];
      res.push(data);
    }

    //   存在children
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.title as []);
      if (tempRoutes.length) {
        res = [...res, ...tempRoutes];
      }
    }
  }
  return res;
};
