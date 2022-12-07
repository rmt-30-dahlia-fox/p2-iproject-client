<script>
import { def } from '@vue/shared';
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'

    export default {
        props: ['pendingTransaction', 'dataStatus', 'paidTransaction'],
        computed: {
            ...mapStores(useMainStore),
            ...mapState(useMainStore, ['transactionStatus']),
        },
        methods: {
            deleteOrder(id) {
                this.mainStore.deleteOrder(id)
            },
            checkOut() {
                this.mainStore.paymentWithStripe(this.pendingTransaction)
            }
        }
    }

</script>

<template>

<div class="card shadow-0 border mb-4" v-if="this.transactionStatus === 'pending'">
    <div class="card-body">
        <div class="row">
            <div class="col-md-2">
            <img :src="pendingTransaction.imageUrl"
                class="img-fluid" alt="Phone">
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0">{{pendingTransaction.name}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">${{pendingTransaction.price}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">{{Math.round((new Date(this.pendingTransaction.dateCheckOut) - new Date(this.pendingTransaction.dateCheckIn)) / 86400000)}} night(s)</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">Room(s): {{this.pendingTransaction.quantity}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-primary mb-0 small">${{this.pendingTransaction.totalPrice}}</p>
            </div>
        </div>
        <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
        <div class="row d-flex justify-content-end align-items-center mx-2">
            <div class="mr-3">
                <a @click.prevent="deleteOrder(pendingTransaction.id)" href="#">
                    <i class="fa-solid text-muted fa-trash"></i>
                </a>
            </div>
            <div>
                <button @click="checkOut" class="btn btn-success">Pay now</button>
            </div>
        </div>
    </div>
</div>

<div class="card shadow-0 border mb-4" v-if="this.transactionStatus === 'paid'">
    <div class="card-body">
        <div class="row">
            <div class="col-md-2">
            <img :src="paidTransaction.imageUrl"
                class="img-fluid" alt="Phone">
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0">{{paidTransaction.name}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">${{paidTransaction.price}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">{{Math.round((new Date(this.paidTransaction.dateCheckOut) - new Date(this.paidTransaction.dateCheckIn)) / 86400000)}} night(s)</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-muted mb-0 small">Room(s): {{this.paidTransaction.quantity}}</p>
            </div>
            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
            <p class="text-primary mb-0 small">${{this.paidTransaction.totalPrice}}</p>
            </div>
        </div>
        <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
        <div class="row d-flex justify-content-end align-items-center mx-2">
            
        </div>
    </div>
</div>

</template>