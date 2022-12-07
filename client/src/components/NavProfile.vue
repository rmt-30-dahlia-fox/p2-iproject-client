<script>
</script>

<template>
  <nav
    class="flex max-w-fit mx-auto border-b border-gray-100 text-sm font-medium"
  >
    <router-link
      :to="`/profile/${this.$route.params.userId}`"
      class="-mb-px border-b border-current p-4 text-teal-500"
    >
      My Profile
    </router-link>

    <router-link
      :to="`/profile/${this.$route.params.userId}/activities`"
      class="-mb-px border-b border-transparent p-4 text-gray-500 hover:text-teal-500"
    >
      My Activities
    </router-link>

    <router-link
    :to="`/profile/${this.$route.params.userId}/edit-profile`"
      class="-mb-px border-b border-transparent p-4 text-gray-500 hover:text-teal-500"
    >
      Edit Profile
    </router-link>
  </nav>
</template>
