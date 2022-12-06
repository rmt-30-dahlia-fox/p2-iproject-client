<script>
export default{
  props: ["dealer"]
}
</script>

<template>
  <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
    <img alt="Home"
      src="https://0a411afb0c598242cc95-1df470064133d6bc5c471837468f475c.ssl.cf3.rackcdn.com/publish/wp-content/uploads/2022/11/Burrows-Toyota-Rotherham-Sep-2022-640x360.jpg"
      class="h-56 w-full rounded-md object-cover" />

    <div class="mt-2">
      <p class="text-2xl font-bold">{{dealer.name}}</p>
      <dl>
        <div>
          <dt class="sr-only">Address</dt>

          <dd class="font-medium">{{dealer.address}}</dd>
        </div>
      </dl>

      <div class="mt-3 flex items-center text-lg justify-between">
        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/269/269947.png" alt="city-logo" class="h-8 w-8">

          <div class="mt-1.5 sm:ml-3 sm:mt-0">
            <p class="text-gray-500 text-sm">City</p>

            <p class="text-sm">{{dealer.city}}</p>
          </div>
        </div>
        <div class="sm:inline-flex sm:shrink-0 sm:items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3059/3059457.png" alt="city-logo" class="h-8 w-8">

          <div class="mt-1.5 sm:ml-3 sm:mt-0">
            <p class="text-gray-500 text-sm">Telephone</p>

            <p class="text-sm">{{dealer.phoneNumber}}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>