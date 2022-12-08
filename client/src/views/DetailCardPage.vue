<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchDetailCard", "addCartHandler"]),
  },

  computed: {
    ...mapWritableState(useCounterStore, ["card"]),
  },

  created() {
    this.fetchDetailCard(this.$route.params.name);
  },
};
</script>

<template>
  <div class="card bg-dark text-white col-6 mx-auto col-sm-4">
    <img :src="card.img" class="card-img-top mb-3 d-flex" width="100" />
    <h5 class="card-header d-flex">{{ card.name }}</h5>
    <div class="card-body">
      <p class="card-text">Level: {{ card.level }}</p>
      <p class="card-text">Price: {{ card.price }}</p>

      <button @click="addCartHandler(card)" class="btn btn-info ms-3">
        Add to Cart
      </button>
    </div>
  </div>
</template>
