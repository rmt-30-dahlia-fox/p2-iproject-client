import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { markRaw } from 'vue'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
