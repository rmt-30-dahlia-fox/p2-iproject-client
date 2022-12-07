<script>
import {mapState} from 'pinia';
import {useGlobalStore} from '../stores/global';

export default {
  props: ["data"],
  computed: {
    ...mapState(useGlobalStore, ["baseURL"]),
  },
}
</script>

<template v-if="data">
<video v-if="data.format.startsWith('video')" style="height: calc(100vh - 140px);" class="bg-cover" controls>
  <source :src="`${baseURL}/media/${data.hash}`" :type="data.format">
  Unsupported video.
</video>

<audio v-if="data.format.startsWith('audio')" controls>
  <source :src="`${baseURL}/media/${data.hash}`" :type="data.format">
  Unsupported audio.
</audio>

<img v-if="data.format.startsWith('image')" style="height: calc(100vh - 140px);" class="bg-cover" :src="`${baseURL}/media/${data.hash}`" :type="data.format">
</template>

<style></style>
