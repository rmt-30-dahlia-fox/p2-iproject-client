import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

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
      component : Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.access_token
  if ((to.name == 'login' || to.name == 'register') && loggedIn) {
    next({ name: 'Home' })
  }else if(to.name=='home' && !loggedIn){
    next({name : 'login'})
  }
  else {next()}
})

export default router
