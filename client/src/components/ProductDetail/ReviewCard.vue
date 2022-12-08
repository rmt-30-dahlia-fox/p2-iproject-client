<script>
export default{
  props: ["review"]
}
</script>

<template>
  <div>
    <img alt="User" src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
      class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl" />

    <blockquote id="review" class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
      <p class="text-lg font-bold text-gray-700">{{review.User.firstName}} {{review.User.lastName}}</p>
      <p class="mt-4 text-sm text-gray-500">
        {{review.message}}
      </p>

      <!-- <div class="mt-8 flex justify-center gap-0.5 text-green-500">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" class="w-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" class="w-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" class="w-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" class="w-5">
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" class="w-5">
      </div> -->
    </blockquote>
  </div>
</template>