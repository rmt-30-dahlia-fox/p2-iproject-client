<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import { useCustomerStore } from './stores/customer'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    ...mapState(useCustomerStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['fetchUnit'])
  },
  async created() {
    try {
      this.fetchUnit()
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <Navbar />
  <div class="container mx-auto mt-12">
    <RouterView />
  </div>
</template>
