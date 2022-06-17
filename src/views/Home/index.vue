<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="10" style="margin-top: 20px">
        <!-- ****** BEGIN: 第一个卡片 用户信息 ****** -->
        <!-- #region user -->
        <el-card shadow="hover">
          <div class="user">
            <img :src="url" class="profile" />
            <div class="user-info">
              <p class="name">Julio</p>
              <p class="access">管理员</p>
            </div>
          </div>
          <hr />
          <div class="login-info">
            <p>上次登录时间：<span>2022-05-14</span></p>
            <p>上次登录地点：<span>杭州</span></p>
          </div>
        </el-card>
        <!-- #endregion-->
        <!-- ****** E N D: 第一个卡片 用户信息 ****** -->
        <!-- ****** BEGIN: 第二个卡片 表格 ****** -->
        <!-- #region table -->
        <el-card style="margin-top: 20px" height="460px" shadow="hover">
          <el-table :data="tableData">
            <el-table-column
              prop="name"
              label="商品名称"
              sortable
            ></el-table-column>
            <el-table-column
              prop="sale.daily"
              label="日销量"
              sortable
            ></el-table-column>
            <el-table-column
              prop="sale.month"
              label="月销量"
              sortable
            ></el-table-column>
            <el-table-column
              prop="sale.total"
              label="销量"
              sortable
            ></el-table-column>
          </el-table>
        </el-card>
        <!-- #endregion -->
        <!-- ****** E N D: 第二个卡片 表格 ****** -->
      </el-col>
      <el-col :span="14">
        <div class="num">
          <el-card
            v-for="(item, index) in countData"
            :key="index"
            :body-style="{ display: 'flex', padding: 0 }"
            shadow="hover"
          >
            <div class="icon" :style="`backgroundColor:${item.color}`">
              <i :class="`el-icon-${item.icon}`"></i>
            </div>

            <div class="info">
              <p class="tit">{{ item.name }}</p>
              <p class="count">￥{{ item.value }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <EcharsLine :orderData="orderData" />
        </el-card>
        <div
          class="graph"
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          "
        >
          <el-card style="height: 280px; width: 40%">
            <EcharsBar :userData="userData" />
          </el-card>
          <el-card style="height: 280px; width: 55%">
            <EcharsPie :videoData="videoData" />
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "../../plugins/axios";
import EcharsLine from "../../components/EcharsLine.vue";
import EcharsPie from "../../components/EcharsPie.vue";
import EcharsBar from "../../components/EcharsBar.vue";
export default {
  name: "Home",
  mounted() {
    this.$axios.get("/home/getData").then((res) => {
      this.tableData = res.data.data.tableData;
      this.countData = res.data.data.countData;
      this.orderData = res.data.data.orderData; // EcharsLine
      this.userData = res.data.data.userData; // EcharsBar
      this.videoData = res.data.data.videoData; // EcharsPie
    });
  },
  data() {
    return {
      url: require("../../assets/image/stichi.png"),
      tableData: [],
      countData: [],
      orderData: [],
      userData: [],
      videoData: [],
    };
  },
  components: {
    EcharsLine,
    EcharsBar,
    EcharsPie,
  },
};
</script>

<style scoped>
div.user {
  display: flex;
  margin-bottom: 20px;
}
div.user p.name {
  font-size: 28px;
  margin: 20px 0 0 26px;
}
div.user p.access {
  font-size: 12px;
  margin: 0 0 0 26px;
  color: grey;
}
img.profile {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
div.login-info p {
  font-size: 12px;
  margin-top: 10px;
  color: grey;
}
div.login-info span {
  color: black;
  padding-left: 25px;
}
div.num {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
}
div.num .el-card {
  width: 210px;
  height: 60px;
  margin-bottom: 20px;
}
div.num .el-card div.icon {
  width: 60px;
  height: 60px;
}
div.num .el-card div.icon i {
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 20px;
  margin: 20px;
  color: white;
}
div.num .el-card p {
  width: 150px;
  font-size: 12px;
  text-align: center;
  color: grey;
  margin-top: 5px;
}
div.num .el-card p.count {
  font-weight: normal;
  font-weight: bold;
  font-size: 22px;
  margin-top: 4px;
  color: black;
}
</style>
