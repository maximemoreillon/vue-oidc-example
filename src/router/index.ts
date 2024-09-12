import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: () => import("@/views/Data.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
