const steps = (getText: (key: string) => string) => {
  return [
    {
      element: "#guide", // 需要被高亮的查询选择器字符或Node
      popover: {
        title: getText("guideTitle"), // 弹窗的标题
        description: getText("guideDesc"), // 弹窗的主体内容
        position: "bottom-right",
      },
    },
    {
      element: "#hamburger",
      popover: {
        title: getText("hamburgerTitle"),
        description: getText("hamburgerDesc"),
        position: "bottom-left",
      },
    },
    {
      element: "#breadcrumb",
      popover: {
        title: getText("breadcrumbTitle"),
        description: getText("breadcrumbDesc"),
        position: "bottom-left",
      },
    },
    {
      element: "#search",
      popover: {
        title: getText("searchTitle"),
        description: getText("searchDesc"),
        position: "bottom-right",
      },
    },
    {
      element: "#screenfull",
      popover: {
        title: getText("fullTitle"),
        description: getText("fullDesc"),
        position: "bottom-right",
      },
    },
    {
      element: "#lang-select",
      popover: {
        title: getText("langTitle"),
        description: getText("langDesc"),
        position: "bottom-right",
      },
    },
    {
      element: "#tags-view",
      popover: {
        title: getText("tagTitle"),
        description: getText("tagDesc"),
        position: "bottom-left",
      },
    },
    {
      element: "#slider-bar",
      popover: {
        title: getText("sidebarTitle"),
        description: getText("sidebarDesc"),
        position: "right-center",
      },
    },
  ];
};

export default steps;
