<script>
import FriendCard from './FriendCard.vue';
import Media from "./Media.vue";
import {mapState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  props: ["data"],
  computed: {
    ...mapState(useGlobalStore, ["baseURL"]),
  },
  components: {
    FriendCard,
    Media,
  },
};
</script>

<template>
  <div class="flex flex-col hover:bg-gray-200">
    <div class="flex p-2 rounded-lg">
      <img
	  alt="Profile"
	  :src="data?.users?.Avatar?.hash ? `${baseURL}/media/${data.users.Avatar.hash}` : 'https://thispersondoesnotexist.com/image'"
	  class="object-cover w-10 h-10 rounded-full"
      />
      <div class="flex items-center">
	<p class="hidden ml-2 text-xs text-left sm:block">
	    <strong class="font-medium">{{ data.users.username }}</strong>
	</p>
      </div>
    </div>
    <div class="p-2 rounded-lg">
      <p>
	{{ data.content }}
      </p>
    </div>
  <div v-if="data.MessageAttachments?.[0]?.Medium" class="mx-20 overflow-hidden bg-white border rounded">
    <div class="flex justify-center w-full p-3">
    <Media :data="data.MessageAttachments[0].Medium" />
    </div>
  </div>
</div>
</template>

<style></style>
