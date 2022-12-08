<script>
export default {
  methods: {
    navNews() {
      this.$router.push("/news")
    },
    navCovidTable() {
      this.$router.push("/covid-table")
    },
  },
}
</script>

<template>
  <section class="bg-white flex flex-col items-center justify-center h-screen">
    <div class="w-44">
      <img
        src="../assets/images/logo-medicalinia.jpeg"
        alt="asda"
        class="w-full h-full object-cover" />
    </div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
        @click.prevent="navNews"
        class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer active:scale-95 duration-200"
        role="alert">
        <span class="text-xs bg-orange-600 rounded-full text-white px-4 py-1.5 mr-3"
          >New</span
        >
        <span class="text-sm font-medium">Medicalinia! See what's new</span>
        <svg
          class="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </a>
      <h1
        class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Delivering newest health news around the Globe
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        Here at Medicalinia we focus on health where technology, innovation, and daily lifestyle
      </p>
      <div
        class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          @click.prevent="navCovidTable"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 active:scale-95 duration-200">
          Learn more about Covid-19 Data
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
