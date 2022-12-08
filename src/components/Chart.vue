<template>
  <div class="w-3/4 h-1/2 mx-auto">
    <Bar
      v-if="loaded"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      class="mt-24" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js"
import axios from "axios"

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
)

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      loaded: false,
      baseUrl: `http://localhost:3000`,
      covidData: [],
      diedCase: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Total Case",
            backgroundColor: [],
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
  methods: {
    async fetchCovidData() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${this.baseUrl}/covid-data`,
          headers: { access_token: localStorage.access_token },
        })
        // this.chartData.labels = [data.list_data[0].key]
        // this.chartData.datasets[0].data = [data.list_data[0].jumlah_kasus]

        const colorList = ["#6D67E4", "#46C2CB"]
        this.chartData.datasets[0].backgroundColor = data.list_data.map((el) => {
          const randomNumber = Math.floor(Math.random() * (colorList.length))
          return colorList[randomNumber]
        })
        console.log(this.chartData.datasets[0].backgroundColor)
        this.chartData.labels = data.list_data.map((el) => {
          return el.key
        })
        this.chartData.datasets[0].data = data.list_data.map((el) => {
          return el.jumlah_kasus
        })
        // console.log(this.covidData)
        console.log(this.diedCase)
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.fetchCovidData()
  },
}
</script>
