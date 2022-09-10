import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book/:id",
    name: "Book",
    component: () =>//update path name
      import("../components/BookPage.vue"),
  },
  {
    path: "/singin",
    name: "Singin",
    component: () =>//update path name
      import("../components/singinPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
