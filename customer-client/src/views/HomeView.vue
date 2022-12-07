<script>
import SelectUnit from '../components/SelectUnit.vue'
export default {
  components: {
    SelectUnit
  }
}
</script>
<template>

  <div class="flex justify-center gap-16">
    <div>
      <ul class="steps steps-vertical">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
    </div>

    <SelectUnit />

  </div>



</template>
