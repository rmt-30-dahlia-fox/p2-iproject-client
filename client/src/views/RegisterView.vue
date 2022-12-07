<script>
import axios from "axios";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      retype: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
    ...mapWritableState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async register(body) {
      try {
        this.isLoading = true;
        const { data } = await axios.post(this.baseUrl + "/register", body);
        this.successHandler(data.message);
        this.$router.push("/login");
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.errorHandler(error);
      }
    },
  },
};
</script>

<template>
  <section class="register">
    <div class="container shadow-lg rounded">
      <span @click="$router.push('/home')">&#10005;</span>
      <div class="logo">
        <h1><a>Movie</a><a>Library</a></h1>
      </div>
      <form @submit.prevent="register({ username, email, password })">
        <label for="">Username</label>
        <input v-model="username" class="form-control" type="text" />
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <label for="">Retype</label>
        <input v-model="retype" class="form-control" type="password" />
        <router-link :to="'login'">Login</router-link>
        <button>
          <div v-if="isLoading" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          Register
        </button>
      </form>
      <div class="social"></div>
    </div>
  </section>
</template>
