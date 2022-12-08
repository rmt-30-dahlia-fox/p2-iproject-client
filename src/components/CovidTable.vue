<script>
import { mapActions, mapWritableState } from "pinia"
import { useCounterStore } from "../stores/counter"
import TableRow from "../components/TableRow.vue"
import Loader from "./Loader.vue"
import ChartVue from "./Chart.vue"

export default {
  components: {
    TableRow,
    Loader,
    ChartVue,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCovidData"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["covidData", "loading"]),
  },
  created() {
    this.fetchCovidData()
  },
}
</script>
<template>
  <section class="my-36 container mx-auto bg-white">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <h1 class="text-center text-xl mt-5">Chart Covid-19 in Indonesia</h1>
      <ChartVue />
      <div class="flex flex-col gap-10">
        <table class="w-full text-left text-gray-500">
          <thead class="text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">State</th>
              <th scope="col" class="py-3 px-6">Total Case</th>
              <th scope="col" class="py-3 px-6">Total Cured</th>
              <th scope="col" class="py-3 px-6">Total Dead</th>
              <th scope="col" class="py-3 px-6">Total Patient</th>
              <th scope="col" class="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            <Loader v-if="loading" />
            <TableRow v-for="list in covidData" :key="list.key" :list="list" v-else />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
