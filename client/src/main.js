import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "./assets/main.css";

const app = createApp(App)

const pinia = createPinia();

app.use(pinia)

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");
  // console.log(to, access_token)

  if (access_token && to.name === "login") {
    return next(from.path || "/");
  }

  if (!access_token && !["signup", "login"].includes(to.name)) {
    return next("/login");
  }

  next();
});

app.use(router)

app.mount('#app')
