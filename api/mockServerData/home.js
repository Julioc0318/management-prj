import Mock from "mockjs";

// 图表数据
let list = [];
export default {
  // 获取统计数据
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      list.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 20000,
      data: {
        // 饼状图
        videoData: [
          {
            name: "小米",
            value: 2999,
          },
          {
            name: "苹果",
            value: 5999,
          },
          {
            name: "vivo",
            value: 1500,
          },
          {
            name: "oppo",
            value: 1999,
          },
          {
            name: "魅族",
            value: 2200,
          },
          {
            name: "三星",
            value: 4500,
          },
        ],
        // 柱状图
        userData: [
          { data: "周一", new: 5, active: 200 },
          { data: "周二", new: 10, active: 500 },
          { data: "周三", new: 12, active: 550 },
          { data: "周四", new: 60, active: 800 },
          { data: "周五", new: 65, active: 550 },
          { data: "周六", new: 53, active: 770 },
          { data: "周日", new: 33, active: 170 },
        ],
        // 折线图
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: list,
        },
        tableData: [
          // #region tableData
          {
            name: "oppo",
            sale: {
              daily: 10,
              month: 100,
              total: 300,
            },
          },
          {
            name: "vivo",
            sale: {
              daily: 40,
              month: 300,
              total: 800,
            },
          },
          {
            name: "苹果",
            sale: {
              daily: 230,
              month: 800,
              total: 3200,
            },
          },
          {
            name: "小米",
            sale: {
              daily: 70,
              month: 500,
              total: 1230,
            },
          },
          {
            name: "三星",
            sale: {
              daily: 440,
              month: 3200,
              total: 12230,
            },
          },
          {
            name: "魅族",
            sale: {
              daily: 20,
              month: 100,
              total: 630,
            },
          },
          // #endregion
        ],
        countData: [
          // #region countData
          {
            name: "今日支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "今日收藏订单",
            value: 1234,
            icon: "star-on",
            color: "#ffb989",
          },
          {
            name: "今日未支付订单",
            value: 1234,
            icon: "warning",
            color: "#5ab1ef",
          },
          {
            name: "本月支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "本月收藏订单",
            value: 1234,
            icon: "star-on",
            color: "#ffb989",
          },
          {
            name: "本月未支付订单",
            value: 1234,
            icon: "warning",
            color: "#5ab1ef",
          },
          // #endregion
        ],
      },
    };
  },
};
