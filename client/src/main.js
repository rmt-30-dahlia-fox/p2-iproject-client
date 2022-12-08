import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from 'vue'
import Paginate from "vuejs-paginate-next";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const pinia = createPinia()
const app = createApp(App);

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(Paginate)
app.use(pinia);
app.use(router);

app.mount("#app");
