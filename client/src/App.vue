<script >
import { mapWritableState } from 'pinia';
import Navbar from './components/Navbar.vue'
import { useCounterStore } from './stores/counter';


export default {
  components: {
    Navbar
  },
  computed :{
    ...mapWritableState(useCounterStore,['loading'])
  }
}
</script>

<template>
  
  <div v-if="loading" class="d-flex aligns-items-center justify-content-center card text-center position-absolute top-50 start-50 translate-middle ">
    <div>
      <img src="./assets/deku.gif" alt="">
    </div>
  </div>
  <Navbar v-if="!loading" />

  <RouterView />
</template>

<style >

</style>
