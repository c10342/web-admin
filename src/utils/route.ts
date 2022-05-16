import { RouteRecordRaw } from "vue-router";

function resolve(p1: string, p2: string) {
  if (p1.endsWith("/") && p2.startsWith("/")) {
    const p = p2.substring(1);
    return `${p1}/${p}`;
  }
  if (p1.endsWith("/") && !p2.startsWith("/")) {
    return `${p1}${p2}`;
  }
  if (!p1.endsWith("/") && p2.startsWith("/")) {
    return `${p1}${p2}`;
  }
  return `${p1}/${p2}`;
}

// 获取所有路由子集
const getChildrenRoutes = (routes: RouteRecordRaw[]) => {
  const results: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      results.push(...route.children);
    }
  });

  return results;
};

// 处理脱离层级的路由
export const filterRoutes = (routes: RouteRecordRaw[]) => {
  // 获取所有路由子集
  const childrenRoutes = getChildrenRoutes(routes);
  //   查重操作
  return routes.filter((route) => {
    return !childrenRoutes.find((childRoute) => {
      return childRoute.path === route.path;
    });
  });
};

function isNull(data: any) {
  if (!data) {
    return true;
  }
  const v = JSON.stringify(data);
  if (v === "{}") {
    return true;
  }
  if (v === "[]") {
    return true;
  }
}

// 根据routes数据，返回对应menu规则数据
export const generateMenus = (routes: RouteRecordRaw[], basePath = "") => {
  const result: RouteRecordRaw[] = [];
  routes.forEach((item) => {
    //   不存在children，并且不存在meta
    if (isNull(item.children) && isNull(item.meta)) {
      return;
    }
    // 不存在meta，存在children
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children!));
      return;
    }
    // 不存在children。存在meta || 存在children并且存在meta
    const routePath = resolve(basePath, item.path);
    // 可能存在同名父路由
    let route = result.find((item) => item.path === routePath);
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: [],
      };
      if (route.meta?.icon && route.meta?.title) {
        result.push(route);
      }
    }

    //   存在children&&存在meta
    if (!isNull(item.children)) {
      route?.children?.push(...generateMenus(item.children!));
    }
  });
  return result;
};
