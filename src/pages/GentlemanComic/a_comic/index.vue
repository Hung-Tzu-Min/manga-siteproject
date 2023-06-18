<template>
  <div>
    <GCheader />
    <AComicBody />
  </div>
</template>

<script>
import GCheader from "../GCheader/index.vue";
import AComicBody from "./component/comicBody.vue";
export default {
  name: "comic",
  components: {
    GCheader,
    AComicBody,
  },
};
</script>

<style scoped>
div {
  background: #dbdbdb;
}
</style>