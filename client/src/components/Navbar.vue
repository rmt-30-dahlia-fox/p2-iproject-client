<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["loginStatus"]),
  },
  created() {
    if (localStorage.access_token) {
      this.loginStatus = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/archon_digicard2.jpg" height="200" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <h4>
              <router-link to="/" class="nav-link text-dark">Home</router-link>
            </h4>
          </li>
          <li class="nav-item" v-if="!loginStatus">
            <h4>
              <router-link to="/login" class="nav-link text-dark"
                >Login</router-link
              >
            </h4>
          </li>
          <li class="nav-item" v-if="!loginStatus">
            <h4>
              <router-link to="/register" class="nav-link text-dark"
                >Sign up</router-link
              >
            </h4>
          </li>
          <li class="nav-item" v-if="loginStatus">
            <h4>
              <router-link to="/order-history" class="nav-link text-dark"
                >Order History</router-link
              >
            </h4>
          </li>
          <li class="nav-item" v-if="loginStatus">
            <h4>
              <router-link to="/cart" class="nav-link text-dark"
                >Cart</router-link
              >
            </h4>
          </li>
          <li class="nav-item" v-if="loginStatus">
            <h4>
              <a @click.prevent="logoutHandler" class="nav-link text-dark">
                Logout
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
