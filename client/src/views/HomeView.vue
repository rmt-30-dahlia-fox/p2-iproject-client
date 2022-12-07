<script >
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import MangaCard from '../components/MangaCard.vue'


export default{
  methods:{
    ...mapActions(useCounterStore,['fetchMangaList'])
  },
  created(){
    this.fetchMangaList()
  },
  computed :{
    ...mapWritableState(useCounterStore,['dataManga'])
  },
  components :{
    MangaCard
  }
}
</script>

<template>
  <main>
    <h1 class="text-center ">Top Manga</h1>
    <div class="container">
      <div class="row">
        <!-- <pre>{{dataManga}}</pre> -->
        <MangaCard v-for="manga in dataManga" :key="manga.ranking.rank" :manga="manga" />       

      </div>
    </div>
        <!-- <div class="d-flex justify-content-center">
          <vue-awesome-paginate
         :total-items="totalMovie" 
         :items-per-page="8" 
         :max-pages-shown="8" 
         v-model="currentPage" 
         @click="fetchMovies" />
        </div> -->
  </main>
</template>
