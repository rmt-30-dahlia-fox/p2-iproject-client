<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/global";
import MessageCard from "../components/MessageCard.vue";

export default {
  components: {
    MessageCard,
  },
  computed: {
    ...mapState(useGlobalStore, ["userMessages", "users"]),
    recipient() {
      return this.users.find(u => u.id === Number(this.$route.params.id));
    },
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchUserMessages", "sendDirectMessage"]),
    triggerSendChatMessage() {
      const formData = document.getElementById("form-message");
      this.sendDirectMessage(formData, this.$route.params.id)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	  }
	  formData.reset();
	});
    },
  },
  created() {
    this.fetchUserMessages(this.$route.params.id);
  },
};
</script>

<template>
  <div v-if="recipient" id="chat-container" class="flex flex-row flex-grow h-100">
    <div class="flex flex-col flex-grow">
      <div class="text-center">
	<h1 class="text-xl font-bold">Chat with {{ recipient.username }}</h1>
      </div>
      <div id="chat-messages" style="height: calc(100vh - 140px);" class="overflow-y-auto border-2 border-solid">
	<MessageCard v-for="(data, i) in userMessages[$route.params.id]" :key="data.id" :data="data" />
      </div>
      <div>
	<form id="form-message" @submit.prevent="triggerSendChatMessage()" action="" method="POST" enctype="multipart/form-data" class="flex flex-col border-2 border-solid bg-sky-50">
	  <div class="flex items-center flex-grow">
	    <input class="w-full" name="content" type="text" placeholder="Write something...">
	    <div>
	      <input
		class="block px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
		type="submit" value="Send"
	      >
	    </div>
	  </div>
	  <div class="flex">
	    <div class="flex items-center">
	      <label class="mr-4" for="attachment">Add an attachment:</label>
	      <input type="file" id="attachment" name="attachment" accept="audio/*, video/*, image/*">
	    </div>
	  </div>
	</form>
      </div>
    </div>
  </div>
</template>

<style></style>
