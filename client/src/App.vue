<script>
import NavBar from '../src/components/NavBar.vue';
import Loader from '../src/components/Loader.vue';
import SideBar from '../src/components/SideBar.vue';
import { mapWritableState, mapState, mapActions } from 'pinia'
import { useGlobalStore } from './stores/global'
export default{
  components: {
    NavBar,
    Loader,
    SideBar
  },
  computed: {
    ...mapWritableState(useGlobalStore, ['isLoggedIn']),
    ...mapState(useGlobalStore, ["isSidebarOpen", "isLoad"])
  },
  methods:{
    ...mapActions(useGlobalStore, ["fetchUserData"])
  },
  created(){
    if(localStorage.access_token){
      this.isLoggedIn = true;
    }
    this.fetchUserData();
  }
}
</script>

<template>
  <Loader v-if="isLoad" />
  <NavBar />
  <SideBar v-if="isSidebarOpen"/>
  <RouterView />
</template>

<style>

</style>