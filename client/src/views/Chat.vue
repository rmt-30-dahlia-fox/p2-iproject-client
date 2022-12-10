<script>
import { mapWritableState, mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/global";
import MessageCard from "../components/MessageCard.vue";
import { getRandomJoke } from "../dad-jokes/dj";

export default {
  components: {
    MessageCard,
  },
  computed: {
    ...mapState(useGlobalStore, ["globalMessages", "userMessages", "users", "inputText"]),
    ...mapWritableState(useGlobalStore, ["inputText"]),
    recipient() {
      return this.users.find(u => u.id === Number(this.$route.params.id));
    },
    globalChat() {
      return this.$route.path === "/global";
    },
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchUserMessages", "sendDirectMessage", "sendGlobalChatMessage", "fetchGlobalMessages"]),
    triggerSendChatMessage() {
      const formData = document.getElementById("form-message");
      if (!this.globalChat) this.sendDirectMessage(formData, this.$route.params.id)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	  }
	  formData.reset();
	  this.inputText = "";
	});

      else this.sendGlobalChatMessage(formData)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	  }
	  formData.reset();
	  this.inputText = "";
	});
    },
    async randomJoke() {
      const res = await getRandomJoke();
      console.log(res.data);
      const str = `${res.data.body[0].setup} ${res.data.body[0].punchline}`;
      this.inputText = str;
    }
  },
  created() {
    if (!this.globalChat) this.fetchUserMessages(this.$route.params.id);
    else this.fetchGlobalMessages();
  },
};
</script>

<template>
  <div id="chat-container" class="flex flex-row flex-grow h-100">
    <div class="flex flex-col flex-grow">
      <div class="text-center">
	<h1 v-if="globalChat" class="text-xl font-bold">Global Chat</h1>
	<h1 v-else class="text-xl font-bold">Chat with {{ recipient.username }}</h1>
      </div>
      <div id="chat-messages" style="height: calc(100vh - 140px);" class="overflow-y-auto border-2 border-solid">
	<MessageCard v-for="(data, i) in (globalChat ? globalMessages : userMessages[$route.params.id])" :key="data.id" :data="data" />
      </div>
      <div>
	<form id="form-message" @submit.prevent="triggerSendChatMessage()" action="" method="POST" enctype="multipart/form-data" class="flex flex-col border-2 border-solid bg-sky-50">
	  <div class="flex items-center flex-grow">
	    <input class="w-full" name="content" type="text" v-model="inputText" placeholder="Write something...">
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
	  <button
	    @click.prevent="randomJoke"
	    class="block px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
	  >Get random joke</button>
	</form>
      </div>
    </div>
  </div>
</template>

<style></style>
