import { createApp } from "vue"
import { createPinia } from "pinia"
import Toastify from "toastify-js"

import App from "./App.vue"
import router from "./router"
import { markRaw } from "vue"

import "toastify-js/src/toastify.css"

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(Toastify)
app.use(router)

app.mount("#app")
