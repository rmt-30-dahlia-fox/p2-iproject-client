<script>
import LocationCard from '../components/Location/LocationCard.vue';
import { mapActions, mapState } from 'pinia';
import { useGlobalStore } from '../stores/global';
export default {
  components: {
    LocationCard
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchDealers']),
    showOnMap(coordinate, dealerName){
      if(this.marker){
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker(coordinate).addTo(this.map);
      this.marker.bindPopup(`<b>${dealerName}</b>`).openPopup();
    }
  },
  computed: {
    ...mapState(useGlobalStore, ['dealers'])
  },
  created() {
    this.fetchDealers();
  },
  mounted(){
    const map = L.map('map').setView([-6.913603, 107.629988], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    this.map = map;
  },
  data(){
    return{
      map: "",
      marker: ""
    }
  }
}
</script>

<template>
  <section id="location-section" class="mt-10">
    <section>
      <h2 class="text-3xl font-bold sm:text-4xl px-8">Our Location</h2>
      <div class="mx-auto max-w-screen-xl px-4">

        <div class="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2">

          <LocationCard v-for="dealer in dealers" :key="dealer.id" :dealer="dealer" @showOnMap="showOnMap"/>

        </div>

        <h2 class="text-2xl text-center mt-16">Select dealer to view location on map</h2>

        <div id="map"></div>

      </div>
    </section>
  </section>
</template>