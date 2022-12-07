<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["loginHandler", "handleOnGoogleLogin"]),

    submitHandler() {
      this.loginHandler({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <div class="card col-4 mx-auto my-2">
    <div class="card-body d-flex flex-row">
      <form class="col-12" @submit.prevent="submitHandler">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="email" required />
        </div>
        <br />
        <div class="form-group">
          <label for="caption">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        <br />
        <div class="text-center">
          <button type="submit" class="btn btn-success">Login</button>
        </div>
        <br />
        <div class="text-center">
          <GoogleLogin :callback="handleOnGoogleLogin" />
        </div>
        <p class="text-center">
          Don't have an account?
          <router-link to="/register" class="underline">Sign Up</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
