import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import HomeView from "../views/HomeView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import MovieDetail from "../components/MovieDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      component: MainView,
      children: [
        {
          path: "home",
          name: "movies",
          component: HomeView,
        },
        {
          path: "detail/:id",
          name: "detail",
          component: MovieDetail,
        },
        {
          path: "bookmark",
          name: "bookmark",
          component: BookmarkView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  if (to.path == "/") return next("/home");
  if ((to.name == "login" || to.name == "register") && access_token)
    return next("/home");
  if (to.name == "bookmark" && !access_token) return next("/login");
  next();
});

export default router;
