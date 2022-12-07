<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    props: ['manga'],
    methods: {
        ...mapActions(useCounterStore, ['fetchMangaDetail'])
    }

}

</script>

<template>
    <div class="card mx-3 my-3 d-flex flex-column justify-content-between" style="width: 18rem;">




            <div>
                <img :src="manga.node.main_picture.large" class="card-img-top"
                    style="height: 300px; object-fit:cover;" />
                <div class="card-body text-dark">
                    <h5 class="card-title">{{ manga.node.title }}</h5>
                </div>
            </div>

            <div class="card-body d-flex flex-column justify-content-end gap-2">
                <ul class="list-group list-group-light list-group-small">
                    <li class="list-group-item px-4">Rank : </li>

                </ul>
                <!-- <div class="d-flex flex-row-reverse">
                    <button @click="addFavorite(movie.id)" >Add to Favorite</button>
                </div> -->
                <RouterLink :to="`/mangas/${manga.node.id}`" class="mx-auto">
                    <button class="btn btn-info">See Detail</button>
                </RouterLink>

            </div>
    </div>
</template>

<style scoped>



</style>