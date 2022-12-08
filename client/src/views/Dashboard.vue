<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'
import Cities from '../components/Cities.vue'


    export default {
        components: {
            Cities
        },
        data() {
            return {
                inputCity: '',
                inputCheckInDate: '',
                inputCheckOutDate: '',
                dateStatus: true
            }
        },
        computed: {
            ...mapStores(useMainStore),
            ...mapState(useMainStore, ['cities'])
        },
        created() {
            this.mainStore.fetchCities()
        },
        mounted() {
            document.body.classList.add('bg-dashboard')
            document.querySelector('.navbar').classList.add('navbar-dashboard')   
        },
        unmounted() {
            document.body.classList.remove('bg-dashboard')
            document.querySelector('.navbar').classList.remove('navbar-dashboard') 
        },
        methods: {
            async handleFindHotels() {

                this.dateStatus = true
                
                if((this.inputCheckInDate < this.inputCheckOutDate) && (new Date() < new Date(this.inputCheckInDate))) {
                    this.$router.push({path: '/hotels', query: {city: this.inputCity, date_checkin: this.inputCheckInDate, date_checkout: this.inputCheckOutDate, page: 1}})
                    document.body.classList.remove('bg-dashboard')
                    this.inputCity = ''
                    this.inputCheckInDate = ''
                    this.inputCheckOutDate = ''
                    this.dateStatus = true
                } else {
                    this.inputCheckInDate = ''
                    this.inputCheckOutDate = ''
                    this.dateStatus = false
                }
                
                
            }
        }
    }

</script>

<template>

    <div class="container" style="margin-top:100px">
        <div class="row justify-content-center">
            <div class="col-6 text-white d-flex fw-bold">
                <h3 class="mt-1">Hi there</h3><h2>, Where do you wanna stay?</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-9">
                <div class="input-group">
                    <form @submit.prevent="handleFindHotels" class="d-flex">

                        <input v-model="inputCity" class="form-control py-2 rounded-pill mr-1 pr-5" list="datalistOptions" id="exampleDataList" placeholder="e.g. New York, Berlin" >
                        <datalist id="datalistOptions">
                            <Cities v-for="city in cities" :key="city.id" :city="city"/>
                        </datalist>

                        <input v-model="this.inputCheckInDate" class="form-control py-2 rounded-pill mr-1 pr-5" type="text" placeholder="Check-In Date" onfocus="(this.type='date')" />     
                        <input v-model="this.inputCheckOutDate" class="form-control py-2 rounded-pill mr-1 pr-5" type="text" placeholder="Check-Out Date" onfocus="(this.type='date')" />
                        
                        <span class="input-group-append">
                            <button class="btn rounded-pill border-0 ml-n5" type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div v-if="!this.dateStatus" class="col-9 text-warning d-flex justify-content-start" style="font-weight: bold;">
                <h4>Check-in date must be before today and check-out date</h4>
            </div>
        </div>

    </div>

</template>