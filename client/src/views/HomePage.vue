<script>
import BannerPromotion from '../components/Home/BannerPromotion.vue';
import ProductCard from '../components/Home/ProductCard.vue';
import Header from '../components/Home/Header.vue';
import FooterBanner from '../components/Home/FooterBanner.vue';
import Filter from '../components/Home/Filter.vue';
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '../stores/global'
export default{
  components: {
    BannerPromotion,
    ProductCard,
    Header,
    FooterBanner,
    Filter
  },
  data(){
    return{
      isBannerActive: true
    }
  },
  methods: {
    closeBanner(){
      this.isBannerActive = false;
    },
    ...mapActions(useGlobalStore, ['fetchProducts'])
  },
  computed: {
    ...mapState(useGlobalStore, ['products'])
  },
  created(){
    this.fetchProducts();
  }
}
</script>

<template>
  <BannerPromotion v-if="isBannerActive" @closeBanner="closeBanner"/>
  <section id="product-section">
    <Header />


    <section id="products">
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Products</h2>
        </div>
        <Filter />
        <p v-if="(products.length === 0)" class="text-xl text-center mt-16">No matching product</p>
        <div v-else class="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
          

        </div>
      </div>

      <FooterBanner />

    </section>
  </section>
</template>