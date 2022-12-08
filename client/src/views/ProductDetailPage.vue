<script>
import { mapState, mapActions } from 'pinia';
import { useGlobalStore } from '../stores/global';
import ReviewCard from '../components/ProductDetail/ReviewCard.vue';
export default{
  methods: {
    ...mapActions(useGlobalStore, ["fetchProductDeteail", 'formatNumber', 'paymentHandler', 'fetchYoutubeVideos']),
    bookHandler(){
      this.paymentHandler(this.$route.params.id, this.product.price, "new")
    }
  },
  computed: {
    ...mapState(useGlobalStore, ["product", 'videoUrl'])
  },
  async created(){
    await this.fetchProductDeteail(this.$route.params.id);
    if(!this.product.name){
      return
    }
    this.fetchYoutubeVideos(this.product.name);
  },
  components: {
    ReviewCard
  }
}
</script>

<template>
  <section id="product-detail-section">
    <section v-if="product.name">
      <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 class="text-2xl font-bold lg:text-3xl">{{product.brand}} {{product.name}}</h1>
        </div>

        <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div class="lg:col-span-3">
            <div class="relative mt-4">
              <img alt="Tee" :src="product.imgUrl"
                class="h-72 w-full rounded-xl object-cover lg:h-[540px]" />
            </div>
          </div>

          <div>
            <form class="space-y-4 lg:pt-8">
              <h2>Get exclusive merchandise from CarStore</h2>
              <div>
                <p>Start From</p>
                <p class="text-xl font-bold">IDR. {{formatNumber(product.price)}}</p>
              </div>
              <button @click.prevent="bookHandler" type="button" id="pay-button"
                class="w-full rounded border border-gray-300 bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Book Now
              </button>
            </form>
          </div>

          <div class="lg:col-span-3">
            <div
              class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <p>
                {{product.description}}
              </p>

              <h2 class="text-2xl my-5 font-bold">Specification</h2>

              <ul>
                <li v-for="(specification, index) in product.specification.split(`\n`)" :key="index">{{specification}}</li>
              </ul>
            </div>
          </div>
        </div>
        <h2 class="text-2xl my-5 font-bold">Video Review</h2>
        <div class="container">
          <iframe :src="videoUrl" title="Honda HR-V 2022 | First Impression | OtoDriver"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
      <section id="review-section">
        <section class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                Review customer tentang {{product.brand}} {{product.name}}
              </h2>
            </div>
            <p v-if="(product.Reviews.length === 0)" class="font-bold text-center text-xl mt-16">No reviews for this car yet.</p>
            <div v-else class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
              
              <ReviewCard v-for="(review, index) in product.Reviews" :key="index" :review="review"/>

            </div>
          </div>
        </section>
      </section>
    </section>

  </section>
</template>