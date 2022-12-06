import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/news",
      name: "newsSection",
      component: () => import("../components/News.vue"),
    },
    {
      path: "/covid-table",
      name: "covidTable",
      component: () => import("../components/CovidTable.vue"),
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("../components/Appointment.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
