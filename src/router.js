import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "/technologies",
      name: "technologies",
      component: () => import("./views/Technologies.vue")
    },
    {
      path: "/contribute",
      name: "contribute",
      component: () => import("./views/Contribute.vue")
    },
    {
        path: "*",
        name: "404",
        component: () => import("./views/404.vue")
    },
  ]
});