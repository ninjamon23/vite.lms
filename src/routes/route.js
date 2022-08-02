import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/HomePage.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("../pages/LoginPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
