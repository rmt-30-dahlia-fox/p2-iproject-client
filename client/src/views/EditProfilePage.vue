<script>
import NavProfile from '@/components/NavProfile.vue'
import FormEditProfile from '@/components/FormEditProfile.vue'

export default {
  components: {
    NavProfile,
    FormEditProfile
  }
}
</script>

<template>
    <div class="w-screen mx-auto">
    <!-- Navigation -->
    <NavProfile />

    <FormEditProfile />
  </div>
</template>