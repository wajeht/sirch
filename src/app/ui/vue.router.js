import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./pages/Dashboard.vue";
import Proxy from "./pages/Proxy.vue";
import Login from "./components/Login.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      layout: "regular",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
    meta: {
      title: "404",
      layout: "regular",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      layout: "admin",
    },
  },
  {
    path: "/proxy",
    name: "Proxy",
    component: Proxy,
    meta: {
      title: "Proxy",
      layout: "admin",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
