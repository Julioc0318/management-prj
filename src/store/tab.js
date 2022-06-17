export default {
  namespaced: true,
  state: {
    isCollapse: false,
    /* 存储 */
    tabsList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
    currentMenu: null,
  },
  mutations: {
    collapseChange(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      // 若非首页
      if (val.name != "home") {
        state.currentMenu = val;
        const res = state.tabsList.findIndex((item) => item.name == val.name);
        // 若非当前页面
        if (res === -1) {
          // 重置面包屑
          state.tabsList = [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "s-home",
            },
          ];
          if (val.path.indexOf("others") == -1) {
            // push 当前页面 val
            state.tabsList.push(val);
          } else {
            state.tabsList.push({
              name: "others",
              label: "其他",
            });
            state.tabsList.push(val);
          }
        }
      } else {
        state.tabsList = [
          {
            path: "/home",
            name: "home",
            label: "首页",
            icon: "s-home",
          },
        ];
      }
    },
  },
};
