import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import ActivitiesPage from "@/views/ActivitiesPage.vue"
import EditProfilePage from "@/views/EditProfilePage.vue"
import CreateActivityPage from "@/views/CreateActivityPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/profile/:userId",
      name: "ProfilePage",
      component: ProfilePage,
    },
    {
      path: "/profile/:userId/activities",
      name: "ActivitiesPage",
      component: ActivitiesPage,
    },
    {
      path: "/profile/:userId/edit-profile",
      name: "EditProfilePage",
      component: EditProfilePage,
    },
    ,
    {
      path: "/new-activity",
      name: "CreateActivityPage",
      component: CreateActivityPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFoundPage",
      component: NotFoundPage
    },
  ],
});

router.beforeEach((to, from) => {
  if(!localStorage.access_token && !['LandingPage', 'LoginPage', 'NotFoundPage'].includes(to.name)) {
    return { name: 'LoginPage' }
  } else if (localStorage.access_token && ['LandingPage', 'LoginPage', 'NotFoundPage'].includes(to.name)) {
    return { name: 'HomePage' }
  }
})

export default router;
