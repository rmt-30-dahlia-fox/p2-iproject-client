<script>
import axios from "axios";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
    ...mapWritableState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async login(body) {
      try {
        this.isLoading = true;
        const { data } = await axios.post(this.baseUrl + "/login", body);
        this.successHandler(data.message);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/home");
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.errorHandler(error);
      }
    },
    async handleOnGoogleLogin(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/login/google",
          headers: {
            google_token: response.credential,
          },
        });

        this.successHandler(data.message);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/home");
        this.isLoading = false;
      } catch (error) {
        this.errorMessage(error);
      }
    },
  },
};
</script>

<template>
  <section class="login">
    <div class="container shadow-lg rounded">
      <span @click="$router.push('/home')">&#10005;</span>
      <div class="logo">
        <h1><a>Movie</a><a>Library</a></h1>
      </div>
      <form @submit.prevent="login({ email, password })">
        <label for="">Email</label>
        <input v-model="email" class="form-control" type="text" />
        <label for="">Password</label>
        <input v-model="password" class="form-control" type="password" />
        <router-link :to="'register'">Register</router-link>
        <button>
          <div v-if="isLoading" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          Login
        </button>
        <div class="col-md-8 offset-md-2">
          <GoogleLogin :callback="handleOnGoogleLogin" />
        </div>
      </form>
    </div>
  </section>
</template>
