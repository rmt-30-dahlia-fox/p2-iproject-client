<script>
export default {
  methods: {
    triggerChat(id) {
      console.log("triggered");
    }
  },
};
</script>

<template>
    <div @click.prevent="triggerChat(1)" class="flex p-2 pr-6 my-2 rounded-lg cursor-pointer hover:bg-gray-100">
      <img
          alt="Profile"
          src="https://thispersondoesnotexist.com/image"
          class="object-cover w-10 h-10 rounded-full"
        />
	<div class="flex items-center">
	  <p class="hidden ml-2 text-xs text-left sm:block">
	      <strong class="font-medium">Eric Frusciante</strong>
	  </p>
	</div>
    </div>
</template>

<style></style>
