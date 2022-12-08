<script>
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  methods: {
    navLogin() {
      this.$router.push("/login")
    },
    navHome() {
      this.$router.push("/")
    },
    navDetails() {
      this.$router.push("/user-detail")
    },
    navFavorite() {
      this.$router.push("/favoriteList")
    },
    navArticles() {
      this.$router.push("/news")
    },
    navData() {
      this.$router.push("/covid-table")
    },
    ...mapActions(useCounterStore, ["logout", "fetchUserDetail"]),
  },

  created() {
    if (localStorage.getItem("access_token")) {
      this.loggedIn = true
    }
    this.fetchUserDetail()
  },

  computed: {
    ...mapWritableState(useCounterStore, [
      "loggedIn",
      "userDetail",
      "baseUrl",
      "googleEmail",
    ]),
  },
}
</script>
<template>
  <div class="fixed top-0 w-full z-20 shadow-lg">
    <nav class="bg-white border-gray-200">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a
          class="flex items-center active:scale-95 duration-200 cursor-pointer select-none"
          @click.prevent="navHome">
          <img
            src="../assets/images/logo-medicalinia.jpeg"
            class="h-6 mr-3 sm:h-9"
            alt="Medicalinia Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap"
            >Medicalinia</span
          >
        </a>
        <div class="flex items-center gap-5">
          <h1 class="">Welcome, {{ userDetail.fullName }}</h1>
          <div
            class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-600">
            <img
              v-if="loggedIn"
              :src="`${this.baseUrl}/avatar/${userDetail.profilePict}`"
              alt=""
              class="w-full h-full object-bottom" />
            <svg
              v-else
              class="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <nav class="bg-gray-50">
      <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center justify-between">
          <div class="flex gap-5">
            <a
              @click.prevent="navHome"
              class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              aria-current="page"
              >Home</a
            >
            <a
              @click.prevent="navFavorite"
              class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >Favorites</a
            >
            <a
              @click.prevent="navArticles"
              class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >Articles</a
            >
            <a
              @click.prevent="navData"
              class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >Chart & Data</a
            >
          </div>
          <div class="flex gap-5">
            <a
              @click.prevent="navDetails"
              class="font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >User Details</a
            >
            <a
              v-if="!loggedIn"
              @click.prevent="navLogin"
              class="font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >Login</a
            >
            <a
              v-else
              @click.prevent="logout"
              class="font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
