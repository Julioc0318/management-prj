import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Main from "../views/Main.vue";
import Home from "../views/Home/index.vue";
import Mall from "../views/Mall/index.vue";
import User from "../views/User/index.vue";
import PageOne from "../views/Others/PageOne.vue";
import PageTwo from "../views/Others/PageTwo.vue";

let routes = [
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      { path: "/user", name: "User", component: User },
      { path: "/home", name: "Home", component: Home },
      { path: "/mall", name: "Mall", component: Mall },
      { path: "/others_page1", name: "PageOne", component: PageOne },
      { path: "/others_page2", name: "PageTwo", component: PageTwo },
    ],
  },
  { path: "/", redirect: "/home" },
];

let router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
