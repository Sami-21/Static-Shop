import Vue from "vue";
import VueRouter from "vue-router";
import ProductsListView from "@/Views/admin/products/Index.vue";
import HomeView from "@/Views/client/HomeView.vue";
import LoginView from "@/Views/admin/LoginView.vue";
import DashboardView from "../Views/admin/Index.vue";
import StatsView from "../Views/admin/StatsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/admin",
    component: LoginView,
  },

  {
    path: "/dashboard",
    component: DashboardView,
    children: [
      {
        path: "",
        component: StatsView,
      },
      {
        path: "products",
        component: ProductsListView,
      },
    ],
  },
];

const router = new VueRouter({
  routes: routes,
});
export default router;
