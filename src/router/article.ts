import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { articleRouteName } from "./route-name";

const articleRoutes: Array<RouteRecordRaw> = [
  {
    path: "/article",
    component: Layout,
    redirect: "/article/ranking",
    name: articleRouteName.article,
    meta: { title: "article", icon: "article" },
    children: [
      {
        path: "/article/ranking",
        name: articleRouteName.ranking,
        component: () => import("@/views/article-ranking/index.vue"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id",
        name: articleRouteName.detail,
        component: () => import("@/views/article-detail/index.vue"),
      },
      {
        path: "/article/create",
        name: articleRouteName.create,
        component: () => import("@/views/article-create/index.vue"),
        meta: {
          title: "articleCreate",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id",
        name: articleRouteName.editor,
        component: () => import("@/views/article-create/index.vue"),
      },
    ],
  },
];

export default articleRoutes;
