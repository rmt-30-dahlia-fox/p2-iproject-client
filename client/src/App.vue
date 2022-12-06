<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <div class="min-h-screen max-w-screen">
    <Navbar />
    
    <RouterView />

    <Footer />
    </div>
</template>