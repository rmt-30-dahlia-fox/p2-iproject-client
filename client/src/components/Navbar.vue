<script>
import {mapActions, mapWritableState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ["socket", "user", "baseURL", "globalMessages"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["logout", "startSocket", "fetchUsers"]),
    triggerLogout() {
      this.logout()
	.then(route => {
	  if (route) {
	    this.$router.push(route);
	  }
	});
    },
  },
  created() {
  },
  created() {
    const access_token = localStorage.getItem("access_token");
    let user = localStorage.getItem("user");
    if (!this.user && user?.length) {
      user = JSON.parse(user);
      this.user = user;
    }

    if (access_token) {
      this.fetchUsers();
      if (user && !this.socket) {
	this.startSocket();
      }
    }
  },
};
</script>

<template>
<header v-if="user" aria-label="Page Header" class="mb-4 shadow-lg bg-gray-50">
  <div class="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="flex items-center">
      <router-link class="flex flex-row items-center flex-grow" to="/">
	<img src="/assets/satelit.png" alt="satelit 🛰" style="width: 120px;">
	<h1 class="m-4 text-2xl font-bold text-gray-900 sm:text-3xl">
	  Satelit 🛰
	</h1>
      </router-link>
      <router-link to="/profile" class="flex items-center block p-2 bg-white rounded-full shadow shrink-0 group hover:bg-sky-100 transition">
        <img
          alt="Profile"
          :src="user.Avatar?.hash ? `${baseURL}/media/${user.Avatar.hash}` : 'https://thispersondoesnotexist.com/image'"
          class="object-cover w-10 h-10 rounded-full"
        />
	<p class="hidden ml-2 text-xs text-left sm:block">
	  <strong class="block font-medium">{{ user.username }}</strong>

	  <span class="text-gray-500">{{ user.email }}</span>
	</p>
      </router-link>
      <button
	class="block px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
	@click.prevent="triggerLogout()"
      >Logout</button>

    </div>
  </div>
</header>
</template>

<style></style>
