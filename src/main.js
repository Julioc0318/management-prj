import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/base.css";
import App from "./App.vue";
import router from "./plugins/router.js";
import store from "./store";
import "../api/mock.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
