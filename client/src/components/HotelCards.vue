<script>
    
    import { mapStores, mapState, mapWritableState } from 'pinia'
    import { useMainStore } from '../stores/main'

    export default {
        props: ['hotel'],
        data() {
            return {
  
            }
        },
        computed: {
            ...mapStores(useMainStore),
            ...mapState(useMainStore, ['cities', 'selectedHotel']),
            ...mapWritableState(useMainStore, ['selectedHotel', 'quantity', 'totalPrice'])
        },
        methods: {
            add() {
                // if(this.hotel.roomLeft) if(Number(this.quantity ) == Number(this.hotel.roomLeft)) return
                this.quantity++
                this.totalPrice = this.quantity * this.selectedHotel.price * Math.round((new Date(this.selectedHotel.dateCheckOut) - new Date(this.selectedHotel.dateCheckIn)) / 86400000)
            },
            minus() {
                if(this.quantity == 1) return
                this.quantity--
                this.totalPrice = this.quantity * this.selectedHotel.price * Math.round((new Date(this.selectedHotel.dateCheckOut) - new Date(this.selectedHotel.dateCheckIn)) / 86400000)
            },
            changeQty() {
                this.totalPrice = this.quantity * this.selectedHotel.price * Math.round((new Date(this.selectedHotel.dateCheckOut) - new Date(this.selectedHotel.dateCheckIn)) / 86400000)
            },
            showOrderForm() {
                if(localStorage.access_token) {
                    this.selectedHotel = this.hotel
                    this.quantity = 1
                    this.totalPrice = this.quantity * this.selectedHotel.price * Math.round((new Date(this.selectedHotel.dateCheckOut) - new Date(this.selectedHotel.dateCheckIn)) / 86400000)
                    document.getElementById('totalPrice').value = this.totalPrice
                    document.getElementById('form-imageUrl').src = this.selectedHotel.imageUrl
                    document.getElementById('form-name').innerText = this.selectedHotel.name
                    document.getElementById('form-address').innerText = this.selectedHotel.address
                    document.getElementById('form-dateCheckIn').innerText = `Date Check-In: ${this.selectedHotel.dateCheckIn}`
                    document.getElementById('form-dateCheckOut').innerText = `Date Check-Out: ${this.selectedHotel.dateCheckOut}`
                    document.getElementById('form-price').innerText = `USD ${this.selectedHotel.price}`
                    document.getElementById('modal').classList.add('active')
                    document.getElementById('overlay').classList.add('active')
                } else {
                    this.$router.push('/login')
                }
            },
            closeOrderForm() {
                this.quantity = 1
                this.totalPrice = 0
                document.getElementById('modal').classList.remove('active')
                document.getElementById('overlay').classList.remove('active')
            },
            addOrder() {
                const obj = this.selectedHotel
                obj.quantity = this.quantity
                obj.totalPrice = this.totalPrice
                this.mainStore.addOrder(obj)
                this.quantity = 1
                this.totalPrice = 0
                document.getElementById('modal').classList.remove('active')
                document.getElementById('overlay').classList.remove('active')
            }
        }
    }

</script>

<template>

