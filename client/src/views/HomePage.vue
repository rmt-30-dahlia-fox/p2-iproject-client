<script></script>

<template>
  <!-- Home Page -->
  <header aria-label="Page Header">
    <div
      class="mx-auto container max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-center sm:text-left">
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, Barry!
          </h1>

          <div>
            <div class="my-2">
              <h2 class="font-medium">Badge - 50 / 100 Stars</h2>
              <div class="mt-2 overflow-hidden rounded-full bg-gray-200">
                <div class="h-2 w-2/3 rounded-full bg-teal-500"></div>
              </div>
            </div>
          </div>

          <h2 class="mt-4">Let's get fit and share it to your friends! 🎉</h2>
        </div>

        <div
          class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center"
        >
          <button
            class="block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring"
            type="button"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Activities Cards -->
  <div
    class="flex flex-col gap-4 container max-w-xl my-4 mx-auto justify-center"
  >
    <article class="rounded-xl border-2 border-gray-100 bg-white">
      <div class="flex items-start p-6 justify-between">
        <a href="#" class="block shrink-0">
          <img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="h-14 w-14 rounded-lg object-cover"
          />
        </a>

        <div class="ml-4 grow">
          <h3 class="font-medium sm:text-lg">
            <a href="#" class="hover:underline"> John Doe </a>
          </h3>

          <p class="text-sm text-gray-700 line-clamp-2">Time - City</p>
        </div>

        <div class="flex cursor-pointer items-center justify-center">
          <img src="./assets/heart-no-fill.png" width="36" height="36" alt="" />
          <img src="./assets/heart-fill.png" width="36" height="36" alt="" />
        </div>
      </div>

      <a href="#" class="px-6 block">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="h-96 w-full object-cover"
        />

        <h3 class="mt-4 text-xl font-bold text-gray-900">
          Activity Name
          <span
            class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
          >
            Type
          </span>
        </h3>

        <p class="mt-2 max-w-sm text-gray-700">Caption</p>
      </a>

      <div class="flex justify-end">
        <strong
          class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
        >
          <span class="text-[10px] font-medium sm:text-xs">Difficulty</span>
        </strong>
      </div>
    </article>

    <article class="rounded-xl border-2 border-gray-100 bg-white">
      <div class="flex items-start p-6 justify-between">
        <a href="#" class="block shrink-0">
          <img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="h-14 w-14 rounded-lg object-cover"
          />
        </a>

        <div class="ml-4 grow">
          <h3 class="font-medium sm:text-lg">
            <a href="#" class="hover:underline"> John Doe </a>
          </h3>

          <p class="text-sm text-gray-700 line-clamp-2">Time - City</p>
        </div>

        <div class="flex cursor-pointer items-center justify-center">
          <img src="./assets/heart-no-fill.png" width="36" height="36" alt="" />
          <img src="./assets/heart-fill.png" width="36" height="36" alt="" />
        </div>
      </div>

      <a href="#" class="px-6 block">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="h-96 w-full object-cover"
        />

        <h3 class="mt-4 text-xl font-bold text-gray-900">
          Activity Name
          <span
            class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
          >
            Type
          </span>
        </h3>

        <p class="mt-2 max-w-sm text-gray-700">Caption</p>
      </a>

      <div class="flex justify-end">
        <strong
          class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
        >
          <span class="text-[10px] font-medium sm:text-xs">Difficulty</span>
        </strong>
      </div>
    </article>

    <article class="rounded-xl border-2 border-gray-100 bg-white">
      <div class="flex items-start p-6 justify-between">
        <a href="#" class="block shrink-0">
          <img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="h-14 w-14 rounded-lg object-cover"
          />
        </a>

        <div class="ml-4 grow">
          <h3 class="font-medium sm:text-lg">
            <a href="#" class="hover:underline"> John Doe </a>
          </h3>

          <p class="text-sm text-gray-700 line-clamp-2">Time - City</p>
        </div>

        <div class="flex cursor-pointer items-center justify-center">
          <img src="./assets/heart-no-fill.png" width="36" height="36" alt="" />
          <img src="./assets/heart-fill.png" width="36" height="36" alt="" />
        </div>
      </div>

      <a href="#" class="px-6 block">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="h-96 w-full object-cover"
        />

        <h3 class="mt-4 text-xl font-bold text-gray-900">
          Activity Name
          <span
            class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
          >
            Type
          </span>
        </h3>

        <p class="mt-2 max-w-sm text-gray-700">Caption</p>
      </a>

      <div class="flex justify-end">
        <strong
          class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
        >
          <span class="text-[10px] font-medium sm:text-xs">Difficulty</span>
        </strong>
      </div>
    </article>
  </div>
</template>
