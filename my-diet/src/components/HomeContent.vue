<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
export default {
  data() {
    return {
      toSearch: "",
      debounce: null,
      show: false,
    };
  },
  computed: {
    ...mapWritableState(useMainStore, ["pageTitle", "foodsResult"]),
    ...mapState(useMainStore, ["foodDetail"]),
  },
  methods: {
    ...mapActions(useMainStore, ["searchItems", "getOneItem"]),

    triggerSearch() {
      if (this.foodDetail.food_name) {
        console.log(this.foodDetail.food_name);
        this.show = true;
      }
      if (this.toSearch == "") {
        this.foodsResult = [];
      } else {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.searchItems(this.toSearch);
        }, 500);
      }
    },
    hide() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.toSearch = "";
      }, 500);
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
  <div class="bg-dark m-5 p-4 rounded">
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
          <li v-for="food in foodsResult" v-if="foodsResult">
            <a
              class="dropdown-item rounded-2"
              @click.prevent="getOneItem(food.nix_item_id), hide()"
            >
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
    <!-- Food Detail -->
    <div class="container mt-5" v-if="foodDetail.food_name">
      <h3 class="text-light">Food Details</h3>
      <div class="row"></div>
      <div class="justify-content-center">
        <div class="row">
          <div class="col-4">
            <img :src="foodDetail.photo.thumb" alt="food_image" />
          </div>
          <div class="col-8">
            <table class="table text-light">
              <tbody>
                <tr>
                  <th class="w-25">Food Name</th>
                  <td>:</td>
                  <td>{{ food_name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
