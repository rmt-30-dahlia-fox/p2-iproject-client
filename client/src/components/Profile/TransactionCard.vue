<script>
export default{
  props: ["transaction"]
}
</script>

<template>
  <div v-if="transaction.status === 'Paid'" id="transaction" class="flex items-center justify-between p-10 bg-green-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR 5.000.000</p>
    </div>
    <p class="bg-green-600 py-3 px-6 rounded-lg text-white w-32 text-center">Paid</p>
  </div>
  <div v-if="transaction.status === 'Pending'" id="transaction" class="flex items-center justify-between p-10 bg-orange-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR 5.000.000</p>
    </div>
    <p class="mr-8 ml-auto bg-red-600 py-3 px-6 rounded-lg text-white w-60 text-center">Cancel this transaction</p>
    <p class="bg-orange-600 py-3 px-6 rounded-lg text-white w-32 text-center">Pending</p>
  </div>
  <div v-if="transaction.status === 'Cancel'" id="transaction" class="flex items-center justify-between p-10 bg-red-200 m-6">
    <div>
      <p class="font-bold text-xl">{{transaction.Car.brand}} {{transaction.Car.name}}</p>
      <p>Booking Fee: IDR 5.000.000</p>
    </div>
    <p class="bg-red-600 py-3 px-6 rounded-lg text-white w-32 text-center">Canceled</p>
  </div>
</template>