<script>
export default {
  data() {
    return {
      keyword: this.$route.query.search || "",
    };
  },
};
</script>

<template>
  <div class="search">
    <input
      @keyup.enter="$emit('search', keyword)"
      v-model="keyword"
      class="form-control"
      type="text"
    />
    <button @click="$emit('search', keyword)" class="rounded">Search</button>
    <button @click="$emit('clear'), (keyword = '')" class="rounded">
      Clear
    </button>
  </div>
</template>
