import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/login/index.vue";
import Layout from "@/layout/index.vue";
import { publishRouteName } from "./route-name";
import articleRoutes from "./article";
import userRoutes from "./user";

// 公开路由
const publishRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: publishRouteName.login,
    component: Login,
  },
  {
    path: "/",
    name: publishRouteName.layout,
    component: Layout,
    redirect: "/profile",
    children: [
      {
        path: "/profile",
        name: publishRouteName.profile,
        component: () => import("@/views/profile/index.vue"),
        meta: { title: "profile", icon: "personnel" },
      },
      {
        path: "/404",
        name: publishRouteName[404],
        component: () => import("@/views/error-page/404.vue"),
      },
      {
        path: "/401",
        name: publishRouteName[401],
        component: () => import("@/views/error-page/401.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publishRoutes, ...articleRoutes, ...userRoutes],
});

export default router;
