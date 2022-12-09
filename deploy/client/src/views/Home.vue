<script>
import Card from "@/components/CardPlayer.vue";
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapWritableState } from "pinia";
import { globalStore } from "../stores/global";

export default {
    components: {
        Card,
        Navbar
    },

    computed: {
      ...mapWritableState(globalStore, ['players', 'currentPage', 'news'])
    },

    methods: {
      ...mapActions(globalStore, ['fetchPlayer', 'addMyPlayer']),

      onClickCurrent(page){
      this.currentPage = page
      this.fetchPlayer()
    },

    onClickPrev(){
      if(this.currentPage > 1){
        this.currentPage = this.currentPage - 1
      }
      this.fetchPlayer()
    },

    onClickNext(){
      this.currentPage = this.currentPage + 1
      this.fetchPlayer()
    },

    style(page){
      if(this.currentPage === page){
        return "active"
      }
    },

    stylePrevNext(page){
      if(this.currentPage === page){
        return "disabled"
      }
    },

    },

    created(){
      this.fetchPlayer()
    }
}
</script>

<template>
    <Navbar />
    <section id="home-section">
      <div class="row">

        <!-- Landing Page -->
        <div class="container-xxl" style="background-color: gray;">
          <div class="container my-5 py-5">
            <div class="row align-items-center g-5">
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="display-3 text-white animated slideInLeft">Transfer<br>Market</h1>
                <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              </div>
              <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                <img class="img-fluid" src="https://cdn.pixabay.com/photo/2018/09/30/22/12/silhouette-3714836_1280.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!-- End Landing Page -->

        <!-- Player -->
        <section class="col-md-12 text-white mt-3">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 ms-3 mb-3 border-bottom border-warning">
            <h1 class="fw-bold text-secondary">Players</h1>
          </div>
          <div class="container-fluid">
            <div class="row g-4">
              <Card v-for="player in players.players" :key="player.id" :player="player"/>
            </div>
          </div>

          <nav class="ms-4 mt-3" aria-label="...">
              <ul class="pagination">
                <li class="page-item" :class="stylePrevNext(1)">
                  <a @click.prevent="onClickPrev" class="page-link">Previous</a>
                </li>
                <li class="page-item" :class="style(1)">
                  <a @click.prevent="onClickCurrent(1)" class="page-link">1</a>
                </li>
                <li class="page-item" :class="style(2)">
                  <a @click.prevent="onClickCurrent(2)" class="page-link" href="#">2</a>
                </li> 
                <li class="page-item" :class="style(3)">
                  <a @click.prevent="onClickCurrent(3)" class="page-link" href="#">3</a>
                </li>
                <li class="page-item" :class="style(4)">
                  <a @click.prevent="onClickCurrent(4)" class="page-link" href="#">4</a>
                </li>
                <li class="page-item" :class="stylePrevNext(4)">
                  <a @click.prevent="onClickNext" class="page-link" href="#">Next</a>
                </li>
              </ul>
          </nav>
        </section>
        <!-- End Player -->

        <!-- News -->

        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">News</h5>
                    <h1 class="mb-5">Most Popular News</h1>
                </div>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div v-for="info in news" :key="info.author" class="col-lg-6">
                                    <img class="rounded" :src="info.urlToImage" alt="" style="height: 250px; width: 300;"/>
                                    <div class="d-flex align-items-center">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>{{ info.title }}</span>
                                            </h5>
                                            <small class="fst-italic">{{ info.description }}</small>
                                            <a :href="info.url">Source</a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End News -->
      </div>
    </section>
</template>