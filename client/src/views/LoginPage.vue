<script>
import { mapActions } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      passwordDisplay: "password"
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['loginHandler', 'handleCredentialResponse']),
    hideFunction() {
      if (this.passwordDisplay === "password") {
        this.passwordDisplay = "text";
      }
      else {
        this.passwordDisplay = "password"
      }
    }
  }
}
</script>

<template>
  <section id="login-section">

    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg bg-white p-6 rounded-md">
        <h1 class="text-center text-2xl font-bold sm:text-3xl">
          Log In
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          Sign in to unlock more features!
        </p>

        <form @submit.prevent="loginHandler(login)" class="mt-6 mb-0 space-y-4 p-8">
          <p class="text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" class="text-sm font-medium">Email</label>

            <div class="relative mt-1">
              <input v-model="login.email" type="email" id="email"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
              <input v-model="login.password" :type="passwordDisplay" id="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />

              <span @click.prevent="hideFunction" class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>
          </div>

          <button type="submit" class="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
            Sign in
          </button>

          <p class="text-center text-sm text-gray-500">
            Don't have an account?
            <router-link to="/register" class="underline" href="">Sign up</router-link>
          </p>
        </form>
        <div id="google-button">
          <GoogleLogin :callback="handleCredentialResponse" id="google-sign-in-button"/>
        </div>
      </div>
    </div>

  </section>
</template>