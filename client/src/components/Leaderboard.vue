<script>
import { mapActions, mapState } from 'pinia';
import { useGlobalStore } from '../stores/global';

export default {
  computed: {
    ...mapState(useGlobalStore, ['users'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchUsers'])
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<template>
  <!-- Leaderboard -->
  <div class="col-start-2 col-span-3">
    <div
      class="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow"
    >
      <div class="w-full px-4 py-5 border-b sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Leaderboard
        </h3>
        <p class="max-w-2xl mt-1 text-sm text-gray-500">
          Around the world.
        </p>
      </div>

      <ul class="flex flex-col divide-y divide w-full">

        <li v-for="user in users" :key="user.id" class="flex flex-row">
          <div class="flex items-center justify-around flex-1 p-4 cursor-pointer select-none">
            <div
              class="flex flex-col items-center justify-center w-10 h-10 mr-4"
            >
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  :src="user.imageProfile"
                  class="mx-auto object-cover rounded-full h-10 w-10"
                />
              </a>
            </div>
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">{{ user.fullName }}</div>
              <div class="text-sm text-gray-600">{{ user.Badge.name }}</div>
            </div>
            <div class="text-sm text-gray-600">{{ user.star }}</div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
