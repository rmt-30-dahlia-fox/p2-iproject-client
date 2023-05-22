<script>
import { mapWritableState } from 'pinia';
import { useCustomerStore } from '../stores/customer';

export default {
  props: ['unit'],
  computed: {
    ...mapWritableState(useCustomerStore, ['orderForm'])
  },
  methods: {
    selectUnit() {
      this.orderForm.UnitId = this.unit.id
    }
  }
}
</script>
<template>
  <!-- Card -->
  <div class="flex justify-center mb-8">
    <div class="card w-96 shadow-xl" :class="(orderForm.UnitId === unit.id) ? 'bg-primary' : 'bg-base-100'">
      <figure class="px-8 pt-4"><img :src="unit.imageUrl" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ unit.model }}
        </h2>
        <p class="mb-4">{{ unit.price }} / day</p>
        <div class="card-actions center">
          <button class="btn btn-sm btn-wide" @click="selectUnit"
            :class="(orderForm.UnitId === unit.id) ? 'btn-disabled' : 'btn-primary'">Select Unit</button>
        </div>
      </div>
    </div>
  </div>
</template>