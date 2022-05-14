import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { userRouteName } from "./route-name";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    component: Layout,
    redirect: "/user/manage",
    name: userRouteName.user,
    children: [
      {
        path: "/user/permission",
        name: userRouteName.user,
        component: () => import("@/views/permission-list/index.vue"),
      },
      {
        path: "/user/role",
        name: userRouteName.role,
        component: () => import("@/views/role-list/index.vue"),
      },
      {
        path: "/user/manage",
        name: userRouteName.manage,
        component: () => import("@/views/user-manage/index.vue"),
      },
      {
        path: "/user/info/:id",
        name: userRouteName.info,
        component: () => import("@/views/user-info/index.vue"),
        props: true,
      },
      {
        path: "/user/import",
        name: userRouteName.import,
        component: () => import("@/views/import/index.vue"),
      },
    ],
  },
];

export default userRoutes;
