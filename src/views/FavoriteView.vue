<script>
import { mapActions, mapState, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"
import FavoriteCard from "../components/FavoriteCard.vue"

export default {
  components: {
    FavoriteCard
},
  methods: {
    ...mapActions(useCounterStore, ["fetchFavorite"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["favoriteList", "favorite"]),
  },
  created() {
    this.fetchFavorite()
  },
}
</script>
<template>
  <div class="container mt-32 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">Your Favorite</h2>

      <div class="grid lg:grid-cols-3 gap-6">
        <FavoriteCard
          v-for="favorite in favoriteList"
          :key="favorite.id"
          :favorite="favorite" />
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>
