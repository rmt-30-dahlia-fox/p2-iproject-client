<script>
import LocationCard from '../components/Location/LocationCard.vue';
import { mapActions, mapState } from 'pinia';
import { useGlobalStore } from '../stores/global';
export default{
  components: {
    LocationCard
  },
  methods: {
    ...mapActions(useGlobalStore, ['fetchDealers'])
  },
  computed: {
    ...mapState(useGlobalStore, ['dealers'])
  },
  created(){
    this.fetchDealers();
  }
}
</script>

<template>
  <section id="location-section" class="mt-10">
    <section>
      <h2 class="text-3xl font-bold sm:text-4xl px-8">Our Location</h2>
      <div class="mx-auto max-w-screen-xl px-4">

        <div class="mt-3 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2">
          
          <LocationCard v-for="dealer in dealers" :key="dealer.id" :dealer="dealer"/>

        </div>
        <!-- <div id="map"></div> -->
        
      </div>
    </section>
  </section>
</template>