<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

import NavbarVue from "../components/Navbar.vue";
import articleCardVue from "../components/articleCard.vue";

export default {
  components: {
    NavbarVue,
    articleCardVue,
  },
  data() {
    return {
      params: { type: "", muscle: "", difficulty: "", offset: "" },
      info: false,
      result: false,
      instructions: [],
    };
  },
  computed: {
    ...mapState(useMainStore, ["contentDetail"]),
  },
  created() {
    this.instructions = this.contentDetail.instructions.split(".");
  },
  methods: {
    ...mapActions(useMainStore, ["changePage"]),
  },
};
</script>

<template>
  <NavbarVue />
  <!-- content -->
  <div class="bg-dark m-5 p-4 rounded" style="margin-top: 110px !important">
    <div class="position-relative pt-2">
      <div class="position-absolute top-50 start-50 translate-middle">
        <h3 class="my-5 text-light">{{ pageTitle }}</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-3">
      <!-- card -->
      <div class="card mx-3 mb-4" style="max-width: 75%">
        <div class="row">
          <div class="col-4">
            <img
              class="card-img-top"
              src="../assets/img_placeholder.png"
              alt="Content-image"
            />
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">
                <span class="">{{ contentDetail.name }}</span>
              </h5>
              <div class="mb-3">
                Type:
                <button
                  class="rounded-pill border-0 pb-1 px-2"
                  style="
                    font-size: 12px;
                    background-color: #e64f09;
                    opacity: 0.8;
                  "
                >
                  {{ contentDetail.type.split("_").join(" ") }}
                </button>
              </div>
              <div class="mb-3">
                Muscle:
                <button
                  class="rounded-pill border-0 pb-1 px-2"
                  style="font-size: 12px; background-color: green; opacity: 0.8"
                >
                  {{ contentDetail.muscle.split("_").join(" ") }}
                </button>
              </div>
              <div class="mb-3">
                Equipment:
                <button
                  class="rounded-pill border-0 pb-1 px-2"
                  style="
                    font-size: 12px;
                    background-color: goldenrod;
                    opacity: 0.8;
                  "
                >
                  {{ contentDetail.equipment.split("_").join(" ") }}
                </button>
              </div>
              <div class="mb-3">
                Difficulity:
                <button
                  class="rounded-pill border-0 pb-1 px-2"
                  style="font-size: 12px; background-color: pink; opacity: 0.8"
                >
                  {{ contentDetail.difficulty.split("_").join(" ") }}
                </button>
              </div>
              <div class="my-3">
                Instructions:
                <p v-for="(el, i) in instructions">{{ i + 1 }}. {{ el }}</p>
              </div>
              <a
                href="#"
                class="btn btn-secondary w-100"
                @click.prevent="changePage('/articles')"
                >Back</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
