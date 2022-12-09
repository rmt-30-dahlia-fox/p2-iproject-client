<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';

export default {
    computed: {
        ...mapWritableState(globalStore, ['myPlayer', 'attributes'])
    },

    methods: {
        ...mapActions(globalStore, ['fetchMyPlayerById']),

        // styleTac(){
        //     if(this.detailPlayer){
        //         return `${this.detailPlayer.attributes.tactical}%`
        //     }
        // },
        // styleDef(){
        //     if(this.detailPlayer){
        //         return `${this.detailPlayer.attributes.defending}%`
        //     }
        // },
        // styleAtt(){
        //     if(this.detailPlayer){
        //         return `${this.detailPlayer.attributes.attacking}%`
        //     }
        // },
        // styleTech(){
        //     if(this.detailPlayer){
        //         return `${this.detailPlayer.attributes.technical}%`
        //     }
        // },
        // styleCre(){
        //     if(this.detailPlayer){
        //         return `${this.detailPlayer.attributes.creativity}%`
        //     }
        // }


    },

    created(){
    this.fetchMyPlayerById(this.$route.params.id)
  }
}
</script>

<template>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 ms-3 mb-3 border-bottom border-warning">
            <h1 class="fw-bold text-secondary">Player Detail</h1>
            <div class="text-center me-3">
            <router-link to="/myteam">
                <i class="fs-1 fa-solid fa-left-long"></i>
            </router-link> 
        </div>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center">
                <div class="col-3">
                    <div class="card" style="background-color: gray;">
                        <img :src="myPlayer.profile" class="card-img-top progress" style="height: 20em;" alt="...">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <span class="text-white bg-danger fw-bold rounded p-1">Position "{{ myPlayer.position }}"</span>
                            </div>
                            <div class="my-3 text-white">
                                <h5 class="card-title">{{ myPlayer.name }}</h5>
                                <form>
                                    <label>Height:</label>
                                    <input class="form-control" type="text" :value="myPlayer.height">
                                    <label>Preferred Foot:</label>
                                    <input class="form-control" type="text" :value="myPlayer.preferredFoot">
                                    <label>Nation:</label>
                                    <input class="form-control" type="text" :value="myPlayer.nation">
                                    <label>Proposed Market Value:</label>
                                    <input class="form-control" type="text" :value="myPlayer.proposedMarketValue">
                                </form>
                            </div>
                            <h6 class="text-warning"></h6>
                        </div>
                    </div>
                </div>
              <div class="skill-bars" style="padding: 25px 30px; width: 600px; background: #fff; box-shadow: 5px 5px 20px rgba(0,0,0,0.2); border-radius: 10px;">
                <div class="bar">
                  <div class="info">
                    <span>Tactical: {{ attributes.tactical }} %</span>
                  </div>
                  <div class="progress-line">
                    <span style="width: 100%;"></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Defending: {{ attributes.defending }} %</span>
                  </div>
                  <div class="progress-line">
                    <span style="width: 100%;"></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Attacking: {{ attributes.attacking }} %</span>
                  </div>
                  <div class="progress-line">
                    <span style="width: 100%;"></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Technical: {{ attributes.technical }} %</span>
                  </div>
                  <div class="progress-line">
                    <span style="width: 100%;"></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Creativity: {{ attributes.creativity }} %</span>
                  </div>
                  <div class="progress-line">
                    <span style="width: 100%;"></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::selection{
  color: #fff;
  background: #6665ee;
}

.skill-bars .bar{
  margin: 20px 0;
}
.skill-bars .bar:first-child{
  margin-top: 0px;
}
.skill-bars .bar .info{
  margin-bottom: 5px;
}
.skill-bars .bar .info span{
  font-weight: 500;
  font-size: 17px;
  opacity: 0;
  animation: showText 0.5s 1s linear forwards;
}
@keyframes showText {
  100%{
    opacity: 1;
  }
}
.skill-bars .bar .progress-line{
  height: 10px;
  width: 100%;
  background: #f0f0f0;
  position: relative;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05),
              0 1px rgba(255,255,255,0.8);
  animation: animate 1s cubic-bezier(1,0,0.5,1) forwards;
}
@keyframes animate {
  100%{
    transform: scaleX(1);
  }
}
.bar .progress-line span{
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #6665ee;
  animation: animate 1s 1s cubic-bezier(1,0,0.5,1) forwards;
}

.progress-line span::before{
  position: absolute;
  content: "";
  top: -10px;
  right: 0;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-color: #000;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}
.progress-line span::after{
  position: absolute;
  top: -28px;
  right: 0;
  font-weight: 500;
  background: #000;
  color: #fff;
  padding: 1px 8px;
  font-size: 12px;
  border-radius: 3px;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}
</style>