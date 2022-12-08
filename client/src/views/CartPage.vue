<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DigimonCard from "../components/DigimonCard.vue";

export default {
  components: {
    DigimonCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCart", "addOrderHandler"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["carts", "totalPrice"]),
  },
  created() {
    this.totalPrice = 0;
    this.fetchCart();
  },
};
</script>

<template>
  <div class="container px-4 px-lg-5 mt-4">
    <h1 class="text-center mb-4">My Shopping Cart</h1>
    <div
      class="row row-cols-1 row-cols-md-3 justify-content-center gx-4 gx-lg-5"
    >
      <DigimonCard v-for="cart in carts" :key="cart.id" :cart="cart" />
    </div>

    <br />
    <br />
    <h3>Total price: {{ totalPrice }}</h3>
    <button
      class="btn btn-info"
      type="button"
      @click="addOrderHandler(cart.id)"
    >
      Pay
    </button>
  </div>
</template>
