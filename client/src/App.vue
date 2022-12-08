<script>
import {mapActions, mapState} from "pinia";
import Navbar from "./components/Navbar.vue";
import FriendCard from "./components/FriendCard.vue";
import {useGlobalStore} from "./stores/global";

export default {
  components: {
    Navbar,
    FriendCard,
  },
  computed: {
    ...mapState(useGlobalStore, ["user", "users"]),
  },
  methods: {
    goGlobal() {
      this.$router.push("/global")
    },
  },
}
// Navbar v-if="user"
</script>

<template>
  <Navbar v-if="!['/login', '/signup',].includes($route.path)" />
  <!-- 
  <form action="http://localhost:3000/profile" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" />
    <input type="submit">
  </form>
  <img src="http://localhost:3000/media/dea808a87770d2478cf6d1f0520ba110">
  -->
<section :class="{flex: true, 'justify-center': !user || $route.path === '/profile', 'items-center': !user || $route.path === '/profile'}">
  <router-view></router-view>
  <div v-if="user && !['/profile'].includes($route.path)" id="friend-list" class="w-1/5 p-4 shadow-lg h-100 bg-gray-50">
    <h1>People</h1>
    <div @click.prevent="goGlobal()" v-if="!['/global',].includes($route.path)" class="flex p-2 pr-6 my-2 rounded-lg cursor-pointer hover:bg-gray-200">
      <img
	  alt="Profile"
	  src="https://www.texturesbackgrounds.com/files/large/world-globe-icon.jpg"
	  class="object-cover w-10 h-10 rounded-full"
	/>
	<div class="flex items-center">
	  <p class="hidden ml-2 text-xs text-left sm:block">
	    <strong class="font-medium">Global</strong><br/>
	    <span class="text-gray-500">Join global chat</span>
	  </p>
	</div>
    </div>
    <FriendCard v-for="(data, i) in users" :key="data.id" :data="data" />
  </div>
</section>
</template>

<style>
</style>
