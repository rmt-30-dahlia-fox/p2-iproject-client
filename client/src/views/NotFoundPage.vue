<script>
export default{
  name: "NotFound"
}
</script>

<template>
  <div class="flex flex-col h-screen bg-white">
    <img
      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="" class="object-cover w-full h-64" />

    <div class="flex items-center justify-center flex-1">
      <div class="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We can't find that page.
        </h1>

        <p class="mt-4 text-gray-500">
          Try searching again, or return home to start from the beginning.
        </p>

        <router-link to="/"
          class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:ring">
          Go Back Home
        </router-link>
      </div>
    </div>
  </div>

</template>