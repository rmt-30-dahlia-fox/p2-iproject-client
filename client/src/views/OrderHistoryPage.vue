<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DigimonCard from "../components/DigimonCard.vue";

export default {
  components: {
    DigimonCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchOrderHistory"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["histories", "totalPrice"]),
  },
  created() {
    this.fetchOrderHistory();
  },
};
</script>

<template>
  <div class="container px-4 px-lg-5 mt-4">
    <h1 class="text-center mb-4">My Order History</h1>
    <div
      class="row row-cols-1 row-cols-md-3 justify-content-center gx-4 gx-lg-5"
    >
      <DigimonCard
        v-for="history in histories"
        :key="history.id"
        :history="history"
      />
    </div>

    <br />
    <br />
    <h3>Total price: {{ totalPrice }}</h3>
  </div>
</template>
