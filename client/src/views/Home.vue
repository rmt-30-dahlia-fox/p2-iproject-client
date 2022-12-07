<script>
import {mapActions, mapState} from "pinia";
import PostCard from "../components/PostCard.vue";
import {useGlobalStore} from "../stores/global";

export default {
  components: {
    PostCard,
  },
  computed: {
    ...mapState(useGlobalStore, ["posts"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchPosts"]),
    triggerNewPost() {
      const form = document.getElementById("form-new-post");
      this.newPost(form)
	.then(route => {
	  if (route) {
	    this.$route.push(route);
	    form.reset();
	  }
	});
    },
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<template>
  <div id="home-posts" class="flex-grow">
    <div id="new-post">
      <form action="/posts" method="POST" id="form-new-post" @submit.prevent="triggerNewPost" class="flex items-center justify-center" enctype="multipart/form-data">
	<textarea class="rounded-lg shadow" name="content" placeholder="What's on your mind?" cols="30" rows="10"></textarea>
	<div class="flex-col ">
	  <div
	    class="m-4"
	  >
	    <label for="attachment">Add an attachment:</label>
	    <input
	      class="px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
	      id="attachment"
	      name="attachment"
	      type="file"
	      accept="image/*, video/*, audio/*"
	    >
	  </div>
	  <input
	    class="block px-5 py-3 m-4 text-sm font-medium text-white bg-indigo-600 rounded-lg cursor-pointer transition hover:bg-indigo-700 focus:outline-none focus:ring"
	    type="submit" value="Create Post"
	  >
	</div>
      </form>
    </div>
    <div id="timeline" class="">
      <PostCard v-for="(data, i) in posts" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<style></style>
