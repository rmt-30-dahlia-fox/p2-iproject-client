<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    props: ['manga'],
    methods: {
        ...mapActions(useCounterStore, [''])
    }

}

</script>

<template>
    <div class="card mx-3 my-3 d-flex flex-column justify-content-between" style="width: 18rem;">


        <div>
            <img :src="manga.node.main_picture.large" class="card-img-top" style="height: 300px; object-fit:cover;" />
            <div class="card-body text-dark text-center">
                <h5 class="card-title">{{ manga.node.title }}</h5>
            </div>
        </div>

        <div class="card-body d-flex flex-column justify-content-end gap-2">
           
            <RouterLink :to="`/mangas/${manga.node.id}`" class="mx-auto">
                <button class="btn btn-info">See Detail</button>
            </RouterLink>

        </div>
    </div>
</template>



<style scoped>
button {
                    display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 500;
                    border-radius: 3px;
                    padding: 0 16px;
                    border-radius: 4px;
                    color: #fff;
                    background: #6200ee;
                    line-height: 1.15;
                    font-size: 14px;
                    height: 36px;
                    word-spacing: 0px;
                    letter-spacing: .0892857143em;
                    text-decoration: none;
                    text-transform: uppercase;
                    min-width: 64px;
                    border: none;
                    text-align: center;
                    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
                   
                }
</style>