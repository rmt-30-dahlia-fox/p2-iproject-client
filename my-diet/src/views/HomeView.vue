<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

import NavbarVue from "../components/Navbar.vue";
import HomeContentVue from "../components/HomeContent.vue";

export default {
  components: {
    NavbarVue,
    HomeContentVue,
  },
  computed: {
    ...mapWritableState(useMainStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) this.isLogin = true;
  },
};
</script>

<template>
  <NavbarVue />
  <!-- content -->
  <HomeContentVue />
</template>
