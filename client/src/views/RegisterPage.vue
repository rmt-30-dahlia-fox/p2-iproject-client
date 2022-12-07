<script>
import { mapActions, mapWritableState } from 'pinia';
import { useGlobalStore } from '../stores/global';

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ['registerForm'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['handleRegister'])
  }
}
</script>

<template>
  <div class="grow bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Let's join HackFit!</h1>
      </div>

      <form
        @submit.prevent="handleRegister"
        class="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label for="password" class="my-2">Full Name</label>
          <div class="relative">
            <input
            v-model="registerForm.fullName"
              type="text"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div>
          <label for="email" class="my-1">Email</label>

          <div class="relative">
            <input
            v-model="registerForm.email"
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="my-2">Password</label>
          <div class="relative">
            <input
            v-model="registerForm.password"
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div class="flex items-center justify-around">
          <button
            type="submit"
            class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
