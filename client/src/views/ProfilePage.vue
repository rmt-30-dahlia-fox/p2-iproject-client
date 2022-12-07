<script>
import { mapState, mapActions } from 'pinia';
import { useGlobalStore } from '../stores/global';
import NavProfile from '@/components/NavProfile.vue'
import MyProfile from '@/components/MyProfile.vue'

export default {
  components: {
    NavProfile,
    MyProfile
  },
  computed: {
    ...mapState(useGlobalStore, ['user'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchUserLogin'])
  },
  created() {
    this.fetchUserLogin(this.$route.params.id)
  }
}
</script>

<template>
  <div class="w-screen mx-auto">
    <!-- Navigation -->
    <NavProfile />

    <MyProfile
      :user="user"
    />
    
  </div>
</template>
