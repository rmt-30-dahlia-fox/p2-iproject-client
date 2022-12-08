<script>
import { computed } from "@vue/reactivity"
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions(useCounterStore, ["register"]),
    navLogin() {
      this.$router.replace(`/login`)
    },
  },
}
</script>
<template>
  <section class="flex flex-col justify-center items-center h-screen">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
      <form class="space-y-6" @submit.prevent="register({ email, password })">
        <h5 class="text-xl font-medium text-gray-900">Register in to our platform</h5>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
            >Your password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required />
        </div>
        <div class="flex items-start"></div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Register a new Account
        </button>
        <div class="text-sm font-medium text-gray-500">
          Already Registered?
          <a @click.prevent="navLogin" class="text-blue-700 hover:underline">Login!</a>
        </div>
      </form>
    </div>
  </section>
</template>
