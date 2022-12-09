<script>
export default {
  data() {
    return {
      active: 'border-current text-teal-500',
      pasive: 'border-transparent text-gray-500 hover:text-teal-500',
      profileClass: '',
      editClass: ''
    }
  },
  methods: {
    clickProfile() {
      this.profileClass = this.active
      this.editClass = this.pasive
    },
    clickEdit() {
      this.profileClass = this.pasive
      this.editClass = this.active
    }
  },
  created() {
    if(this.$route.name == 'ProfilePage') {
      this.clickProfile()
    } else if (this.$route.name == 'EditProfilePage') {
      this.clickEdit()
    }
  }
}
</script>

<template>
  <nav
    class="flex max-w-fit mx-auto border-b border-gray-100 text-sm font-medium"
  >
    <router-link
      @click.prevent="clickProfile"
      :to="`/profile/${this.$route.params.userId}`"
      :class="`-mb-px border-b p-4 ${profileClass}`"
    >
      My Profile
    </router-link>

    <router-link
    @click.prevent="clickEdit"
    :to="`/profile/${this.$route.params.userId}/edit-profile`"
      :class="`-mb-px border-b p-4 ${editClass}`"
    >
      Edit Profile
    </router-link>
  </nav>
</template>
