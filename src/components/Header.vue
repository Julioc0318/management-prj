<template>
  <div class="header">
    <!-- ****** BEGIN: 左侧按钮和面包屑导航区域 ****** -->
    <div class="lef">
      <el-button
        type="primary"
        plain
        icon="el-icon-menu"
        size="mini"
        @click="operateMenu()"
      >
      </el-button>
      <!-- ****** BEGIN: 面包屑导航区域 ****** -->
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in tabsList" :key="index">{{
            item.label
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- ****** E N D: 面包屑导航区域 ****** -->
    </div>
    <!-- ****** E N D: 左侧按钮和面包屑导航区域 ****** -->
    <!-- ****** BEGIN: 右侧头像下拉菜单区域 ****** -->
    <div class="rig">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <el-image
            style="width: 45px; height: 45px"
            :src="url"
            fit="cover"
          ></el-image>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- ****** BEGIN: 右侧头像下拉菜单区域 ****** -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      url: require("../assets/image/stichi.png"),
    };
  },
  methods: {
    operateMenu() {
      this.$store.commit("tab/collapseChange");
    },
  },
  computed: {
    ...mapState("tab", ["tabsList"]),
  },
};
</script>

<style scoped>
div.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
div.header div.lef {
  display: flex;
  height: 100%;
}
/* ====== BEGIN: button样式 ====== */
div.header div.lef .el-button {
  margin: 15px 18px 20px 18px;
  margin-left: 0;
  padding: 6px 12px;
}
/* ====== E N D: button ====== */
/* ====== BEGIN: 面包屑样式 ====== */
div.header div.lef div.el-breadcrumb {
  height: 60px;
  margin: 20px 0;
}
/* ====== E N D: 面包屑样式 ====== */
div.header div.rig .el-image {
  border-radius: 50%;
  margin-top: 5px;
}
div.header div.rig .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
div.header div.rig .el-icon-arrow-down {
  font-size: 12px;
}
</style>