<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  computed: {
    ...mapWritableState(useGlobalStore, ['isSidebarOpen', 'profileContent']),
    ...mapState(useGlobalStore, ["user"])
  },
  methods: {
    clickHandler(value){
      this.profileContent = value;
      this.$router.push('/profile');
      this.isSidebarOpen = false;
    },
    ...mapActions(useGlobalStore, ['logoutHandler'])
  }
}
</script>

<template>
  <div id="sidebar" class="flex">
    <div @click.prevent="isSidebarOpen = false" class="w-4/5"></div>
    <div style="margin: 0 0 0 auto" class="flex h-screen flex-col justify-between border-r bg-white w-1/5">
      <div class="px-4 py-6">
        <span class="block">
          <img @click.prevent="isSidebarOpen = false" src="https://cdn-icons-png.flaticon.com/512/992/992660.png" alt="close-icon" class="cursor-pointer w-5 h-5 mr-0 ml-auto">
          <img style="margin-bottom: -20px;" src="https://cdn-icons-png.flaticon.com/512/1553/1553980.png"
            alt="CarStore-Logo" class="w-20 object-fit mx-auto">
          <p class="text-center font-bold">CarStore</p>
        </span>

        <div @click.prevent="clickHandler('my-car')" class="cursor-pointer mt-8 border-b border-gray-200">
          <a class="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50">
            <img alt="Man"
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              class="h-10 w-10 rounded-full object-cover" />

            <div class="ml-1.5">
              <p class="text-xs">
                <strong class="block font-medium">{{user.firstName}} {{user.lastName}}</strong>

                <span> {{user.email}} </span>
              </p>
            </div>
          </a>
        </div>
  
        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <a to="/profile"  @click.prevent="clickHandler('my-car')"
            class="cursor-pointer flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <img src="https://cdn-icons-png.flaticon.com/512/3097/3097136.png" alt="car-logo" class="h-5 w-5 opacity-75"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

            <span class="ml-3 text-sm font-medium"> My Car </span>
          </a>
          <a  @click.prevent="clickHandler('edit-profile')"
            class="cursor-pointer flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <img src="https://cdn-icons-png.flaticon.com/512/7542/7542244.png" alt="edit-logo"
              class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

            <span class="ml-3 text-sm font-medium"> Edit Profile </span>
          </a>
          <a  @click.prevent="clickHandler('my-book')"
            class="cursor-pointer flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <img src="https://cdn-icons-png.flaticon.com/128/2984/2984960.png" alt="booking-logo"
              class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

            <span class="ml-3 text-sm font-medium"> My Booking </span>
          </a>
        </nav>
      </div>
  
      <div class="sticky inset-x-0 bottom-0 px-4 mb-5">
        <form @submit.prevent="logoutHandler">
            <button type="submit"
              class="flex w-full items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>

              <span class="ml-3 text-sm font-medium text-red-400"> Logout </span>
            </button>
          </form>
      </div>
    </div>
  </div>
</template>