<div class="card card-container" >
    <div class="row " style="height: 200px">
        <div class="col-4 hotel-image" style="height: 100%">
            <div class="container-img" style="height: 100%">
                <img style="width:100%; height: 100%" :src="hotel.imageUrl" alt="hotel-picture">
                <button @click.prevent="showOrderForm" class="btn btn-primary book-btn">Book now!</button>
            </div>
        </div>
        <div class="col-8 d-flex flex-column p-2" style="max-height: 100%">

            <h4>{{hotel.name}}</h4>
            <div class="d-flex" style="gap: 32px">
                <div class="d-flex" style="gap: 8px">
                    <i class="fa-solid fa-star text-warning"></i>
                    <h6>{{hotel.star}}/5</h6>
                </div>
                <h6 class="text-secondary">{{hotel.address.split(', ')[1]}}, {{hotel.address.split(', ')[2]}}</h6>
            </div>
            <div class="d-flex mt-3" style="gap: 16px">
                <h6 class="bg-primary text-white text-center" style="width: 30px"> {{hotel.rating}} </h6>
                <h6 class=text-primary>{{hotel.totalReviews}} Reviews</h6>
            </div>

            <div class="d-flex  mr-3" style="max-height: 50px">
                <div class="d-flex align-items-end mb-2" style="width: 70%; height:100%; gap: 12px">
                    <i v-if="hotel.features.split(',').indexOf('FINTRNT') > -1" class="fa-solid fa-wifi"></i>
                    <i v-if="hotel.features.split(',').indexOf('SPOOL') > -1" class="fa-solid fa-person-swimming"></i>
                    <i v-if="hotel.features.split(',').indexOf('RESTRNT') > -1" class="fa-solid fa-utensils"></i>
                    <i v-if="hotel.features.split(',').indexOf('FITSPA') > -1" class="fa-solid fa-dumbbell"></i>
                    <i v-if="hotel.features.split(',').indexOf('FPRKING') > -1" class="fa-solid fa-square-parking"></i>
                    <i v-if="hotel.features.split(',').indexOf('PETALLOW') > -1" class="fa-solid fa-dog"></i>
                </div>
                <div class="align-items-center text-right" style="width: 30%">
                    <div class="d-flex justify-content-end text-danger align-items-end" style="gap: 4px">
                        <h6>USD</h6>
                        <h5>{{hotel.price}}</h5>
                    </div>
                    <h6 class="text-secondary">per room per night</h6>
                    <h6 v-if="hotel.roomLeft" class="text-danger">{{hotel.roomLeft}} room(s) left</h6>
                    <h6 v-if="!hotel.roomLeft" class="text-white">. </h6>
                </div>
            </div>

        </div>
    </div>
</div>


    <div class="order-modal " id="modal">
        <div class="d-flex flex-column" style="gap: 8px">
            <div class="text-center my-2" style="border-bottom: 1px solid black">
                <h4 class="my-auto">Order Detail</h4>
            </div>
            <div class="card mx-2 my-2 d-flex flex-row">
                <div class="">
                    <img style="width: 200px" id="form-imageUrl" alt="hotel-image">
                </div>
                <div class="d-flex flex-column m-2" style="width: 100%">
                    <div class="d-flex flex-column">
                        <h6 class="fw-bold" style="font-weight: bold" id="form-name"></h6>
                        <h6 id="form-address"></h6>
                        <h6 id="form-dateCheckIn"></h6>
                        <h6 id="form-dateCheckOut"></h6>
                    </div>
                    <div class="d-flex flex-column align-items-end" style="height: 100%">
                        <h6 class="text-danger" style="font-weight: bold" id="form-price"></h6>
                        <div class="d-flex" style="max-width: 210px">
                            <h5 class="mr-3">Room(s)</h5>
                            <button @click.prevent="minus" class="btn-primary" id="minus">−</button>
                            <input :max="this.hotel.roomLeft" disabled min="1" @input="changeQty" v-model="this.quantity" type="number" class="form-control" id="input"/>
                            <button @click.prevent="add" class="btn-primary"  id="plus">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column" style="width: 100%">
                <div class="d-flex justify-content-center align-items-center">
                    <h4 class="text-dark" style="width: 350px" >Total Price for {{Math.round((new Date(this.hotel.dateCheckOut) - new Date(this.hotel.dateCheckIn)) / 86400000)}} night(s): </h4>
                    <div class="input-group mb-3 bg-white"  style="max-width: 200px">
                        <span class="bg-primary text-white input-group-text" id="basic-addon1">$</span>
                        <input id="totalPrice" v-model="totalPrice" type="text" class="text-danger bg-white form-control text-right" disabled>
                    </div>
                </div>
                <div class="d-flex mx-auto my-3" style="gap: 8px">
                    <button @click.prevent="closeOrderForm" class="btn btn-danger">
                        Cancel
                    </button>
                    <button @click.prevent="addOrder" class="btn btn-success">
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="" id="overlay"></div>


</template>