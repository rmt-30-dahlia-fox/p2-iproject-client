<script>
export default{
  props: ["dealer"]
}
</script>

<template>
  <div class="flex items-start w-full">
    <a class="w-full relative block rounded-xl border border-gray-300 p-8" href="">
      <div class="mt-4 text-gray-500 sm:pr-8">
        <img src="https://cdn-icons-png.flaticon.com/128/3729/3729070.png" alt="car-dealer-logo"
          class="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">

        <h3 class="mt-4 text-xl font-bold text-gray-900">{{dealer.address}}</h3>

        <p class="mt-2 hidden text-sm sm:block">
          Telephone
        </p>
        <p class="mt-2 hidden text-sm sm:block">
          {{dealer.phoneNumber}}
        </p>
      </div>
    </a>
  </div>
</template>