<script>
import {mapActions, mapState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  props: ["data"],
  computed: {
    ...mapState(useGlobalStore, ["baseURL"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchUserMessages"]),
    triggerChat(id) {
      this.$router.push("/chat/"+id);
      this.fetchUserMessages(id);
    }
  },
};
</script>

<template>
  <div @click.prevent="triggerChat(data.id)" class="flex p-2 pr-6 my-2 rounded-lg cursor-pointer hover:bg-gray-200">
    <img
	alt="Profile"
	:src="data?.Avatar?.hash ? `${baseURL}/media/${data.Avatar.hash}` : 'https://thispersondoesnotexist.com/image'"
	class="object-cover w-10 h-10 rounded-full"
      />
      <div class="flex items-center">
	<p class="hidden ml-2 text-xs text-left sm:block">
	  <strong class="font-medium">{{ data.username }}</strong><br/>
	  <span class="text-gray-500">{{ data.email }}</span>
	</p>
      </div>
  </div>
</template>

<style></style>
