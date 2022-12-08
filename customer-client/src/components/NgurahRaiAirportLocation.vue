<script>
const ngurahRaiAirport = [-8.7458582, 115.16733897840365]
export default {
  async mounted() {
    try {
      var map = L.map('map').setView(ngurahRaiAirport, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      var marker = L.marker(ngurahRaiAirport).addTo(map);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<template>
  <div id="map" class="w-full shadow-xl" style="height: 100%;"></div>
  <div>
  </div>
</template>