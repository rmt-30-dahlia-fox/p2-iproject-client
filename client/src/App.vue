<script>
import { mapActions, mapState } from 'pinia';
import { useGlobalStore } from './stores/global';
import Preloader from '@/components/Preloader.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Preloader,
    Navbar,
    Footer
  },
  computed: {
    ...mapState(useGlobalStore, ['isLoading'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['checkIsLogin'])
  },
  created() {
    this.checkIsLogin()
  }
}
</script>

<template>
  <div class="min-h-screen max-w-screen flex flex-col">
    <Preloader
    v-if="isLoading"
    />
    
    <Navbar />
    
    <RouterView />

    <Footer />
    </div>
</template>