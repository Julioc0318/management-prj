<template>
  <div class="aside">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3 class="tit">{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
      <!-- ****** BEGIN: 无子菜单的数据渲染 ****** -->
      <el-menu-item
        v-for="item in noChildren"
        :index="item.index"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- ****** E N D: 无子菜单的数据渲染 ****** -->

      <!-- ****** BEGIN: 有子菜单的数据渲染 ****** -->
      <el-submenu
        v-for="item in withChildren"
        :key="item.path"
        :index="item.index"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <!-- ***** BEGIN: 二级菜单目录 -->
        <el-menu-item
          v-for="itemChildren in item.children"
          :key="itemChildren.path"
          :index="itemChildren.index"
          @click="clickMenu(itemChildren)"
          >{{ itemChildren.label }}</el-menu-item
        >
        <!-- ***** E N D: 二级菜单目录 -->
      </el-submenu>
      <!-- ****** E N D: 有子菜单的数据渲染 ****** -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          index: "1",
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          index: "2",
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "goods",
          url: "MallManage/MallManage",
        },
        {
          index: "3",
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          index: "4",
          name: "other",
          label: "其他",
          icon: "location",
          children: [
            {
              index: "4-1",
              path: "/others_page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              index: "4-2",
              path: "/others_page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    clickMenu(item) {
      this.$router.push({ path: item.path }).catch((err) => err);
      this.$store.commit("tab/selectMenu", item);
    },
  },
  computed: {
    activeIndex() {
      let active_index = "";
      /* 针对于无子菜单 */
      this.noChildren.forEach((item) => {
        if (item.path == this.$route.path) {
          active_index = item.index;
        }
      });
      /* 针对于有子菜单 */
      this.withChildren.forEach((item) => {
        item.children.forEach((childrenItem) => {
          if (childrenItem.path == this.$route.path) {
            active_index = childrenItem.index;
          }
        });
      });
      return active_index;
    },
    noChildren() {
      let arr = [];
      this.menu.forEach((item) => {
        if (item.hasOwnProperty("children") == false) {
          arr.push(item);
        }
      });
      return arr;
    },
    withChildren() {
      let arr = [];
      this.menu.forEach((item) => {
        if (item.hasOwnProperty("children")) {
          arr.push(item);
        }
      });
      return arr;
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style scoped>
h3.tit {
  font-size: 18px;
  text-align: center;
  color: #fff;
  line-height: 48px;
  font-weight: normal;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: none;
}
</style>