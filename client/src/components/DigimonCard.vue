<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["digimon", "cart", "history"],
  methods: {
    ...mapActions(useCounterStore, ["deleteCartHandler"]),
  },
};
</script>

<template>
  <div class="col-3" v-if="digimon">
    <RouterLink class="btn btn-warning me-2" :to="`/digimons/${digimon.name}`">
      <div class="card bg-dark text-white h-100">
        <RouterLink class="" :to="`/digimons/${digimon.name}`"
          ><img :src="digimon.img" class="card-img-top mb-3 h-100 d-flex"
        /></RouterLink>

        <h5 class="card-header d-flex">{{ digimon.name }}</h5>
        <div class="card-body">
          <p class="card-text">{{ digimon.level }}</p>
          <p class="card-text">Price: {{ digimon.price }}</p>
        </div>
      </div>
    </RouterLink>
  </div>

  <div class="col-3" v-if="cart">
    <RouterLink class="btn btn-warning me-2" :to="`/digimons/${cart.name}`">
      <div class="card bg-dark text-white h-100">
        <img :src="cart.img" class="card-img-top mb-3 h-100 d-flex" />

        <h5 class="card-header d-flex">{{ cart.name }}</h5>
        <div class="card-body">
          <p class="card-text">{{ cart.level }}</p>
          <p class="card-text">Price: {{ cart.price }}</p>
        </div>
      </div>
    </RouterLink>
    <button
      v-if="cart"
      class="btn btn-danger"
      type="button"
      @click="deleteCartHandler(cart.id)"
    >
      Delete
    </button>
  </div>

  <div class="col-3" v-if="history">
    <RouterLink class="btn btn-warning me-2" :to="`/digimons/${history.name}`">
      <div class="card bg-dark text-white h-100">
        <img :src="history.img" class="card-img-top mb-3 h-100 d-flex" />

        <h5 class="card-header d-flex">{{ history.name }}</h5>
        <div class="card-body">
          <p class="card-text">{{ history.level }}</p>
          <p class="card-text">Price: {{ history.price }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
