import axios from "axios";
import router from "./router.js";
import Vue from "vue";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  (config) => {
    let token = window.localStorage.getItem("user");
    token = token ? JSON.parse(window.localStorage.getItem("user")).token : "";
    config.headers = {
      token,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.data.err == 2) {
      router.replace({
        path: "/login",
        query: {
          redirect: router.currentRoute.fullPath,
        },
      });
    }

    return response;
  },
  (error) => {
    let { response } = error;
    console.log("error", response);
    if (response.data.err == 404 || response.status == 404) {
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;
