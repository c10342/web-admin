import { getPrivateRoutes, publishRoutes } from "@/router";
import { RouteRecordRaw } from "vue-router";
import { Module } from "vuex";
import { RootData, PermissionData } from "../types";

const PermissionModule: Module<PermissionData, RootData> = {
  namespaced: true,
  state: { routes: publishRoutes },
  mutations: {
    setRoute(state, newRoutes: RouteRecordRaw[]) {
      state.routes = [...publishRoutes, ...newRoutes];
    },
  },
  actions: {
    filterRoutes(context, menus: string[]) {
      const privateRoutes = getPrivateRoutes();
      const routes: any[] = [];
      menus.forEach((key: string) => {
        const find = (parent: RouteRecordRaw, children?: RouteRecordRaw[]) => {
          if (!children) {
            return;
          }
          if (!children.length) {
            return;
          }
          const length = children.length;
          for (let i = 0; i < length; i++) {
            const route = { ...children[i], children: [] };
            const ch = children[i].children;
            if (ch && ch.length) {
              find(route, ch);
            } else if (route.name === key) {
              parent.children?.push(route);
            }
          }
        };

        for (let i = 0; i < privateRoutes.length; i++) {
          const ret = privateRoutes[i];
          let r = routes.find((item) => item.name === ret.name);
          const hasRoute = !!r;
          if (!r) {
            r = { ...ret, children: [] };
          }
          find(r, ret.children);

          if (!hasRoute && r.children.length !== 0) {
            routes.push(r);
          }
        }
      });

      routes.push({
        path: "/:catchAll(.*)",
        redirect: "/404",
      });

      context.commit("setRoute", routes);
      return routes;
    },
  },
};

export default PermissionModule;
