<script>
export default {
  props: ["el", "btnText"],
  data() {
    return {
      btnStyle: {},
    };
  },
  methods: {
    toDetail() {
      let id;
      if (this.$route.path === "/home") id = this.el.id;
      if (this.$route.path === "/bookmark") id = this.el.movie_id;
      this.$router.push({ name: "detail", params: { id } });
    },
  },
  created() {
    if (this.btnText === "Update")
      this.btnStyle = { backgroundColor: "black", color: "#f2f6f5" };
    if (this.btnText === "Delete")
      this.btnStyle = { backgroundColor: "black", color: "#f2f6f5" };
  },
};
</script>

<template>
  <div class="movie-card">
    <div @click="toDetail" class="img">
      <img :src="'https://image.tmdb.org/t/p/original' + el.poster_path" />
      <div>
        <h6>{{ el.title }}</h6>
      </div>
    </div>
    <div>
      <button
        v-if="$route.path === '/bookmark'"
        :style="btnStyle"
        @click="$emit('updateBookmark', el.id)"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>
