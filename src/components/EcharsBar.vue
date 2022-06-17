<template>
  <div>
    <div class="echars-bar" style="width: 100%; height: 300px"></div>
  </div>
</template>


<script>
import * as echarts from "echarts";

export default {
  name: "EcharsBar",
  props: ["userData"],
  mounted() {
    /* ===== BEGIN: 格式整理axios返回数据 ===== */
    let xAxisData = [];
    let active = [];
    let newNum = [];
    setTimeout(() => {
      for (let i = 0; i < this.userData.length; i++) {
        xAxisData.push(this.userData[i].data);
        active.push(this.userData[i].active);
        newNum.push(this.userData[i].new);
      }
      /* ===== E N D: 格式整理axios返回数据 ===== */
      var myChart = echarts.init(document.querySelector(".echars-bar"));
      myChart.setOption({
        legend: {
          // 图例
          orient: "vertical",
          right: 0,
          top: 0,
          data: ["活跃用户量", "新增用户量"],
        },
        xAxis: {
          data: xAxisData,
        },
        yAxis: {},
        series: [
          { name: "活跃用户量", type: "bar", data: active },
          { name: "新增用户量", type: "bar", data: newNum },
        ],
      });
    }, 1000);
  },
};
</script>

<style scoped>
</style>