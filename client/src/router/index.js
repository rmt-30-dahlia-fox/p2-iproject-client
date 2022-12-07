import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Register from '../views/Register.vue'

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
      path: '/members',
      name: 'member',
      component: Member
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.name == 'register' || to.name == 'members' || to.name == 'transaction') && !localStorage.access_token) {
    next({ name: 'login' });
  }
  else if (to.name == 'login' && localStorage.access_token) {
    next({ name: 'home' });
  } 
  else if (to.name == 'register' && localStorage.role !== 'Admin') {
    next({ name: 'login' });
  } 
  else {
    next();
  }
});

export default router
