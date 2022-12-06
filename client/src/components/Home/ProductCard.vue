<script>
export default{
  props: ["product"]
}
</script>

<template>
  <div class="flex items-start cursor-pointer mb-10">
    <router-link :to="`/product/${product.id}`" id="product" class="group block overflow-hidden rounded-xl">
      <img alt="Car" :src="product.imgUrl"
        class="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[300px]" />

      <div class="relative bg-white p-5">
        <h3 class="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {{product.brand}} {{product.name}}
        </h3>
        <div id="description">
          <p class="text-sm my-4 text-justify">{{product.description}}</p>
        </div>
        <p>
          <span class="tracking-wider text-xl font-bold"> Start From </span>
        </p>
        <p class="my-1">
          <span class="tracking-wider text-xl font-bold"> IDR. {{product.price}} </span>
        </p>
      </div>
    </router-link>
  </div>
</template>