<script>
export default {}
</script>

<template>
<header aria-label="Page Header" class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="mt-8 flex">
      <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl flex-grow">
        Welcome Back, Barry!
      </h1>
      <router-link to="/profile" class="p-2 shadow bg-white block shrink-0 group flex shrink-0 items-center rounded-full hover:bg-sky-100 transition">
        <img
          alt="Profile"
          src="https://thispersondoesnotexist.com/image"
          class="h-10 w-10 rounded-full object-cover"
        />
	<p class="ml-2 hidden text-left text-xs sm:block">
	  <strong class="block font-medium">Eric Frusciante</strong>

	  <span class="text-gray-500"> eric@frusciante.com </span>
	</p>
      </router-link>

    </div>
  </div>
</header>
</template>

<style></style>
