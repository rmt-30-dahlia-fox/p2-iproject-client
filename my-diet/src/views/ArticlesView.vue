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
    };
  },
  computed: {
    ...mapState(useMainStore, ["articles"]),
    ...mapWritableState(useMainStore, ["pageTitle"]),
  },
  methods: {
    ...mapActions(useMainStore, ["fetchArticles"]),
    infobutton() {
      if (this.info) {
        this.info = false;
      } else if (this.result) {
        this.result = false;
        this.info = true;
      } else {
        this.result = false;
        this.info = true;
      }
    },
    calculate() {
      console.log("calculate() ke trigger");
      this.Calc_BMI(this.params);
      this.info = false;
      this.result = true;
    },
  },
  created() {
    this.fetchArticles();

    if (this.$route.name == "article") {
      this.pageTitle = "Articles";
    }
  },
};
</script>

<template>
  <NavbarVue />
  <!-- content -->
  <div class="bg-dark m-5 p-4 rounded">
    <div class="position-relative pt-5">
      <div class="position-absolute top-50 start-50 translate-middle">
        <h3 class="my-5 text-light">{{ pageTitle }}</h3>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-4">
      <!-- card -->
      <articleCardVue v-for="content in articles" :content="content" />
    </div>
  </div>
</template>
