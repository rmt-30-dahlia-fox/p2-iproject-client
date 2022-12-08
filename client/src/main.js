import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '952784085079-jg6vhj6t3539d27rbj92feurqs40td20.apps.googleusercontent.com'
})

app.mount('#app')
