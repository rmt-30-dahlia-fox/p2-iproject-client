<script>
import NavProfile from '@/components/NavProfile.vue'
import MyActivities from '@/components/MyActivities.vue'

export default {
  components: {
    NavProfile,
    MyActivities
  }
}
</script>

<template>
  <div class="w-screen mx-auto">
    <!-- Navigation -->
    <NavProfile />

    <MyActivities />

  </div>
</template>