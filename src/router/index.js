import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import UserDetailView from "../views/UserDetailView.vue"

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
      path: "/register",
      name: "registerPage",
      component: () => import("../views/RegisterView.vue"),
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
      path: "/user-detail",
      name: "userDetail",
      component: UserDetailView,
    },
    {
      path: "/favoriteList",
      name: "favoritePage",
      component: () => import("../views/FavoriteView.vue"),
    },
    {
      path: "/chart",
      name: "chartcovid",
      component: () => import("../components/Chart.vue"),
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

router.beforeEach(function (to, from, next) {
  const isAuthenticated = localStorage.getItem("access_token")
  if (to.name === "favoritePage" && !isAuthenticated) next({ name: "loginPage" })
  else if (to.name === "userDetail" && !isAuthenticated) next({ name: "loginPage" })
  else if ((to.name === "registerPage" || to.name === "loginPage") && isAuthenticated)
    next({ name: "home" })
  else next()
})

export default router
