<script>
const sanurPort = [-8.674544699999997, 115.2637004]
export default {
  async mounted() {

    var map = L.map('map').setView(sanurPort, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker(sanurPort).addTo(map);

  }
}
</script>
<template>
  <div id="map" class="w-full shadow-xl" style="height: 100%;"></div>
  <div>
  </div>
</template>