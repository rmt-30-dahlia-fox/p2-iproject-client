<script>
import ActivityCard from '@/components/ActivityCard.vue'

export default {
  components: {
    ActivityCard
  }
}
</script>

<template>
  <!-- My Activities -->
  <div
    class="flex flex-col gap-4 container my-4 max-w-xl mx-auto justify-around"
  >
    <ActivityCard />
    <ActivityCard />
    <ActivityCard />

  </div>
</template>
