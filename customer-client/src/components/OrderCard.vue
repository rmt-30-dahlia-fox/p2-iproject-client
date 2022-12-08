<script>
import { mapWritableState } from 'pinia';
import { useCustomerStore } from '../stores/customer';

export default {
  props: ['order'],
  data() {
    return {
      pickupDateFormatted: "",
      duration: "",
      returnDateFormatted: ""

    }
  },
  computed: {
    ...mapWritableState(useCustomerStore, ['orderForm']),
  },
  methods: {
    getDuration() {
      this.pickupDateFormatted = new Date(this.order.pickupDate).toLocaleDateString('id-ID')
      this.returnDateFormatted = new Date(this.order.returnDate).toLocaleDateString('id-ID')
    }
  },
  created() {
    this.getDuration()
  }
}
</script>
<template>
  <!-- Card -->
  <div class="flex justify-center mb-8">
    <div class="card w-96 shadow-xl bg-base-100">
      <figure class="px-8 pt-4"><img :src="order.Unit.imageUrl" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ order.Unit.model }}
        </h2>
        <div class="divider"></div>
        <p class="badge badge-warning" v-if="order.status === 'Pending'">Pending</p>
        <p class="badge badge-primary" v-if="order.status === 'Ongoing'">Ongoing</p>
        <p class="badge badge-secondary" v-if="order.status === 'Returned'">Returned</p>
        <p>Pickup Date: {{ pickupDateFormatted }}</p>
        <p>Return Date: {{ returnDateFormatted }}</p>
        <p class="mb-4">Total Price: {{ order.totalPrice }}</p>
        <div class="card-actions center">
          <button class="btn btn-sm btn-wide btn-warning">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>