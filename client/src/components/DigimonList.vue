<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DigimonCard from "../components/DigimonCard.vue";
import { ref } from "vue";

export default {
  components: {
    DigimonCard,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(useCounterStore, ["fetchDigimon", "paginate"]),

    onClickHandler(page) {
      this.paginate(page);
    },
  },

  computed: {
    ...mapWritableState(useCounterStore, [
      "digimons",
      "currentPage",
      "totalPage",
      "activeDigimons",
    ]),
  },
};
</script>

<template>
  <main>
    <div class="container px-4 px-lg-5 mt-4">
      <vue-awesome-paginate
        :total-items="totalPage"
        :items-per-page="12"
        :max-pages-shown="100"
        v-model="currentPage"
        :on-click="onClickHandler"
      />

      <!-- <paginate
        :page-count="20"
        :click-handler="onClickHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'className'"
      >
      </paginate> -->
      <div class="row gy-5">
        <DigimonCard
          v-for="digimon in activeDigimons"
          :key="digimon"
          :digimon="digimon"
        />
      </div>
    </div>
  </main>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #dba134;
  border: 1px solid #dba134;
  color: white;
}
.active-page:hover {
  background-color: #c87629;
}
</style>
