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
      <h1><a>Movie</a><a>Library</a></h1>
    </div>
    <div>
      <router-link :to="'/home'" :class="{ active: $route.path === '/home' }"
        >Movie</router-link
      >
      <router-link
        :to="'/bookmark'"
        :class="{ active: $route.path === '/bookmark' }"
        >Bookmark</router-link
      >
    </div>
    <div>
      <h4 v-if="!isLogin" @click="$router.push({ name: 'login' })">Login</h4>
      <h4 v-if="isLogin" @click="logout">Logout</h4>
    </div>
  </header>
</template>
