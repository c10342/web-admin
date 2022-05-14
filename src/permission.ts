import router from "@/router";
import store from "@/store";

// 未登录的时候，可访问的路由
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  // 1、用户已登录不允许进入login
  // 2、用户未登录，只允许进入login
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/");
    } else {
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
