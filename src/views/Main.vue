<template>
  <div class="main">
    <el-container style="height: 100vh">
      <!-- ****** BEGIN: ASIDE 区域 ****** -->
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <!-- ****** E N D: ASIDE 区域 ****** -->
      <el-container>
        <!-- ****** BEGIN: HEADER 区域 ****** -->
        <el-header><Header /></el-header>
        <!-- ****** E N D: HEADER 区域 ****** -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/Aside.vue";
import Header from "../components/Header.vue";
export default {
  name: "Main",
  components: {
    Aside,
    Header,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #333;
  color: #d3dce6;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  padding-top: 0;
  background-color: #e9eef3;
  color: #333;
}
</style>