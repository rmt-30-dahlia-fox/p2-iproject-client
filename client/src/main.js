import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();

app.use(pinia)

router.beforeEach((to, from, next) => {
  const { access_token } = localStorage.getItem("access_token");

  if (!["login", "signup"].includes(to.name) && !access_token) {
    return next("/login");
  }
});

app.use(router)

app.mount('#app')
