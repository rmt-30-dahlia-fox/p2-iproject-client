import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const access_token = localStorage.access_token;
//   if (to.path == "/") return next("/home");
//   if ((to.name == "login" || to.name == "register") && access_token)
//     return next("/home");
//   if (to.name == "bookmark" && !access_token) return next("/login");
//   next();
// });

export default router;
