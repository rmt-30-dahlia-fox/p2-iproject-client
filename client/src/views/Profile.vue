<script>
import {mapActions, mapState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  computed: {
    ...mapState(useGlobalStore, ["user", "baseURL"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["updateProfile"]),
    triggerPutProfile() {
      const form = document.getElementById("formProfile");
      this.updateProfile(form)
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
        <a @click.prevent="" class="block text-blue-600" >
          <span class="sr-only">Avatar</span>
	  <img :src="user?.Avatar?.hash ? `${baseURL}/media/${user.Avatar.hash}` : 'https://thispersondoesnotexist.com/image'" alt="Avatar" style="width: 120px;">
        </a>

        <h1
          class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Profile
        </h1>
	<p class="mt-4 leading-relaxed text-gray-500">
	  View and update your profile.
	</p>

        <form id="formProfile" action="/profile" enctype="multipart/form-data" method="PUT" class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label
              for="Username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              type="text"
              id="Username"
              name="username"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
	      :value="user.username"
            />
          </div>

          <div class="col-span-6">
            <label
              for="bio"
              class="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>

            <textarea
              id="bio"
              name="bio"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
            >{{ user.bio }}</textarea>
          </div>

          <div class="col-span-6">
            <label
              for="avatar"
              class="block text-sm font-medium text-gray-700"
            >
              Avatar
            </label>

            <input
              type="file"
              id="avatar"
              name="avatar"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
	      accept="image/*"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password (required to update profile)
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              class="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
	      required
            />
          </div>

          <div class="justify-center col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
	      @click.prevent="triggerPutProfile()"
              class="inline-block px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 shrink-0 rounded-md transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Update profile
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

</template>

<style></style>
