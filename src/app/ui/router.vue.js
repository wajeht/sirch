import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./pages/Dashboard.vue";
import Proxy from "./pages/Proxy.vue";
import Login from "./components/Login.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: (to) => {
      return { path: "/dashboard" };
    },
  },
  {
    path: "/logout",
    redirect: (to) => {
      return { path: "/login" };
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: "RegularLayout",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
    meta: {
      layout: "RegularLayout",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      layout: "AdminLayout",
    },
  },
  {
    path: "/proxy",
    name: "Proxy",
    component: Proxy,
    meta: {
      layout: "AdminLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
