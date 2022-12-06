<script>
import {mapState} from "pinia";
import Navbar from "./components/Navbar.vue";
import {useGlobalStore} from "./stores/global";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useGlobalStore, ["user"]),
  },
  created() {

  },
}
// Navbar v-if="user"
</script>

<template>
  <Navbar  />
  <!-- 
  <form action="http://localhost:3000/profile" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" />
    <input type="submit">
  </form>
  <img src="http://localhost:3000/media/dea808a87770d2478cf6d1f0520ba110">
  -->
  <router-view></router-view>
</template>

<style>
</style>
