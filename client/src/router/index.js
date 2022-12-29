import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Hotels from '../views/Hotels.vue'
import Login from '../views/Login.vue'
import Transaction from '../views/Transaction.vue'
import TransactionSuccess from '../components/TransactionSuccess.vue'


const routes = [
  { path: '/', name:'Dashboard', component: Dashboard },
  { path: '/hotels', component: Hotels },
  { path: '/login', name:'Login', component: Login },
  { path: '/transaction', component: Transaction },
  { path: '/transaction/success', component: TransactionSuccess },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {

  const notLoggedIn = !localStorage.getItem('access_token')

  if(to.path === '/transaction' && notLoggedIn) next({name: 'Login'})
  else if (to.path === '/transaction/success' && notLoggedIn) next({name: 'Login'})
  else if (to.path === '/login' && !notLoggedIn) next({name: 'Dashboard'})
  else next()
})

export default router;
