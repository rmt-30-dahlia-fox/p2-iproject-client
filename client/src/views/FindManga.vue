<script >
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import FoundMangaCard from '../components/FoundMangaCard.vue'


export default{
  methods:{
    ...mapActions(useCounterStore,['findManga'])
  },
  created(){
    this.findManga()
  },
  computed :{
    ...mapWritableState(useCounterStore,['foundManga'])
  },
  components :{
    FoundMangaCard
  }
}
</script>

<template>
  <main>
    <h1 class="text-center ">Find Manga</h1>
    <div class="container">
      <div class="row">
        <!-- <pre>{{dataManga}}</pre> -->
        <FoundMangaCard v-for="manga in foundManga" :key="manga.id" :manga="manga" />       

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
