<script>
export default{
  emits: ["closeBanner"],
  methods: {
    closeBanner(){
      this.$emit("closeBanner")
    }
  }
}
</script>

<template>
  <section id="banner">
    <section id="promotion-banner">
      <section class="relative overflow-hidden rounded-lg pb-80 shadow-2xl lg:pb-0">
        <div class="ml-auto p-8 text-center sm:p-12 lg:w-2/3">
          <p class="text-sm font-semibold uppercase tracking-widest">
            Drive your limit
          </p>

          <h2 class="mt-6 font-black uppercase">
            <span class="text-5xl font-black sm:text-6xl">Get IDR 500.000 off</span>
            <span class="mt-2 block text-sm">Available on selected dealer</span>
          </h2>

          <a @click.prevent="closeBanner" class="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="">
            Continue Shopping
          </a>

          <p class="mt-12 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2023 *
          </p>
        </div>

        <div class="absolute bottom-0 left-0 h-80 w-full lg:h-full lg:w-1/3">
          <img alt="Trainer"
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
    </section>
  </section>
</template>