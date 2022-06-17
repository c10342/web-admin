import router from "@/router";
import store from "@/store";

// 未登录的时候，可访问的路由
const whiteList = ["/login"];

let isAdd = false;

router.beforeEach(async (to, from, next) => {
  // 1、用户已登录不允许进入login
  // 2、用户未登录，只允许进入login
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      if (!isAdd) {
        const { permission } = store.getters.userInfo;
        const filterRoutes = await store.dispatch(
          "PermissionModule/filterRoutes",
          permission.menus
        );

        filterRoutes.forEach((item: any) => {
          router.addRoute(item);
        });
        isAdd = true;
        return next(to.path);
      }

      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
