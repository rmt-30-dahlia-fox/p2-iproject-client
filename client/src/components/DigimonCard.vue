<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["digimon"],
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
          <p class="card-text">Price:</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
