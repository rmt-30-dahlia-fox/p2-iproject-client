import { createRouter, createWebHistory } from 'vue-router'
import { useAdminStore } from '../stores/admin'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import UnitView from '../views/UnitViews.vue'
import AddUnitView from '../views/AddUnitView.vue'
import OrderById from '../views/OrderByIdView.vue'
import OrderView from '../views/OrderView.vue'

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
      path: '/units',
      name: 'units',
      component: UnitView
    },
    {
      path: '/units/add',
      name: 'units-add',
      component: AddUnitView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/orders/:id',
      name: 'orders-by-id',
      component: OrderById
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  try {
    const adminStore = useAdminStore();
    await adminStore.loginHandler()
    if (
      (to.name === "register" && adminStore.isLogin) ||
      (to.name === "login" && adminStore.isLogin)
    ) {
      next({ name: "home" });
    } else if(!adminStore.isLogin) {
      if (to.name === 'register') next()
      else if (to.name === 'login') next()
      else next({ name: 'login' })
    } else {
      next()
    }
  } catch (error) {
    console.log(error);
  }
});

export default router