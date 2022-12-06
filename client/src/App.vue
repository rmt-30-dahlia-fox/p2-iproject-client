<script>
import {mapState} from "pinia";
import Navbar from "./components/Navbar.vue";
import FriendCard from "./components/FriendCard.vue";
import {useGlobalStore} from "./stores/global";

export default {
  components: {
    Navbar,
    FriendCard,
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
<section class="flex">
  <router-view></router-view>
  <div id="friend-list" class="w-1/5 p-4 shadow-lg h-100 bg-gray-50">
    <h1>People</h1>
    <FriendCard />
    <FriendCard />
    <FriendCard />
    <FriendCard />
    <FriendCard />
  </div>
</section>
</template>

<style>
</style>
