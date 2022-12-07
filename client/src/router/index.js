import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Hotels from '../views/Hotels.vue'
import Login from '../views/Login.vue'
import Transaction from '../views/Transaction.vue'
import TransactionSuccess from '../components/TransactionSuccess.vue'


const routes = [
  { path: '/', component: Dashboard },
  { path: '/hotels', component: Hotels },
  { path: '/login', component: Login },
  { path: '/transaction', component: Transaction },
  { path: '/transaction/success', component: TransactionSuccess },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;
