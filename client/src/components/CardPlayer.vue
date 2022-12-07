<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';

export default{
    props: ['player'],

    computed: {
        ...mapWritableState(globalStore, ['isLogin'])
    },

    methods: {
        ...mapActions(globalStore, ['addMyPlayer']),

        addClick(id){
            if(this.isLogin){
                this.addMyPlayer(id)
            } else{
                this.$router.push('/login')
            }
        }
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card" style="background-color: gray;">
            <img :src="player.profile" class="card-img-top progress" style="height: 20em;" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <span class="text-white bg-danger fw-bold rounded p-1">Position "{{ player.position }}"</span>
                </div>
                <div class="my-3 text-white">
                    <h5 class="card-title">{{ player.name }}</h5>
                    <form>
                        <label>Height:</label>
                        <input class="form-control" type="text" :value="player.height">
                        <label>Preferred Foot:</label>
                        <input class="form-control" type="text" :value="player.preferredFoot">
                        <label>Nation:</label>
                        <input class="form-control" type="text" :value="player.nation">
                        <label>Proposed Market Value:</label>
                        <input class="form-control" type="text" :value="player.proposedMarketValue">
                    </form>
                    <a @click.prevent="addClick(player.id)" class="btn btn-primary mt-3">Contract</a>
                </div>
                <h6 class="text-warning"></h6>
            </div>
        </div>
    </div>
</template>