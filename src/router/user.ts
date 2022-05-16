import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { userRouteName } from "./route-name";

const userRoutes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    component: Layout,
    redirect: "/user/manage",
    name: userRouteName.user,
    meta: {
      title: "user",
      icon: "personnel",
    },
    children: [
      {
        path: "/user/permission",
        name: userRouteName.permission,
        component: () => import("@/views/permission-list/index.vue"),
        meta: {
          title: "permissionList",
          icon: "permission",
        },
      },
      {
        path: "/user/role",
        name: userRouteName.role,
        component: () => import("@/views/role-list/index.vue"),
        meta: {
          title: "roleList",
          icon: "role",
        },
      },
      {
        path: "/user/manage",
        name: userRouteName.manage,
        component: () => import("@/views/user-manage/index.vue"),
        meta: {
          title: "userManage",
          icon: "personnel-manage",
        },
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
