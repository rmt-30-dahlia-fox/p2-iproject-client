import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import MyTeam from '../views/MyTeam.vue'
import Zonk from '../components/Zonk.vue'
import Attributes from '../components/Attributes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/myteam',
      name: 'myteam',
      component: MyTeam
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: Zonk
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Attributes
    }
  ]
})

router.beforeEach((to, _, next) => {
  const freeRoutes = ['/register', '/login']
  const auth = !!localStorage.getItem('access_token')

  if(!freeRoutes.includes(to.path) && !auth){
    next({name: 'login'})
  } else{
    next()
  }

})

export default router
