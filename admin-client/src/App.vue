<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import { useAdminStore } from './stores/admin'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    ...mapState(useAdminStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useAdminStore, ['loginHandler'])
  },
  async created() {
    try {
      await this.loginHandler()
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <div :class="isLogin ? 'container' : ''">
    <Navbar v-if="isLogin" />
    <RouterView />
  </div>
</template>
