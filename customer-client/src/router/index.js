import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import OrderView from '../views/OrderView.vue'
import CustomerOrder from '../views/CustomerOrder.vue'
import { useCustomerStore } from '../stores/customer'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/order-form',
      name: 'orderForm',
      component: OrderView
    },
    {
      path: '/orders',
      name: 'orders',
      component: CustomerOrder
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  try {
    const customerStore = useCustomerStore();
    if (
      (to.name === "register" && customerStore.isLogin) ||
      (to.name === "login" && customerStore.isLogin)
    ) {
      next({ name: "home" });
    } else if (to.name === "orderForm") {
      if (!customerStore.isLogin) {
        next({ name: "login" });
      } else {
        next()
      }
    } else {
      next()
    }
  } catch (error) {
    console.log(error);
  }
});

export default router