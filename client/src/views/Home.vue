<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

import Navbar from '../components/Navbar.vue'
import ProductCard from "../components/ProductCard.vue"

export default{
  data(){
    return {
      page: 'food'
    }
  },
  components: {
    Navbar,
    ProductCard
  },
  computed: {
    ...mapState(useCounterStore, []),
    ...mapWritableState(useCounterStore, ['loggedUser', 'calledProducts', 'pageCount', 'pageNumber'])
  },
  methods: {
    ...mapActions(useCounterStore, ['handleAuthentication', 'fetchProducts', 'movePage'])
  },
  created(){
    this.fetchProducts()
    
  },
  mounted(){
    this.handleAuthentication()
    this.fetchProducts()
  }
}
</script>

<template>
<Navbar :page="page"></Navbar>

<div id="main">
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>
    <div class="row ">
        <div class="col- ">
            <div class="row ">
                <div v-if="loggedUser" class="">
                    <div class="card bg-primary">
                        <div class="card-body px-4 py-4-5 d-flex justify-content-center">
                            <div class="row">
                                <h1 class="text-white">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content">
        <div class="row">
          <div class="col-">
            <div class="row">
              <div v-if="loggedUser" class="col-6 col-lg-3 col-md-6">
                <div class="card bg-primary">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-1 col-lg-12 col-xl-12 col-xxl-3">
                        <div class="avatar avatar-xl">
                            <img :src="`${loggedUser.photo}`" alt="Photo Profile">
                        </div>
                      </div>
                      <div class="col-md-11 col-lg-12 col-xl-12 col-xxl-9">
                        <h5 class="font-bold text-light">{{loggedUser.name}}</h5>
                        <h6 class="text-dark mb-0">{{loggedUser.email}}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-3 d-flex justify-content-start ">
                        <div class="stats-icon blue mb-2">
                          <i class="bi-archive"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-9">
                        <h6 class="text-muted font-semibold">Search Product</h6>
                        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <input type="text" class="form-control" id="basicInput" placeholder="Enter Product Name">
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-3 d-flex justify-content-start ">
                        <div class="stats-icon green mb-2">
                          <i class="bi-columns-gap"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-9">
                        <h6 class="text-muted font-semibold">Filter Category</h6>
                        <select v-model="filterCode" @change="fetchFoods(`filter=${filterCode}`)" class="form-select" id="inputGroupSelect01">
                            <option :value="''">Filter Foods</option>
                            <!-- <option v-for="item in categories" :key="item.id" :value="item.id">{{item.name}}</option> -->
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="loggedUser" class="col-6 col-lg-3 col-md-6">
                <div class="card bg-danger">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-3 d-flex justify-content-start ">
                        <div class="stats-icon red mb-2">
                          <i class="bi-cart2"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-9">
                        <h6 class="text-white font-semibold">Carts</h6>
                        <h6 class="text-white font-extrabold mb-0">0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
            <div class="col-6">
                <div class="row">
                    <ProductCard v-for="product in calledProducts.items" :key="product.id" :product="product"></ProductCard>

                    <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-primary justify-content-center">
                            <li v-if="(pageNumber !== 1)" @click.prevent="movePage(-1, true)" class="page-item">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li v-for="n in pageCount" @click.prevent="movePage(n)" class="page-item"><a class="page-link"
                                    href="#">{{n}}</a></li>
                            <li v-if="(pageNumber !== pageCount)" @click.prevent="movePage(1, true)" class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    
                </div>
            </div>
        </div>
          </div>
        </div>
    </div>
    
</div>
</template>

<style scoped>
@import '../assets/css/pages/auth.css'
</style>