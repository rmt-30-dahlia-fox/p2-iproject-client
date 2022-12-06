import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import LocationPage from '../views/LocationPage.vue';
import ReviewPage from '../views/ReviewPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage
    },
    {
      path: '/review/:id',
      name: 'review',
      component: ReviewPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router