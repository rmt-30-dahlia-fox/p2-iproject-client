<script>
export default{
  props: ["transaction"]
}
</script>

<template>
  <a class="shadow-xl relative block overflow-hidden group">
    <img :src="transaction.Car.imgUrl" alt="Car-Photo"
      class="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72" />

    <div class="relative p-6 bg-white border border-gray-100">
      <span class="whitespace-nowrap bg-green-400 rounded-full px-6 py-1.5 text-xs font-medium text-green-800">
        Paid
      </span>

      <h3 class="mt-4 text-lg font-medium text-gray-900">{{transaction.Car.brand}} {{transaction.Car.name}}</h3>

      <form v-if="!transaction.Review" class="mt-4">
        <button @click.prevent="this.$router.push(`/review/${transaction.id}`)" class="block w-full p-4 text-sm font-medium transition bg-black text-white rounded hover:scale-105">
          Write a review
        </button>
      </form>
    </div>
  </a>
</template>