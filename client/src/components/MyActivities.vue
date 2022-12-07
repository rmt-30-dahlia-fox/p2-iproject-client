<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/global";
import ActivityCard from '@/components/ActivityCard.vue'

export default {
  components: {
    ActivityCard
  },
  computed: {
    ...mapState(useGlobalStore, ['myActivities'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchActivitiesUser'])
  },
  created() {
    this.fetchActivitiesUser(this.$route.params.userId)
  }
}
</script>

<template>
  <!-- My Activities -->
  <div
    class="flex flex-col gap-4 container my-4 max-w-xl mx-auto justify-around"
  >
    <ActivityCard
      v-for="myActivity in myActivities"
      :key="myActivity.id"
      :myActivity="myActivity"
    />

  </div>
</template>
