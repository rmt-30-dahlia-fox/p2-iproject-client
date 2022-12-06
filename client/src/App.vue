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
  <div class="min-h-screen max-w-screen flex flex-col">
    <Navbar />
    
    <RouterView />

    <Footer />
    </div>
</template>