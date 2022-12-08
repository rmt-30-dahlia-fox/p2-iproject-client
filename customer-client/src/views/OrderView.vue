<script>
import SelectUnit from '../components/SelectUnit.vue'
import Pickup from '../components/Pickup.vue'
import Return from '../components/Return.vue'
import Overview from '../components/Overview.vue'

import { mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer'

export default {
  components: {
    SelectUnit,
    Pickup,
    Return,
    Overview
  },
  computed: {
    ...mapWritableState(useCustomerStore, ['formStep'])
  }
}
</script>
<template>

  <div class="flex gap-8">
    <div>
      <ul class="steps steps-vertical mb-8">
        <li class="step" :class="(formStep >= 1) ? 'step-primary' : ''">Unit</li>
        <li class="step" :class="(formStep >= 2) ? 'step-primary' : ''">Pickup Details</li>
        <li class="step" :class="(formStep >= 3) ? 'step-primary' : ''">Return Details</li>
        <li class="step" :class="(formStep >= 4) ? 'step-primary' : ''">Overview</li>
      </ul>
      <div>
        <button class="btn btn-primary btn-wide mb-2" :class="(formStep === 4) ? 'btn-disabled btn-wide' : ''" @click="formStep++">Next</button>
        <br>
        <button class="btn" :class="(formStep === 1) ? 'btn-disabled btn-wide' : 'btn-ghost btn-wide'" @click="formStep--">Back</button>
      </div>
    </div>
    
      <SelectUnit v-if="(formStep === 1)"/>
      <Pickup v-if="(formStep === 2)"/>
      <Return v-if="(formStep === 3)"/>
      <Overview v-if="(formStep === 4)" />


  </div>



</template>
