<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    computed: {
        ...mapWritableState(useCounterStore, ['mangaDetail'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMangaDetail'])
    },
    created() {  
        this.fetchMangaDetail(this.$route.params.id)
    }
}

</script>
<template>
    <div  class="container ">
        <h1 class="text-center">{{mangaDetail?mangaDetail.title : ""}}</h1>
        <div class="d-flex">
            <div>
                <img :src="mangaDetail?mangaDetail.main_picture.large:''" alt="image here" width="500" />
            </div>

            <div>
                <div class="d-flex justify-content-between">
                    <div class="mx-5 my-3">
                        <h4>Rating : {{mangaDetail?mangaDetail.mean:``}}</h4>                        
                        <h4 style="font-family:Arial, Helvetica, sans-serif;font-weight:bold">Synopsis :</h4>
                        <div><text>{{mangaDetail?mangaDetail.synopsis:``}}</text></div>

                    </div>
                </div>


                <div class="d-flex flex-row-reverse">
                    <!-- <button @click="addFavorite($route.params.id)">Add to Favorite</button> -->
                </div>

            </div>

        </div>
    </div>
</template>