<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState } from "pinia";
import { useAdminStore } from './stores/admin'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    ...mapState(useAdminStore, ['isLogin'])
  }
}
</script>

<template>
  <div :class="isLogin ? 'container' : ''">
    <Navbar v-if="isLogin" />
    <RouterView />
  </div>
</template>
