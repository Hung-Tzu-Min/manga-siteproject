<template>
  <div>
    <GCheader />
    <GCbody />
  </div>
</template>

<script>
import GCheader from "./GCheader/index.vue";
import GCbody from "./GCbody/index.vue";

export default {
  name: "GentlemanComic",
  components: {
    GCheader,
    GCbody,
  },
  mounted() {
  
  },
};
</script>

<style scoped>
div {
  background: #dbdbdb;
}
</style>