import Mock from "mockjs";
import homeApi from "./mockServerData/home.js";
// 拦截器规则 Mock.mock(url, callback)，其中 callback 返回数据
Mock.mock("/home/getData", homeApi.getStatisticalData);
