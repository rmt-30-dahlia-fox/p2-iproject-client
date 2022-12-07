import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Calculator from '../views/CalculatorView.vue'
// import LoginRegister from "../views/LoginRegister.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home'
    },
    {
      path: '/calculator/:feature',
      component: Calculator,
      name: 'calculator'
    },
  ]
})

// router.beforeEach(async (to, from, next) => {
//   if (!localStorage.access_token && to.name == 'FavPage') {
//     next({ name: 'login' })
//   } else if (localStorage.access_token && to.name == 'login') {
//     next({ name: 'home' })
//   } else {
//     next()
//   }
// })

export default router
