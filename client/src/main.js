import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import VueAwesomePaginate from "vue-awesome-paginate";
import vue3GoogleLogin from "vue3-google-login";
import App from "./App.vue";
import router from "./router";
import "vue-awesome-paginate/dist/style.css";
import Paginate from "vuejs-paginate";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(VueAwesomePaginate);
app.use(Paginate);

app.use(vue3GoogleLogin, {
  clientId:
    "216252910840-262ukb6hha0fb5ud6mblk317m86r00ss.apps.googleusercontent.com",
});

app.mount("#app");
