<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
    computed: {
        ...mapWritableState(useCounterStore, ['mangaDetail'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMangaDetail','addToWantToRead'])
    },
    created() {
        this.fetchMangaDetail(this.$route.params.id)
    }
}

</script>
<template>
    <div class="container " style="margin-top: 20px ;">
        <h1 class="text-center">{{ mangaDetail ? mangaDetail.title : "" }}</h1>
        <div class="d-flex">
            <div style="margin-top: 15px ;">
                <img :src="mangaDetail ? mangaDetail.main_picture.large : ''" alt="image here" width="500" />
            </div>

            <div style="margin-top: 20px ;">
                <div class="d-flex justify-content-between">
                    <div class="mx-5 my-3">
                        <h4>Rating : {{ mangaDetail ? mangaDetail.mean : `` }}</h4>
                        <div style="margin-top: 25px ;"><text>{{ mangaDetail ? mangaDetail.synopsis : `` }}</text></div>

                    </div>
                </div>


                <div class="d-flex flex-row-reverse">
                    <button @click="addToWantToRead">Add to Want To Read</button>
                </div>

            </div>

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