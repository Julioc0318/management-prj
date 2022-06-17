<template>
  <div>
    <div class="echars-line" style="width: 100%; height: 300px"></div>
  </div>
</template>


<script>
import * as echarts from "echarts";
export default {
  name: "EcharsLine",
  props: ["orderData"],
  mounted() {
    /* ===== BEGIN: x轴坐标 ===== */
    let date = [];
    setTimeout(() => {
      for (let i = 0; i < this.orderData.date.length; i++) {
        date.push(
          this.orderData.date[i].slice(4, 6) +
            "月" +
            this.orderData.date[i].slice(7, 9) +
            "日"
        );
      }
      /* ===== E N D: x轴坐标 ===== */
      /* ===== BEGIN: 折线图数据 ===== */
      /* ===== BEGIN: 格式整理axios返回数据 ===== */
      let legendData = [];
      let seriesData = [];
      for (let key in this.orderData.data[0]) {
        legendData.push(key);
        let arrValue = [];
        for (let i = 0; i < this.orderData.data.length; i++) {
          arrValue.push(this.orderData.data[i][key]);
        }
        let tempObj = {
          name: key,
          data: arrValue,
          type: "line",
          label: {
            position: "bottom",
            textStyle: {
              fontSize: 20,
            },
          },
        };
        seriesData.push(tempObj);
      }
      /* ===== E N D: 格式整理axios返回数据 ===== */
      /* ===== E N D: 折线图数据 ===== */
      var myChart = echarts.init(document.querySelector(".echars-line"));
      myChart.setOption({
        title: {
          text: "产品日销量折线图",
        },
        legend: {
          // 图例
          orient: "vertical",
          right: 10,
          top: "center",
          data: legendData,
        },
        xAxis: {
          data: date,
        },
        yAxis: {},
        series: seriesData,
      });
    }, 1000);
  },
};
</script>

<style scoped>
</style>