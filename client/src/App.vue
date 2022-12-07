<script>
import { globalStore } from './stores/global';
import { mapActions, mapWritableState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'

export default {
  computed: {
    ...mapWritableState(globalStore, ['isLogin', 'greetTheName'])
  },

  created(){
    if(localStorage.access_token){
      this.greetTheName = localStorage.name
      this.isLogin = true
    } else{
      this.isLogin = false
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <RouterView />
</template>