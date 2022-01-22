import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ListAnnonce from "../views/ListAnnonce.vue";
import DetailAnnonce from "../views/DetailAnnonce.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/listannonce",
      name: "ListAnnonce",
      component: ListAnnonce,
   },
   {
      path: "/detailannonce",
      name: "DetailAnnonce",
      component: DetailAnnonce,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
