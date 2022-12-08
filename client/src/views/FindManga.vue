<script >
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import MangaCard from '../components/MangaCard.vue'


export default{
  methods:{
    ...mapActions(useCounterStore,['findManga'])
  },
  created(){
    if(this.search.length<3 || !this.search){
        this.$router.push('/')
    }else{
        this.findManga()
    }
  },
  computed :{
    ...mapWritableState(useCounterStore,['foundManga','search'])
  },
  components :{
    MangaCard
  }
}
</script>

<template>
  <main>
    <h1 class="text-center ">Find Manga</h1>
    <div class="container">
      <div class="row">
        <!-- <pre>{{dataManga}}</pre> -->
        <MangaCard v-for="manga in foundManga" :key="manga.id" :manga="manga" />       

      </div>
    </div>      
  </main>
</template>
