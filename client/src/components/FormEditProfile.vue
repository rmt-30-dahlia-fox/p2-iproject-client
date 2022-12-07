<script>
import { mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/global";

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ["user"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchUserLogin", "handleEditProfile"]),
    setImageToSend(event) {
      this.user.imageProfile = event.target.files[0];
      console.log(event.target.files[0]);
    },
    submitEditProfile() {
      this.handleEditProfile(this.$route.params.userId)
    }
  },
  created() {
    this.fetchUserLogin(this.$route.params.userId);
  },
};
</script>

<template>
  <!-- Form Edit Profile -->
  <div class="bg-gray-100 p-4">
    <h1 class="text-center font-bold text-xl">Edit Profile</h1>

    <form @submit.prevent="submitEditProfile" class="container max-w-2xl mx-auto my-4 bg-white shadow-md md:w-3/4">
      <div class="space-y-6 bg-white">
        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Email</h2>
          <div class="max-w-sm mx-auto md:w-2/3">
            <div class="relative">
              <input
                v-model="user.email"
                type="text"
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Full Name</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  v-model="user.fullName"
                  type="text"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">City</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  v-model="user.city"
                  type="text"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your domicile"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">Date of Birth</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  v-model="user.dateOfBirth"
                  type="date"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">New Password</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                  v-model="user.password"
                  type="password"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your new password"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div
          class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
        >
          <h2 class="max-w-sm mx-auto md:w-1/3">New Profile Picture</h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class="relative">
                <input
                type="file"
                @change="setImageToSend"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
          <button
            type="submit"
            class="py-2 px-4 bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
