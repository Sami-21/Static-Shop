import Vue from "vue";
import Dashboard from "../Views/DashboardView.vue";
import VueRouter from "vue-router";
import ProductsListVue from "@/Views/products/Index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  // {
  //   path: "/Categories",
  //   component: Categories,
  // },

  {
    path: "/products",
    component: ProductsListVue,
  },
];

const router = new VueRouter({
  routes: routes,
});
export default router;
