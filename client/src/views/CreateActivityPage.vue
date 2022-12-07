<script>
import TableActivities from '@/components/TableActivities.vue'
import FormAddActivity from '@/components/FormAddActivity.vue'

export default {
  components: {
    TableActivities,
    FormAddActivity
  }
}
</script>

<template>
  <!-- Create Activity Page -->
  <div class="grow container w-xl mx-auto flex flex-col">
    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl my-4 text-center">
      Create New Post
    </h1>

    <TableActivities />

    <FormAddActivity />
  </div>
</template>
