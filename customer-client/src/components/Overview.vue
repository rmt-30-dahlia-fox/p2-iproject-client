<script>
import { mapActions, mapState } from 'pinia';
import { useCustomerStore } from '../stores/customer';

export default {
  data() {
    return {
      totalPrice: ''
    }
  },
  computed: {
    ...mapState(useCustomerStore, ['orderForm'])
  },
  methods: {
    ...mapActions(useCustomerStore, ['getPrice', 'postOrder'])
  },
  async created() {
    try {
      this.totalPrice = await this.getPrice()
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<template>
  <div class="w-3/4">
    <h1 class="text-3xl font-bold">Order Detail</h1>
    <div class="divider"></div>
    <h2>pickupLocation: {{ orderForm.pickupLocation }}</h2>
    <h2>pickupDate: {{ orderForm.pickupDate }}</h2>
    <h2>pickupTime: {{ orderForm.pickupTime }}</h2>
    <div class="divider"></div>
    <h2>returnLocation: {{ orderForm.returnLocation }}</h2>
    <h2>returnDate: {{ orderForm.returnDate }}</h2>
    <h2>returnTime: {{ orderForm.returnTime }}</h2>
    <h2>totalPrice: {{ totalPrice }}</h2>
    <div class="divider"></div>
    <button
    @click="postOrder"
    class="btn btn-primary"
    :class="(!orderForm.pickupLocation || !orderForm.pickupDate || !orderForm.pickupTime || !orderForm.returnLocation || !orderForm.returnDate || !orderForm.returnTime ? 'btn-disabled' : '')"
    >
      Order
    </button>
  </div>
</template>