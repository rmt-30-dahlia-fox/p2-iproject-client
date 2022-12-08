<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";

export default {
  props: ["content"],
  data() {
    return {
      params: { type: "", muscle: "", difficulty: "", offset: "" },
      info: false,
      result: false,
    };
  },
  created() {
    this.params.type = this.content.type;
    this.accountInfo();
    // console.log(this.UserId, " --- ", this.UserAccount);
  },
  computed: {
    ...mapState(useMainStore, ["UserId", "UserAccount"]),
    ...mapWritableState(useMainStore, ["contentDetail"]),
  },
  methods: {
    ...mapActions(useMainStore, [
      "fetchArticles",
      "getTokenMidtrans",
      "accountInfo",
      "changePage",
    ]),

    premiumHandler() {
      this.accountInfo();

      if (this.UserAccount === "normal") this.getTokenMidtrans(15612);
      else {
        this.contentDetail = this.content;
        this.changePage("/articles-detail");
      }
    },
  },
};
</script>

<template>
  <div class="card mx-3 mb-4" style="width: 18rem">
    <img
      class="card-img-top"
      src="../assets/img_placeholder.png"
      alt="Content-image"
    />
    <div class="card-body">
      <h5 class="card-title">
        <span
          class="crop-text"
          style="
            max-width: 240px;
            max-height: 45px;
            line-height: 30px;
            text-align: left;
          "
          >{{ content.name }}</span
        >
      </h5>
      <div class="mb-4">
        <button
          @click="fetchArticles(params)"
          class="rounded-pill border-0 pb-1 px-2"
          style="font-size: 12px; background-color: #e64f09; opacity: 0.8"
        >
          {{ content.type.split("_").join(" ") }}
        </button>
      </div>
      <a
        href="#"
        class="btn btn-primary w-100"
        @click.prevent="premiumHandler()"
        >Read more</a
      >
    </div>
  </div>
</template>

<style>
.crop-text {
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
