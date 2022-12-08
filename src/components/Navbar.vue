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
    ...mapActions(useCounterStore, ["logout", "fetchUserDetail"]),
  },

  created() {
    if (localStorage.getItem("access_token")) {
      this.loggedIn = true
    }
    this.fetchUserDetail()
    console.log(this.baseUrl)
  },

  computed: {
    ...mapWritableState(useCounterStore, ["loggedIn", "userDetail", "baseUrl"]),
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
          <div >
            <img :src="(baseUrl/avatar/userDetail.profilePict)" class="w-full h-full"/>
          </div>
          <a
            @click.prevent="navDetails"
            class="text-sm font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
            >User Details</a
          >
          <a
            v-if="!loggedIn"
            @click.prevent="navLogin"
            class="text-sm font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
            >Login</a
          >
          <a
            v-else
            @click.prevent="logout"
            class="text-sm font-medium text-blue-600 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
            >Logout</a
          >
        </div>
      </div>
    </nav>
    <nav class="bg-gray-50">
      <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <a
                @click.prevent="navHome"
                class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                @click.prevent="navFavorite"
                class="text-gray-900 hover:underline active:scale-95 duration-200 cursor-pointer select-none"
                >Favorites</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
