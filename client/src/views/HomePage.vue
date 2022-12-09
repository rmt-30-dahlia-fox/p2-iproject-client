<script>
import DigimonList from "../components/DigimonList.vue";
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    DigimonList,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchDigimon"]),
    searchDigi() {
      this.fetchDigimon();
    },
  },

  computed: {
    ...mapWritableState(useCounterStore, ["levels", "levelSort", "search"]),
  },
  created() {
    this.fetchDigimon();
  },
};
</script>

<template>
  <div class="pb-5">
    <h3 class="text-end pe-5">All price in USD</h3>
    <div class="text-start col-2 ps-5">
      <form @submit.prevent="searchDigi" class="w-5/6">
        <span class="border border-gray-300 rounded-md py-3">
          <input
            v-model="search"
            type="text"
            class="p-2 inline-block w-4/6 ml-0 me-auto"
            placeholder="Input Digimon Name"
          />
        </span>
        <button class="bg-warning px-8 py-2 rounded-md ml-8 text-black text-xl">
          Search
        </button>
      </form>
      <select
        v-model="levelSort"
        id="SortBy"
        class="form-select-sm mb-3"
        v-on:change="fetchDigimon"
      >
        <option value="">All</option>
        <option value="In Training">In Training</option>
        <option value="Fresh">Fresh</option>
        <option value="Rookie">Rookie</option>
        <option value="Armor">Armor</option>
        <option value="Champion">Champion</option>
        <option value="Ultimate">Ultimate</option>
        <option value="Mega">Mega</option>
      </select>
    </div>
    <DigimonList />
  </div>
</template>
