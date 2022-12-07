<script>
import axios from "axios";
import MovieList from "../components/MovieList.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  components: { MovieList },
  data() {
    return {
      currentlyWatch: [],
      unwatched: [],
      watched: [],
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
    ...mapWritableState(useGlobalStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler", "successHandler"]),
    async getBookmark() {
      try {
        const { access_token } = localStorage;
        const { data } = await axios.get(this.baseUrl + "/bookmark", {
          headers: {
            access_token,
          },
        });
        this.currentlyWatch = data["Currently watch"];
        this.unwatched = data.Unwatched;
        this.watched = data.Watched;
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async toCurrent(id) {
      try {
        const { access_token } = localStorage;
        const { data } = await axios.patch(
          this.baseUrl + "/bookmark/" + id,
          {
            status: "Currently watch",
          },
          {
            headers: { access_token },
          }
        );
        this.successHandler(data.message);
        this.getBookmark();
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async toWatched(id) {
      try {
        const { access_token } = localStorage;
        const { data } = await axios.patch(
          this.baseUrl + "/bookmark/" + id,
          {
            status: "Watched",
          },
          {
            headers: { access_token },
          }
        );
        this.successHandler(data.message);
        this.getBookmark();
      } catch (error) {
        this.errorHandler(error);
      }
    },
    async toDelete(id) {
      try {
        const { access_token } = localStorage;
        const { data } = await axios.delete(this.baseUrl + "/bookmark/" + id, {
          headers: { access_token },
        });
        this.successHandler(data.message);
        this.getBookmark();
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  async created() {
    this.isLoading = true;
    await this.getBookmark();
    this.isLoading = false;
  },
};
</script>

<template>
  <MovieList
    v-if="unwatched"
    :data="unwatched"
    title="Unwatched"
    btnText="Update"
    @updateBookmark="toCurrent"
  />
  <MovieList
    v-if="currentlyWatch"
    :data="currentlyWatch"
    title="Currently watch"
    btnText="Update"
    @updateBookmark="toWatched"
  />
  <MovieList
    v-if="watched"
    :data="watched"
    title="Watched"
    class="watched"
    btnText="Delete"
    @updateBookmark="toDelete"
  />
</template>
