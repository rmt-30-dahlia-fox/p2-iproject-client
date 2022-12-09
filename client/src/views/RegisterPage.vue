<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["registerHandler"]),

    submitHandler() {
      this.registerHandler({
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
          <input
            type="email"
            class="form-control"
            placeholder="email@mail.com"
            v-model="email"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control"
            placeholder="minimal 5 character"
            v-model="password"
            required
          />
        </div>
        <br />
        <div class="text-center">
          <button type="submit" class="btn btn-success">Sign up</button>
        </div>
        <br />
        <p class="text-center">
          Aldready have an account?
          <router-link to="/login" class="underline">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
