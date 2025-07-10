import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
