import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import DetailCardPage from "../views/DetailCardPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CartPage from "../views/CartPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import OrderHistoryPage from "../views/OrderHistoryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/digimon-card/:name",
      name: "DetailCardPage",
      component: DetailCardPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/shopping-cart",
      name: "CartPage",
      component: CartPage,
    },
    {
      path: "/order-history",
      name: "OrderHistoryPage",
      component: OrderHistoryPage,
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
    {
      path: "/digimon-card/404-not-found",
      name: "NotFoundDigimon",
      component: NotFoundPage,
    },
  ],
});

//navigation guard
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.access_token;
//   if (to.name === "CartPage" && !isAuthenticated) {
//     next({ name: "LoginPage" });
//   } else if (
//     (to.name === "RegisterPage" || to.name === "LoginPage") &&
//     isAuthenticated
//   ) {
//     next({ name: "HomePage" });
//   } else next();
// });

export default router;
