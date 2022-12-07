<script>
import { mapStores, mapState } from 'pinia'
import { useMainStore } from '../stores/main'
import Cities from '../components/Cities.vue'
import HotelCards from '../components/HotelCards.vue'
import Paginate from 'vuejs-paginate-next';



export default {
    components: {
        Cities,
        HotelCards,
        Paginate
    },
    data() {
        return {
            selectedCity: '',
            selectedCheckInDate:'',
            selectedCheckOutDate:'',
        }
    },
    computed: {
        ...mapStores(useMainStore),
        ...mapState(useMainStore, ['cities', 'hotels', 'totalHotels'])
    },
    created() {
        this.mainStore.fetchCities()
        this.handleFetchHotels()
        this.selectedCity = this.$route.query.city
        this.selectedCheckInDate = this.$route.query.date_checkin
        this.selectedCheckOutDate = this.$route.query.date_checkout
    },
    methods: {
        async handleFetchHotels() {
            await this.mainStore.fetchHotels({
                city: this.$route.query.city,
                date_checkin: this.$route.query.date_checkin,
                date_checkout: this.$route.query.date_checkout,
                page: this.$route.query.page,
            })
        },
        async clickCallback (pageNum) {
            this.$router.push({path: '/hotels', query: {city: this.selectedCity, date_checkin: this.selectedCheckInDate, date_checkout: this.selectedCheckOutDate, page: pageNum}})
            this.handleFetchHotels()
        },
        showOutput() {
            const price = document.querySelector("#price");
            const output = document.querySelector(".price-output");
            output.textContent = price.value;
            price.addEventListener("input", () => {
                output.textContent = price.value;
            });
        }
    },
    mounted() {
        document.body.classList.add('bg-hotels')
        document.querySelector('.navbar').classList.add('navbar-hotels')
        document.querySelector('.fa-gift').classList.add('text-primary')
    },
    unmounted() {
        document.body.classList.remove('bg-hotels')
        document.querySelector('.navbar').classList.remove('navbar-hotels')
        document.querySelector('.fa-gift').classList.remove('text-primary')
    }
}

</script>

<template>
    
    <hr style="margin: 0">
    <div class="row bg-white" style="padding: 0px 400px">
        <div class="col-3 p-2">
            <h5 class="text-secondary">City</h5>
            <input v-model="selectedCity" class="form-control py-2 rounded-pill mr-1 pr-5" list="datalistOptions" id="exampleDataList" placeholder="e.g. New York, Berlin" >
            <datalist id="datalistOptions">
                <Cities v-for="city in cities" :key="city.id" :city="city"/>
            </datalist>
        </div>
        <div class="col-3 p-2">
            <h5 class="text-secondary">Check-In</h5>
            <input v-model="this.selectedCheckInDate" class="form-control py-2 rounded-pill mr-1 pr-5" type="date"  />     
        </div>
        <div class="col-3 p-2">
            <h5 class="text-secondary">Check-Out</h5>
            <input v-model="this.selectedCheckOutDate" class="form-control py-2 rounded-pill mr-1 pr-5" type="date" />
        </div>
        <div class="col-3 p-2 align-items-end d-flex">
            <div style="width:100%">
                <button class="btn btn-primary mx-auto" style="width: 100%">Search</button>
            </div>
        </div>
    </div>
    <hr style="margin: 0">
    <div class="row bg-white" style="padding: 0px 410px">
        <h5 class="my-auto">Filter</h5>
        <div class="col-6 d-flex align-items-center" style="gap: 4px">
            <label class="mt-2" for="price">Choose a maximum price: </label>
            <input
                @change="showOutput"
                type="range"
                name="price"
                id="price"
                min="0"
                max="10000"
                step="1"
                value="0" />
            <output class="price-output" for="price"></output>
        </div>
        <div class="col-3 d-flex align-items-center">
            <h5 class="mt-2">Stars: </h5>
            <button class="btn bg-transparent">
                <i class="fa-solid fa-star text-secondary"></i>
            </button>
            <button class="btn bg-transparent">
                <i class="fa-solid fa-star text-secondary"></i>
            </button>
            <button class="btn bg-transparent">
                <i class="fa-solid fa-star text-secondary"></i>
            </button>
            <button class="btn bg-transparent">
                <i class="fa-solid fa-star text-secondary"></i>
            </button>
            <button class="btn bg-transparent">
                <i class="fa-solid fa-star text-secondary"></i>
            </button>
        </div>
    </div>


    <div class="container mt-2">
        <div class="row">

            <div class="col-3">
                <div class="card bg-white">
                    <div class="card-body">
                        <h1>Sort disini</h1>
                    </div>
                </div>
            </div>
            
            <div class="col-9">
                <div class="card bg-white">
                    <div class="card-body">  
                        <!-- beginning of hotels content -->
                        <div class="row">
                            <div class="col d-flex flex-column" style="gap: 16px">

                                <HotelCards v-for="hotel in hotels" :key="hotel.id" :hotel="hotel"/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-3">
                <paginate class="hover"
                    v-model="this.$route.query.page"
                    :page-count="(Math.floor(this.totalHotels/10) +1)"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="clickCallback"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                >
                </paginate>
            </div>
        </div>
    </div>

    
   

</template>