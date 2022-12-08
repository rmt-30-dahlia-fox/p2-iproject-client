<script>
import { mapActions, mapState, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"
import NewsCard from "../components/NewsCard.vue"

export default {
  components: {
    NewsCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchNewsData"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["newsList", "news"]),
  },
  created() {
    this.fetchNewsData()
  },
}
</script>
<template>
  <div class="container mt-32 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">Latest articles</h2>

      <div class="grid lg:grid-cols-3 gap-6">
        <NewsCard v-for="news in newsList" :key="news.title" :news="news" />
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>
