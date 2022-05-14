import {
  articleRouteName,
  publishRouteName,
  userRouteName,
} from "@/router/route-name";

interface MenuItem {
  title: string;
  routeName?: string;
  children?: MenuItem[];
}

const menuList: MenuItem[] = [
  { title: "个人中心", routeName: publishRouteName.profile },
  {
    title: "用户",
    children: [
      { title: "员工管理", routeName: userRouteName.user },
      { title: "角色列表", routeName: userRouteName.role },
      { title: "权限列表", routeName: userRouteName.permission },
    ],
  },
  {
    title: "文章",
    children: [
      { title: "文章排名", routeName: articleRouteName.ranking },
      { title: "创建文章", routeName: articleRouteName.create },
    ],
  },
];

export default menuList;
