import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '382583174922-iijj9d7rckk14ov8rukh6sguh6k9jqsn.apps.googleusercontent.com'
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
