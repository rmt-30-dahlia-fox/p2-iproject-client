<script>
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '../../stores/global'
export default{
  methods: {
    ...mapActions(useGlobalStore, ["updateProfile"])
  },
  computed: {
    ...mapState(useGlobalStore, ["user"])
  },
  data(){
    return{
      editedData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
      }
    }
  },
  created(){
    this.editedData.firstName = this.user.firstName;
    this.editedData.lastName = this.user.lastName;
    this.editedData.email = this.user.email;
    this.editedData.phoneNumber = this.user.phoneNumber;
  }
}
</script>

<template>
  <section id="edit-profile-form">
    <div class="mt-16 mx-auto max-w-screen-xl px-4 mb-10 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Edit Profile</h1>
      </div>

      <form @submit.prevent="updateProfile(editedData)" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div class="flex justify-between">
          <!-- <label for="firstName" class="sr-only">First Name</label> -->
          <div class="w-10/12 relative">
            <input v-model="editedData.firstName" type="text" class="rounded-lg border-gray-200 p-4 pr-12 text-sm border" placeholder="First Name"
              />
          </div>
          <!-- <label for="lastName" class="sr-only">Last Name</label> -->
          <div class="w-10/12 relative">
            <input v-model="editedData.lastName" type="text" class="rounded-lg border-gray-200 p-4 pr-12 text-sm border" placeholder="Last Name"
              />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative">
            <input v-model="editedData.email" type="email" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
              placeholder="Enter email"/>
          </div>
        </div>

        <div>
          <label for="phoneNumber" class="sr-only">Phone Number</label>
          <div class="relative">
            <input v-model="editedData.phoneNumber" type="phoneNumber" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
              placeholder="Enter Phone Number" />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input v-model="editedData.password" type="password" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
              placeholder="Enter new password" />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input  v-model="editedData.confirmPassword" type="password" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm border"
              placeholder="Confirm new password" />
          </div>
        </div>

        <div class="flex items-center justify-between">

          <button type="submit" class="ml-3 inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>

  </section>
</template>