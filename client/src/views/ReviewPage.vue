<script>
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  methods: {
    ...mapActions(useGlobalStore, ["getTransactionDetail", 'sendReview'])
  },
  computed: {
    ...mapState(useGlobalStore, ["transactionDetail"])
  },
  async created(){
    this.getTransactionDetail(+this.$route.params.id)
  },
  data(){
    return{
      message: ""
    }
  }
}
</script>

<template>

  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold sm:text-3xl">
        Review
      </h1>

      <form @submit.prevent="sendReview(transactionDetail.id, message)" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
        <p class="text-lg font-medium">Review for transaction number: {{transactionDetail.id}} </p>
        <p class="text-sm font-medium">Customer: {{transactionDetail.User.firstName}} {{transactionDetail.User.lastName}}</p>
        <p class="text-sm font-medium">Car: {{transactionDetail.Car.brand}} {{transactionDetail.Car.name}}</p>

        <div>
          <label for="review" class="text-sm font-medium">Review</label>

          <div class="relative mt-1">
            <textarea v-model="message" type="text" id="review" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter your review" />
          </div>
        </div>

        <button type="submit" class="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white">
          Send Review
        </button>
      </form>
    </div>
  </div>

</template>