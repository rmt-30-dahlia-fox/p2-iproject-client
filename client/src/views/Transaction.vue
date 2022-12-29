<script> 

import TransactionCard from '../components/TransactionCard.vue'
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'

export default {
    data() {
        return {

        }
    },  
    created() {

    }, 
    components: {
        TransactionCard
    },
    created() {
        this.mainStore.getPendingTransactions()
    },
    computed: {
        ...mapStores(useMainStore),
        ...mapState(useMainStore, ['pendingTransactions', 'paidTransactions', 'transactionStatus']),
    },
    methods: {

    }
}

</script>

<template>
<section class="h-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style="border-radius: 10px;">
          <div class="card-header d-flex px-4 py-5" style="gap: 16px">
            <a @click.prevent="this.mainStore.getPendingTransactions()" href="#" class="text-muted mb-0">Pending</a>
            <a @click.prevent="this.mainStore.getPaidTransactions()" href="#"  class="text-muted mb-0">Paid</a>
          </div>
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0" style="color: #a8729a;">Orders</p>
            </div>


            <TransactionCard v-if="this.transactionStatus === 'pending'" v-for="pendingTransaction in pendingTransactions" :key="pendingTransaction.id" :pendingTransaction="pendingTransaction" />
            <TransactionCard v-if="this.transactionStatus === 'paid'" v-for="paidTransaction in paidTransactions" :key="paidTransaction.id" :paidTransaction="paidTransaction" />
          </div>

          <div class="card-footer border-0 px-4 py-5" v-if="this.transactionStatus === 'pending'"
            style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
            <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
              orders: <span class="h2 mb-0 ms-2">{{this.mainStore.pendingTransactions.length}}</span></h5>
          </div>
          <div class="card-footer border-0 px-4 py-5" v-if="this.transactionStatus === 'paid'"
            style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
            <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
              orders: <span class="h2 mb-0 ms-2">{{this.mainStore.paidTransactions.length}}</span></h5>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

</template>