import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/login/index.vue";

// 公开路由
const publishRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: publishRoutes,
});

export default router;
