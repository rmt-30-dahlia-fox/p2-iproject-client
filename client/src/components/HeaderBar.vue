<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  data() {
    return {
      isLogin: localStorage.access_token || false,
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["logout"]),
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <h1 style="color: white">Movie Library</h1>
    </div>
    <div>
      <router-link
        :to="'/home'"
        :class="{ active: $route.path === '/home' }"
        style="color: white"
        >Movie</router-link
      >
      <router-link
        :to="'/bookmark'"
        :class="{ active: $route.path === '/bookmark' }"
        style="color: white"
        >Bookmark</router-link
      >
    </div>
    <div>
      <h4
        v-if="!isLogin"
        @click="$router.push({ name: 'login' })"
        style="color: white"
      >
        Login
      </h4>
      <h4 v-if="isLogin" @click="logout" style="color: white">Logout</h4>
    </div>
  </header>
</template>
