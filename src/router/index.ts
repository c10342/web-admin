import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/login/index.vue";
import Layout from "@/layout/index.vue";

// 公开路由
const publishRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: publishRoutes,
});

export default router;
