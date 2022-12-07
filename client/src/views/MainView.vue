<script>
import { mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading.css";
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  components: { HeaderBar, FooterBar, Loading },
  computed: {
    ...mapState(useGlobalStore, ["isLoading"]),
  },
};
</script>

<template>
  <div class="main-page">
    <section>
      <HeaderBar />
    </section>
    <section>
      <loading
        v-model:active="isLoading"
        :can-cancel="true"
        :is-full-page="false"
        :color="'#fff'"
        :background-color="'black'"
        :blur="null"
        :opacity="0.7"
      />
      <main>
        <RouterView />
      </main>
    </section>
    <section>
      <FooterBar />
    </section>
  </div>
</template>
