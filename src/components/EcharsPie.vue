<template>
  <div>
    <div class="echars-pie" style="width: 100%; height: 200px"></div>
  </div>
</template>


<script>
import * as echarts from "echarts";

export default {
  name: "EcharsPie",
  props: ["videoData"],
  mounted() {
    let seriesData = [];
    setTimeout(() => {
      for (let i = 0; i < this.videoData.length; i++) {
        let temp = {
          value: this.videoData[i].value,
          name: this.videoData[i].name,
        };
        seriesData.push(temp);
      }

      var myChart = echarts.init(document.querySelector(".echars-pie"));
      myChart.setOption({
        series: [
          {
            type: "pie",
            data: seriesData,
          },
        ],
      });
    }, 1000);
  },
};
</script>

<style scoped>
</style>