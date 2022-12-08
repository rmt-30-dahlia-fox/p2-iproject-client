<script>
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '../../stores/global'
export default{
  computed: {
    ...mapState(useGlobalStore, ["brands"])
  },
  data(){
    return{
      filterBrand: "",
      priceCategory: 0
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchProducts"])
  },
  watch: {
    filterBrand(newValue, oldValue) {
      this.fetchProducts({brand: this.filterBrand, price: this.priceCategory})
    },
    priceCategory(newValue, oldValue) {
      this.fetchProducts({brand: this.filterBrand, price: this.priceCategory})
    }
  },
}
</script>

<template>
  <div class="flex gap-8 pt-8 items-center">
    <label for="filterBrand">Brand:</label>
    <select v-model="filterBrand" id="filterBrand" class="h-10 py-2 px-6 text-sm border-gray-300 border-b rounded">
        <option value="">All</option>
        <option v-for="(brand, index) in brands" :key="index" :value="brand">{{brand}}</option>
    </select>
    <label for="filterPrice">Price:</label>
    <select v-model="priceCategory" id="filterPrice" class="h-10 py-2 px-6 text-sm border-gray-300 border-b rounded">
        <option value="0">All</option>
        <option value="1">0 - 250 mio.</option>
        <option value="2">250 mio. - 500 mio.</option>
        <option value="3">500 mio. - 750 mio.</option>
        <option value="4"> > 750 mio.</option>
    </select>
  </div>
</template>