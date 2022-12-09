<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';
import Navbar from "@/components/Navbar.vue"
import CardMyPlayer from "@/components/CardMyPlayer.vue"

export default {
    components: {
        Navbar,
        CardMyPlayer
    },

    computed: {
        ...mapWritableState(globalStore, ['myPlayers'])
    },

    methods: {
        ...mapActions(globalStore, ['fetchMyPlayer'])
    },

    created(){
        this.fetchMyPlayer()
    }
    
}
</script>

<template>
    <Navbar />
    <section id="home-section">
      <div class="row">
        <section class="col-md-12 text-white mt-3">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 ms-3 mb-3 border-bottom border-warning">
            <h1 class="fw-bold text-secondary">Players</h1>
          </div>
          <div class="container-fluid">
            <div class="row g-4">
              <CardMyPlayer v-for="myPlayer in myPlayers" :key="myPlayer.id" :myPlayer="myPlayer"/>
            </div>
          </div>
        </section>
      </div>
    </section>
    <div class="bg-danger"></div>
</template>