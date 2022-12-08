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
  <div class="d-flex justify-content-center mt-5 pt-5">
    <h3 class="text-center w-50 mt-5 pt-5" style="opacity: 0.3">
      this web still under development because hacktiv8 only give us few time to
      split the sea, to revive someone, and to change a glass of water into a
      galon of wine
    </h3>
  </div>
</template>
