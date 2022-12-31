<script >
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import RankedMangaCard from '../components/RankedMangaCard.vue'


export default {
  methods: {
    ...mapActions(useCounterStore, ['fetchMangaList'])
  },
  created() {
    this.fetchMangaList()
  },
  computed: {
    ...mapWritableState(useCounterStore, ['dataManga', 'currentPage','loading'])
  },
  components: {
    RankedMangaCard
  }
}
</script>

<template>


  
  <main v-if="!loading">
    <h1 class="text-center mt-2">Top Manga</h1>
    <div class="container mt-2">
      <div class="mt-2 row row-cols-2 g-2 g-lg-3 row-cols-lg-5">
        <RankedMangaCard v-for="manga in dataManga" :key="manga.ranking.rank" :manga="manga" />

      </div>
    </div>
    <div class="d-flex justify-content-center">
      <vue-awesome-paginate :total-items="1000" :items-per-page="20" :max-pages-shown="8" v-model="currentPage"
        @click="fetchMangaList" />
    </div>
  </main>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid black;
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: black;
  color: white;
}

.active-page:hover {
  background-color: black;
}
</style>
