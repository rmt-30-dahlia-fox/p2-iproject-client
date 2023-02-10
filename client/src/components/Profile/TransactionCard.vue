<script>
import { mapActions } from 'pinia'
import { useGlobalStore } from '../../stores/global'
export default{
  props: ["transaction"],
  methods: {
    ...mapActions(useGlobalStore, ['cancelTransaction', 'formatNumber', 'paymentHandler'])
  }
}
</script>

<template>
  <div v-if="transaction.status === 'Paid'" id="transaction" class="flex items-center justify-between p-10 bg-green-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR {{formatNumber(transaction.Car.price*0.05)}}</p>
    </div>
    <p class="bg-green-600 py-3 px-6 rounded-lg text-white w-32 text-center">Paid</p>
  </div>
  <div v-if="transaction.status === 'Pending'" id="transaction" class="flex items-center justify-between p-10 bg-orange-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR {{formatNumber(transaction.Car.price*0.05)}}</p>
    </div>
    <p @click.prevent="paymentHandler(transaction.id, transaction.Car.price, 'existed')" class="mr-8 ml-auto cursor-pointer bg-green-600 py-3 px-6 rounded-lg text-white w-40 text-center">Pay</p>
    <p @click.prevent="cancelTransaction(transaction.id)" class="cursor-pointer mr-8 bg-red-600 py-3 px-6 rounded-lg text-white w-60 text-center">Cancel this transaction</p>
    <p class="bg-orange-600 py-3 px-6 rounded-lg text-white w-32 text-center">Pending</p>
  </div>
  <div v-if="transaction.status === 'Cancel'" id="transaction" class="flex items-center justify-between p-10 bg-red-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR {{formatNumber(transaction.Car.price*0.05)}}</p>
    </div>
    <p class="bg-red-600 py-3 px-6 rounded-lg text-white w-32 text-center">Canceled</p>
  </div>
</template>