<script>
export default {
  methods: {
    triggerLike() {
      console.log("Liked");
    }
  },
};
</script>

<template>
<div class="m-10 overflow-hidden bg-white border rounded">
    <div class="flex justify-between w-full p-3">
      <div class="flex">
        <div class="flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-500 rounded-full">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic">
        </div>
        <span class="pt-1 ml-2 text-sm font-bold">braydoncoyer</span>
      </div>
      <span class="px-2 rounded cursor-pointer hover:bg-gray-300"><i class="pt-2 text-lg fas fa-ellipsis-h"></i></span>
    </div>
    <img class="w-full bg-cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG">
    <div class="px-3 pb-2">
      <div class="pt-2">
	<a
	  class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
	  href="#"
	  @click.prevent="triggerLike(1)"
	>
	  <span class="text-sm font-medium text-gray-400"></span>
	  <span
	    class="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent"
	  >
	    <i class="cursor-pointer far fa-heart"></i>
	    12 likes
	  </span>
	</a>
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
	  <p>
	    Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!
	  </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
