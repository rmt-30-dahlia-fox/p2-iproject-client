<script>
import { mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer'

export default {
  computed: {
    ...mapState(useCustomerStore, ['isLogin', 'weather'])
  },
  methods: {
    getStarted() {
      if (this.isLogin) {
        this.$router.push({ name: 'orderForm' })
      } else {
        this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>
<template>
  <div class="hero">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Gaslah!</h1>
        <p class="py-6">Vroom vroom vroom</p>
        <button class="btn btn-primary" @click="getStarted">Get Started</button>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <p class="text-2xl mt-4 mb-4 text-center">Weather Around</p>
  <div class="flex justify-center gap-8">
    <div class="card bg-base-100 shadow-xl" v-for="data in weather">
      <div class="card-body">
        <h2 class="card-title">{{data.name}}</h2>
        <p>Cloud: {{ data.cloud_pct }}</p>
        <p>Temperature: {{ data.temp }}</p>
      </div>
    </div>

  </div>
</template>
