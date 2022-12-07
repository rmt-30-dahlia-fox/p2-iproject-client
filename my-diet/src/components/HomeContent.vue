<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
export default {
  data() {
    return {
      toSearch: "",
      debounce: null,
    };
  },
  computed: {
    ...mapWritableState(useMainStore, ["pageTitle", "foodsResult"]),
  },
  methods: {
    ...mapActions(useMainStore, ["searchItems"]),

    triggerSearch() {
      if (this.toSearch == "") {
        this.foodsResult = [];
      } else {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.searchItems(this.toSearch);
        }, 500);
      }
    },
  },
};
</script>

<template>
  <div class="position-relative pt-5">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h3 class="mt-5">{{ pageTitle }}</h3>
    </div>
  </div>
  <div class="bg-dark m-5 p-4">
    <div><h5 class="text-light">Search food details</h5></div>
    <div>
      <input
        @input="triggerSearch()"
        v-model="toSearch"
        class="form-control me-2"
        type="search"
        placeholder="Search food products here.."
        aria-label="Search"
      />
      <div class="">
        <ul
          v-if="toSearch !== ''"
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 shadow"
        >
          <li v-for="food in foodsResult">
            <a class="dropdown-item rounded-2">
              <div class="row">
                <div class="col-11">
                  <img
                    :src="food.photo.thumb"
                    alt="food_img"
                    style="height: 35px; width: auto"
                  />
                  {{ food.food_name }}
                </div>
                <div class="col">
                  <i style="color: #cc7518" class="text-end"
                    ><b>{{ food.nf_calories }} cal</b>
                  </i>
                </div>
              </div>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
