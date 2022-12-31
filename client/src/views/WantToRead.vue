<script >
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import WantToReadCard from '../components/WantToReadCard.vue'


export default {
    methods: {
        ...mapActions(useCounterStore, ['fetchWantToRead', 'fetchQuote','mailWantToRead'])
    },
    created() {
        this.fetchWantToRead()
        this.fetchQuote()
    },
    computed: {
        ...mapWritableState(useCounterStore, ['wantToRead', 'quote','loading'])
    },
    components: {
        WantToReadCard
    }
}
</script>

<template>
    <main v-if="!loading">
        <h1 class="text-center ">Want To Read List</h1>
        <div class="d-flex justify-content-between">
            <div></div>
            <button @click="mailWantToRead" style="margin-right: 15px; font-style:italic;">Mail me this list</button>
        </div>
        <div class="container">
            <div class="row">
                <!-- <pre>{{dataManga}}</pre> -->
                <WantToReadCard v-for="manga in wantToRead" :key="manga.id" :manga="manga" />

            </div>
            <div class="d-flex justify-content-between">
                <div>
                    <text style="margin-right: 15px; font-style:italic;">{{ quote.quote }}</text><br>
                    <text>~{{ quote.character }}, from {{quote.anime}}</text>
                </div>

            </div>
        </div>
    </main>
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