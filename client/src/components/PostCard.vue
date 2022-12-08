<script>
import Media from './Media.vue';
import { mapWritableState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/global.js";

export default {
  props: ["data"],
  computed: {
    ...mapWritableState(useGlobalStore, ["baseURL"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["likePost"]),
    triggerLike(id) {
      this.likePost(id)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	  }
	});
    },
    triggerShare(id) {
      this.sharePost(id)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	  }
	});
    }
  },
  components: { Media }
};
</script>

<template>
<div class="m-10 overflow-hidden bg-white border rounded">
    <div class="flex justify-between w-full p-3">
      <div class="flex">
        <div class="flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-500 rounded-full">
          <img
	    :src="data?.users?.Avatar?.hash ? `${baseURL}/media/${data.users.Avatar.hash}` : 'https://thispersondoesnotexist.com/image'"
	    alt="profilepic"
	  >
        </div>
        <span class="pt-1 ml-2 text-sm font-bold">{{ data.users.username }}</span>
      </div>
      <span class="px-2 rounded cursor-pointer hover:bg-gray-300"><i class="pt-2 text-lg fas fa-ellipsis-h"></i></span>
    </div>
    <div class="flex justify-center">
    	
      <Media v-if="data.PostAttachments?.[0]?.Medium" :data="data.PostAttachments[0].Medium"/>
    </div>
    <div class="px-3 pb-2">
      <div class="pt-2 flex justify-end">
	<a
	  class="inline-block mr-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
	  href="#"
	  @click.prevent="triggerLike(data.id)"
	>
	  <span
	    class="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent"
	  >
	    <i class="cursor-pointer far fa-heart"></i>
	    {{ data.likeCount || 0 }} likes
	  </span>
	</a>
	<a
	  class="inline-block rounded-full bg-sky-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
	  href="#"
	  @click.prevent="triggerLike(1)"
	>
	  <span
	    class="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent"
	  >
	    <i class="cursor-pointer far fa-heart"></i>
	    Share
	  </span>
	</a>
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
	  <p>
	    {{ data.content }}
	  </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
