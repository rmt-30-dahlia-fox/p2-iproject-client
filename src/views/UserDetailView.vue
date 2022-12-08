<script>
import axios from "axios"
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  data() {
    return {
      avatar: "",
      baseUrl: "http://localhost:3000",
      fullName: "",
      gender:"",
      telephone: "",
      address: ""
    }
  },
  methods: {
    uploadFile(event) {
      console.log(event.target.files[0])
      this.avatar = event.target.files[0]
    },
    async handleSubmit() {
      try {
        const fd = new FormData()
        fd.append("avatar", this.avatar)
        fd.append("fullName", this.fullName)
        fd.append("gender", this.gender)
        fd.append("telephone", this.telephone)
        fd.append("address", this.address)

        await axios({
          method: "PUT",
          url: `${this.baseUrl}/user-detail`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: fd,
        })
      } catch (error) {
        console.log(error)
      }
    },

    ...mapActions(useCounterStore, ["fetchUserDetail"])
  },
  computed:{
    ...mapWritableState(useCounterStore, ["userDetail"])
  },
  created(){
    this.fetchUserDetail()
  }
}
</script>

<template>
  <section class="userDetails mt-40 container mx-auto max-w-2xl">
    <h1 class="text-center my-5 font-semibold text-xl">Update your Profile</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Full Name</label
        >
        <input
          type="text"
          id="name"
          v-model="userDetail.fullName"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Max Mustermann"
          required />
      </div>
      <div class="mb-6">
        <label
          for="gender"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Gender</label
        >
        <input
          type="text"
          id="gender"
          v-model="userDetail.gender"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required />
      </div>
      <div class="mb-6">
        <label
          for="telephone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Phone Number</label
        >
        <input
          type="number"
          id="telephone"
          v-model="userDetail.telephone"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required />
      </div>
      <div class="mb-6">
        <label
          for="address"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Address</label
        >
        <input
          type="text"
          id="address"
          v-model="userDetail.address"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required />
      </div>
      <label class="block mb-2 text-sm font-medium text-gray-900" for="user_avatar"
        >Profile Picture</label
      >
      <input
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
        aria-describedby="user_avatar_help"
        @change="uploadFile"
        id="user_avatar"
        type="file"
        single />
      <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">
        A profile picture is useful to confirm your are logged into your account
      </div>
      <button type="submit" class="bg-amber-200 rounded-sm text-sky-900 font-semibold py-2 px-5 border mt-5 mx-auto block">Update Profile!</button>
    </form>
  </section>
</template>
