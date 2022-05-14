import {
  articleRouteName,
  publishRouteName,
  userRouteName,
} from "@/router/route-name";

export interface MenuItem {
  title: string;
  routeName: string;
  children?: MenuItem[];
}

const menuList: MenuItem[] = [
  { title: "个人中心", routeName: publishRouteName.profile },
  {
    title: "用户",
    routeName: userRouteName.user,
    children: [
      { title: "员工管理", routeName: userRouteName.manage },
      { title: "角色列表", routeName: userRouteName.role },
      { title: "权限列表", routeName: userRouteName.permission },
    ],
  },
  {
    title: "文章",
    routeName: articleRouteName.article,
    children: [
      { title: "文章排名", routeName: articleRouteName.ranking },
      { title: "创建文章", routeName: articleRouteName.create },
    ],
  },
];

export default menuList;
