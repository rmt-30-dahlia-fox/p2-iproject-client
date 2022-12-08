<script>
const padangBaiPort = [-8.533881299999987, 115.50893539999998]
export default {
  async mounted() {

    var map = L.map('map').setView(padangBaiPort, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker(padangBaiPort).addTo(map);

  }
}
</script>
<template>
  <div id="map" class="w-full shadow-xl" style="height: 100%;"></div>
  <div>
  </div>
</template>