<script>

import Navbar from './components/Navbar.vue'
import { mapStores, mapWritableState } from 'pinia'
import { useMainStore } from './stores/main'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapWritableState(useMainStore, ['loginStatus']),
  },
  created() {
    this.checkAccessToken()
  }, 
  methods: {
    checkAccessToken() {
      if(localStorage.access_token) this.loginStatus = true
    }
  }
}

</script>

<template>
  
  <Navbar />

  <router-view />
</template>
