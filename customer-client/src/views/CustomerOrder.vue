<script>
import { mapActions, mapState } from 'pinia';
import OrderCard from '../components/OrderCard.vue';
import { useCustomerStore } from '../stores/customer';
export default {
  components: { OrderCard },
  computed: {
    ...mapState(useCustomerStore, ['orders'])
  }
}
</script>
<template>
  <div class="grid grid-cols-3 gap-12 w-3/4">
    <OrderCard v-for="order in orders" :key="order.id" :order="order"/>
  </div>
</template>