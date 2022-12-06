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
      <router-link to="/profile" class="block shrink-0">
        <span class="sr-only">Profile</span>
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-10 w-10 rounded-full object-cover"
        />
      </router-link>

    </div>
  </div>
</header>
</template>

<style></style>
