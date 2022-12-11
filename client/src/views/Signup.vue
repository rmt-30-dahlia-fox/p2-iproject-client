<script>
import {mapActions, mapWritableState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ["signupForm"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["signup"]),
    triggerSignup() {
      this.signup()
	.then(route => {
	  if (route) {
	    this.$router.push(route);
	  }
	});
    },
  },
};
</script>

<template>
<section class="bg-white">
  <div class="flex items-center justify-center h-screen">

    <main
      aria-label="Main"
      class="flex items-center justify-center"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <a class="block text-blue-600" href="/">
          <span class="sr-only">Home</span>
	  <img src="/assets/satelit.png" alt="satelit 🛰" style="width: 120px;">
        </a>

        <h1
          class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Signup
        </h1>
	<p class="mt-4 leading-relaxed text-gray-500">
          Signup to Satelit 🛰
	</p>

        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label
              for="Username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
	      v-model="signupForm.username"
              type="text"
              id="Username"
              name="username"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Email"
              class="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
	      v-model="signupForm.email"
              type="email"
              id="Email"
              name="email"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
	      v-model="signupForm.password"
              type="password"
              id="Password"
              name="password"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
	      @click.prevent="triggerSignup()"
              class="inline-block px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 shrink-0 rounded-md transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <router-link to="/login" class="text-gray-700 underline"
                >Log in</router-link
              >.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
</template>

<style></style>
