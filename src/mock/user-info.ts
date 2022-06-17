export default {
  "super-admin": {
    role: [
      {
        id: "1",
        title: "超级管理员",
      },
    ],
    permission: {
      menus: [
        "userManage",
        "articleRanking",
        "articleDetail",
        "articleCreate",
        "articleEditor",
        "userPermission",
        "userRole",
        "userManage",
        "userInfo",
        "userImport",
      ],
      points: [
        "distributeRole",
        "importUser",
        "removeUser",
        "distributePermission",
      ],
    },
  },
  admin: {
    role: [
      {
        id: "2",
        title: "管理员",
      },
    ],
    permission: {
      menus: ["userManage", "userRole", "articleRanking", "articleCreate"],
      points: ["importUser"],
    },
  },
  test: {
    role: [
      {
        id: "4",
        title: "销售经理",
      },
    ],
    permission: {
      menus: ["userManage", "userRole", "userPermission"],
      points: ["distributeRole", "importUser", "distributePermission"],
    },
  },
};
