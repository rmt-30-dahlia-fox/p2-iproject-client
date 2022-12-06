<script>
import MyProfile from '@/components/MyProfile.vue'
import MyActivities from '@/components/MyActivities.vue'
import FormEditProfile from '@/components/FormEditProfile.vue'

export default {
  components: {
    MyProfile,
    MyActivities,
    FormEditProfile
  }
}
</script>

<template>
  <!-- My Profile Page -->
  <div class="w-screen mx-auto">
    <!-- Navigation -->
    <nav
      class="flex max-w-fit mx-auto border-b border-gray-100 text-sm font-medium"
    >
      <a href="" class="-mb-px border-b border-current p-4 text-teal-500">
        My Activities
      </a>

      <a
        href=""
        class="-mb-px border-b border-transparent p-4 text-gray-500 hover:text-teal-500"
      >
        My Profile
      </a>

      <a
        href=""
        class="-mb-px border-b border-transparent p-4 text-gray-500 hover:text-teal-500"
      >
        Edit Profile
      </a>
    </nav>

    <!-- <MyProfile /> -->

    <!-- <MyActivities /> -->

    <FormEditProfile />

  </div>
</template>
