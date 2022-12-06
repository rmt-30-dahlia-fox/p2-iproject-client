<script>
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchCovidData"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["covidData"]),
  },
  created() {
    this.fetchCovidData()
  },
}
</script>
<template>
  <section class="mt-36 container mx-auto">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div class="flex flex-col gap-10">
        <table class="w-full text-left text-gray-500">
          <thead class="text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">Product name</th>
              <th scope="col" class="py-3 px-6">Color</th>
              <th scope="col" class="py-3 px-6">Category</th>
              <th scope="col" class="py-3 px-6">Price</th>
              <th scope="col" class="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b" v-for="list in covidData" :key="key">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {{ list.key }}
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
