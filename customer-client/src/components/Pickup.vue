<script>
import { mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer'
import NgurahRaiAirport from './NgurahRaiAirportLocation.vue'
import SanurPort from './SanurPortLocation.vue'
export default {
  computed: {
    ...mapWritableState(useCustomerStore, ['orderForm'])
  },
  data() {
    return {
      map: 'NgurahRaiAirport'
    }
  },
  components: { NgurahRaiAirport, SanurPort },
  methods: {
    changeMap(map) {
      this.map = map
      this.orderForm.pickupLocation = map
    }
  },

  created() {
    this.orderForm.pickupLocation = this.map
  }
}
</script>
<template>
  <div class="flex justify-end gap-8 w-4/5">
    <NgurahRaiAirport v-if="map === 'NgurahRaiAirport'" />
    <SanurPort v-if="map === 'SanurPort'" />
    <div>
      <div>
        <div>
          <div class="mb-8">

            <div class="form-control mb-8">
              <label class="input-group input-group-vertical">
                <span>Pickup Date</span>
                <input type="date" class="input input-bordered" v-model="orderForm.pickupDate" />
              </label>
            </div>
            <div class="form-control">
              <label class="input-group input-group-vertical">
                <span>Pickup Time</span>
                <input type="time" class="input input-bordered" v-model="orderForm.pickupTime" />
              </label>
            </div>
          </div>
          <div class="divider"></div>
          <!-- Card -->
          <div class="card w-96 bg-base-100 shadow-xl mb-8"
            :class="(map === 'NgurahRaiAirport' ? 'bg-primary' : 'bg-base-100')">
            <div class="card-body">
              <h2 class="card-title">Ngurah Rai International Airport</h2>
              <p class="mb-4">Jalan Raya Gusti Ngurah Rai, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80362</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" @click.prevent="changeMap('NgurahRaiAirport')"
                  v-if="map !== 'NgurahRaiAirport'">Select</button>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="card w-96 shadow-xl mb-8" :class="(map === 'SanurPort' ? 'bg-primary' : 'bg-base-100')">
            <div class="card-body">
              <h2 class="card-title">Sanur Port</h2>
              <p class="mb-4">Jl. Hang Tuah No.17, Sanur Kaja, Denpasar Selatan, Kota Denpasar, Bali 80227</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" @click.prevent="changeMap('SanurPort')"
                  v-if="map !== 'SanurPort'">Select</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>