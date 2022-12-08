<script>
import MyCar from '../components/Profile/MyCar.vue';
import EditProfile from '../components/Profile/EditProfile.vue';
import MyBook from '../components/Profile/MyBook.vue';
import { mapWritableState, mapState } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  components: {
    MyCar,
    EditProfile,
    MyBook
  },
  computed: {
    ...mapWritableState(useGlobalStore, ["profileContent"]),
    ...mapState(useGlobalStore, ["user"])
  },
  methods: {
    switchContent(value){
      this.profileContent = value;
    }
  }
}
</script>

<template>
  <section id="profile-section">

    <div id="profile" class="flex justify-center mb-20 mt-16">
      <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile-photo" class="w-52 rounded-full">
      <div class="profile-detail my-auto ml-10">
        <h1 class="text-2xl font-bold">Profile</h1>
        <p>Name : {{user.firstName}} {{user.lastName}}</p>
        <p>Email : {{user.email}}</p>
        <p>Phone Number: {{user.phoneNumber}}</p>
      </div>
    </div>

    <ul class="flex border-b border-gray-100">
      <li class="flex-1">
        <a @click.prevent="switchContent('my-car')" class="relative block p-4" href="">
          <span v-if="profileContent === 'my-car'" class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>

          <div class="flex items-center justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3097/3097136.png" alt="car-logo"
              class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <span class="ml-3 text-sm font-medium text-gray-900"> My Car </span>
          </div>
        </a>
      </li>

      <li class="flex-1">
        <a @click.prevent="switchContent('edit-profile')" class="relative block p-4" href="">
          <span v-if="profileContent === 'edit-profile'" class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
          <div class="flex items-center justify-center">
            <img src="https://cdn-icons-png.flaticon.com/512/7542/7542244.png" alt="edit-logo"
              class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <span class="ml-3 text-sm font-medium text-gray-900"> Edit Profile </span>
          </div>
        </a>
      </li>

      <li class="flex-1">
        <a @click.prevent="switchContent('my-book')" class="relative block p-4" href="">
          <span v-if="profileContent === 'my-book'" class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
          <div class="flex items-center justify-center">
            <img src="https://cdn-icons-png.flaticon.com/128/2984/2984960.png" alt="booking-logo"
              class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <span class="ml-3 text-sm font-medium text-gray-900"> My Booking </span>
          </div>
        </a>
      </li>
    </ul>

    <MyCar v-if="profileContent === 'my-car'"/>

    <EditProfile v-if="profileContent === 'edit-profile'"/>

    <MyBook v-if="profileContent === 'my-book'"/>

  </section>
</template>