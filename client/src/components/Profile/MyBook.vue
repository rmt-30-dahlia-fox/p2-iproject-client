<script>
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '../../stores/global'
import TransactionCard from './TransactionCard.vue';
export default {
  components: {
    TransactionCard
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchTransaction'])
  },
  computed: {
    ...mapState(useGlobalStore, ['allTransaction'])
  },
  created(){
    this.fetchTransaction("All");
  }
}
</script>

<template>
  <section id="my-booking-section">
    <h1 class="text-2xl font-bold sm:text-3xl text-center my-10">My Booking</h1>
    <TransactionCard v-for="(transaction, index) in allTransaction" :key="index" :transaction="transaction"/>
  </section>
</template>