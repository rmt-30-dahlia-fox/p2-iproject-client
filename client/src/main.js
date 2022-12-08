import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
// console.log('test');
app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId:
    "216422944060-i8l4jp0nbld2qgjkinjgmc9kne1nm0e5.apps.googleusercontent.com",
});

app.mount("#app");
