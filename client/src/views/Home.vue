<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

import Navbar from '../components/Navbar.vue'
import ProductCard from "../components/ProductCard.vue"

export default {
  data() {
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
    ...mapWritableState(useCounterStore, ['loggedUser', 'calledProducts', 'pageCount', 'pageNumber', 'calledCategories', 'searchInput', 'filterCode',
  'calledTransaction'])
  },
  methods: {
    ...mapActions(useCounterStore, ['handleAuthentication', 'fetchProducts', 'movePage', 'fetchCategories', 'openTransaction', 'closeTransaction'])
  },
  created() {
    this.fetchProducts()
    this.fetchCategories()

  },
  mounted() {
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
                      <h5 class="font-bold text-light">{{ loggedUser.name }}</h5>
                      <h6 class="text-dark mb-0">{{ loggedUser.email }}</h6>
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
                      <form @change="fetchProducts(`filter=${filterCode}`)"
                        @submit.prevent="fetchProducts(`filter=${filterCode}`)"
                        class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <input v-model="searchInput" type="text" class="form-control" id="basicInput"
                          placeholder="Enter Product Name">
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
                      <select v-model="filterCode" @change="fetchProducts(`filter=${filterCode}`)" class="form-select"
                        id="inputGroupSelect01">
                        <option :value="''">Filter Products</option>
                        <option v-for="item in calledCategories.items" :key="item.id" :value="item.id">{{ item.name }}
                        </option>
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
                      <button @click.prevent="openTransaction" class="stats-icon red mb-2">
                        <i class="bi-cart2"></i>
                      </button>
                    </div>
                    <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-9">
                      <h4 class="text-white font-semibold">Transaction:</h4>
                      <h4 v-if="!calledTransaction" class="text-white font-extrabold mb-0">Closed</h4>
                      <h4 v-else class="text-white font-extrabold mb-0">{{calledTransaction.status}}</h4>
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

                <nav v-if="(calledProducts.length !== 0)" aria-label="Page navigation example">
                  <ul class="pagination pagination-primary justify-content-center">
                    <li v-if="(pageNumber !== 1)" @click.prevent="movePage(-1, true)" class="page-item">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li v-for="n in pageCount" @click.prevent="movePage(n)" class="page-item"><a class="page-link"
                        href="#">{{ n }}</a></li>
                    <li v-if="(pageNumber !== pageCount)" @click.prevent="movePage(1, true)" class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>

              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="row ">
                  <div class="col- ">
                    <div class="row ">
                      <div class="">
                        <div class="card bg-primary">
                          <div class="card-body px-4 py-4-5 d-flex justify-content-center">
                            <div class="row">
                              <h1 class="text-white">Cart</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section class="section">
                        <div class="row" id="basic-table">
                          <div class="col-12 ">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title">Table with outer spacing</h4>
                              </div>
                              <div class="card-content">
                                <div class="card-body">
                                  <p class="card-text">Using the most basic table up, here’s how
                                    <code>.table</code>-based tables look in Bootstrap. You can use any example
                                    of below table for your table and it can be use with any type of bootstrap tables.
                                  </p>
                                  <!-- Table with outer spacing -->
                                  <div class="table-responsive">
                                    <table class="table table-lg">
                                      <thead>
                                        <tr>
                                          <th>No</th>
                                          <th>Name</th>
                                          <th>Amount</th>
                                          <th>Price</th>
                                          <th>Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>2</td>
                                          <td class="text-bold-500">Michael Right</td>
                                          <td class="text-bold-500">Graphic concepts</td>
                                          <td class="text-bold-500">
                                            </td>
                                          <td class="text-bold-500">
                                            <button><i class="bi bi-check-lg"></i></button>
                                            <button><i class="bi bi-trash3-fill"></i></button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <button @click.prevent="closeTransaction">Submit</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </section>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>