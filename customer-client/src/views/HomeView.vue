<script>
import { mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer'

export default {
  computed: {
    ...mapState(useCustomerStore, ['isLogin'])
  },
  methods: {
    getStarted() {
      if(this.isLogin) {
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

</template>
