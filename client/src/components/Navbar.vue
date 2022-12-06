<script>
export default {}
</script>

<template>
<header aria-label="Page Header" class="mb-4 shadow-lg bg-gray-50">
  <div class="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="flex items-center">
      <h1 class="flex-grow text-2xl font-bold text-gray-900 sm:text-3xl">
        Welcome Back, Barry!
      </h1>
      <router-link to="/profile" class="flex items-center block p-2 bg-white rounded-full shadow shrink-0 group hover:bg-sky-100 transition">
        <img
          alt="Profile"
          src="https://thispersondoesnotexist.com/image"
          class="object-cover w-10 h-10 rounded-full"
        />
	<p class="hidden ml-2 text-xs text-left sm:block">
	  <strong class="block font-medium">Eric Frusciante</strong>

	  <span class="text-gray-500"> eric@frusciante.com </span>
	</p>
      </router-link>

    </div>
  </div>
</header>
</template>

<style></style>
