<script>
    

    export default {
        props: ['hotel']
    }

</script>

<template>

<div class="card" >
    <div class="row " style="height: 200px">
        <div class="col-4 " style="height: 100%">
            <img style="width:100%; height: 100%" :src="hotel.imageUrl" alt="hotel-picture">
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
                    <i v-if="hotel.features.split(',').indexOf('PETALLOW') > -1" class="fa-sharp fa-solid fa-dog-leashed"></i>
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

</template>