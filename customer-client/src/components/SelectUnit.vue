<script>
import { mapWritableState, mapState } from 'pinia';
import { useCustomerStore } from '../stores/customer';
import UnitCard from '../components/UnitCard.vue'
export default {
  computed: {
    ...mapWritableState(useCustomerStore, ['orderForm']),
    ...mapState(useCustomerStore, ['units'])
  },
  components: {
    UnitCard
  }
}
</script>
<template>
  <!-- Card Container -->
  <div class="grid grid-cols-3 gap-12 w-3/4">
    <UnitCard v-for="unit in units" :key="unit.id" :unit="unit" />
  </div>
</template>