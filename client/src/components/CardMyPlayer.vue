<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';

export default{
    props: ['myPlayer'],

    computed: {
        ...mapWritableState(globalStore, ['isLogin'])
    },

    methods: {
        ...mapActions(globalStore, ['deleteMyPlayer']),

        toDetail(){
            this.$router.push('/detail/' + this.myPlayer.id)
        }
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card" style="background-color: gray;">
            <img :src="myPlayer.Player.profile" class="card-img-top progress" style="height: 20em;" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <span class="text-white bg-danger fw-bold rounded p-1">Position "{{ myPlayer.Player.position }}"</span>
                    <a @click.prevent="toDetail" class="btn btn-primary border">
                        <i class="fa-regular fa-eye"></i>
                    </a>
                </div>
                <div class="my-3 text-white">
                    <h5 class="card-title">{{ myPlayer.Player.name }}</h5>
                    <form>
                        <label>Height:</label>
                        <input class="form-control" type="text" :value="myPlayer.Player.height">
                        <label>Preferred Foot:</label>
                        <input class="form-control" type="text" :value="myPlayer.Player.preferredFoot">
                        <label>Nation:</label>
                        <input class="form-control" type="text" :value="myPlayer.Player.nation">
                        <label>Proposed Market Value:</label>
                        <input class="form-control" type="text" :value="myPlayer.Player.proposedMarketValue">
                    </form>
                    <a @click.prevent="deleteMyPlayer(myPlayer.id)" class="btn btn-danger mt-3">Release</a>
                </div>
                <h6 class="text-warning"></h6>
            </div>
        </div>
    </div>
</template>