<script>
import { mapActions } from 'pinia';
import { useGlobalStore } from './stores/global';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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
    <Navbar />
    
    <RouterView />

    <Footer />
    </div>
</template>