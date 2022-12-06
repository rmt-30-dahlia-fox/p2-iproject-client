<script>
import NavBar from '../src/components/NavBar.vue';
import Loader from '../src/components/Loader.vue';
import { mapWritableState, mapState, mapActions } from 'pinia'
import { useGlobalStore } from './stores/global'
export default{
  components: {
    NavBar,
    Loader
  },
  computed: {
    ...mapWritableState(useGlobalStore, ['isLoggedIn'])
  },
  methods:{
  },
  created(){
    if(localStorage.access_token){
      this.isLoggedIn = true;
    }
  }
}
</script>

<template>
  <Loader v-if="isLoad" />
  <NavBar />
  <RouterView />
</template>

<style>

</style>