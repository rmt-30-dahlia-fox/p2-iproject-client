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
};
</script>

<template>
  <NavbarVue />
  <!-- content -->
  <HomeContentVue />
</template>
