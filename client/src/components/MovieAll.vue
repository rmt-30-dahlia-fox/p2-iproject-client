<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
import MovieSearch from "./MovieSearch.vue";
import MovieCard from "./MovieCard.vue";
import axios from "axios";
export default {
  components: { MovieSearch, MovieCard },
  data() {
    return {
      page: "",
      results: [],
      totalPage: "",
      totalResults: "",
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
    ...mapWritableState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async searchMovie(keyword) {
      try {
        if (!keyword) return this.errorHandler("Fill input search first");
        this.$router.push({ query: { search: keyword } });
        this.isLoading = true;
        const { data } = await axios.get(this.baseUrl + "/movies", {
          params: { keyword },
        });
        const { page, results, totalPage, totalResults } = data;
        this.page = page;
        this.results = results;
        this.totalPage = totalPage;
        this.totalResults = totalResults;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.errorHandler(error);
      }
    },
    clear() {
      this.page = "";
      this.results = [];
      this.totalPage = "";
      this.totalResults = "";
      this.$router.push("/home");
    },
  },
  created() {
    const { search } = this.$route.query;
    if (search) this.searchMovie(search);
  },
};
</script>

<template>
  <MovieSearch @search="searchMovie" @clear="clear" />
  <div v-if="results.length !== 0" class="movie-all">
    <div class="cards">
      <MovieCard v-for="el in results" :key="el.id" :el="el" />
    </div>
  </div>
</template>
