<script>
import { mapWritableState } from 'pinia';
import { useCustomerStore } from '../stores/customer';
export default {
  computed: {
    ...mapWritableState(useCustomerStore, ['orderForm'])
  }
}
</script>
<template>
  <div class="flex justify-center gap-8 w-4/5">
    <form class="flex-col">
      <label class="label">
        <span class="label-text">Date</span>
      </label>
      <div class="flex justify-center gap-8 mb-4">
        <div class="form-control">
          <label class="input-group">
            <span>Pickup</span>
            <input type="date" class="input input-bordered" v-model="orderForm.pickupDate"/>
          </label>
        </div>
        <div class="form-control w-full">
          <label class="input-group">
            <span>Return</span>
            <input type="date" class="input input-bordered" v-model="orderForm.returnDate"/>
          </label>
        </div>
      </div>

      <label class="label">
        <span class="label-text">Time</span>
      </label>
      <div class="flex justify-around gap-8 mb-4">
        <div class="form-control">
          <label class="input-group">
            <span>Pickup</span>
            <input type="time" class="input input-bordered" v-model="orderForm.pickupTime"/>
          </label>
        </div>

        <div class="form-control w-full">
          <label class="input-group">
            <span>Return</span>
            <input type="time" class="input input-bordered" v-model="orderForm.returnTime"/>
          </label>
        </div>

      </div>
    </form>
  </div>
</template>