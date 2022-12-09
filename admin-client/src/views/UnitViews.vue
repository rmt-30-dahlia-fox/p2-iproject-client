<script>
import { mapState, mapActions } from 'pinia'
import { useAdminStore } from '../stores/admin';
import UnitTableRow from '../components/UnitTableRow.vue';
export default {
  components: { UnitTableRow },
  computed: {
    ...mapState(useAdminStore, ['units'])
  },
  methods: {
    ...mapActions(useAdminStore, ['getUnitById'])
  }
}
</script>

<template>
  <div class="overflow-x-auto max-w-screen-xl shadow-lg mx-auto">
    <table class="table w-full">
      <thead>
        <tr class="text-center">
          <th>Model Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Price / day</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <UnitTableRow v-for="unit in units" :key="unit.id" :unit="unit"/>
      </tbody>
    </table>
  </div>
</template>
