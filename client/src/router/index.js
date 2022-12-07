import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Hotels from '../views/Hotels.vue'
import Login from '../views/Login.vue'


const routes = [
  { path: '/', component: Dashboard },
  { path: '/hotels', component: Hotels },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;
