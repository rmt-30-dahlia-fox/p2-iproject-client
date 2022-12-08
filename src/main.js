import { createApp } from "vue"
import { createPinia } from "pinia"
import Toastify from "toastify-js"
import vue3GoogleLogin from "vue3-google-login"
import App from "./App.vue"
import router from "./router"
import { markRaw } from "vue"

import "toastify-js/src/toastify.css"

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
  clientId: "425614752001-tngmaevgsjaggk0oh4uvko5lper71mm1.apps.googleusercontent.com",
})
app.use(pinia)
app.use(Toastify)
app.use(router)

app.mount("#app")
