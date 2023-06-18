<template>
  <div>
    <Newest subject="最新" subheading="更新"></Newest>
    <pictureList></pictureList>
    <Newest subject="同仁誌" subheading="CG畫集"></Newest>
    <pictureList></pictureList>
    <Newest subject="單行本" subheading="漫畫"></Newest>
    <pictureList></pictureList>
    <Newest subject="雜誌" subheading="短篇"></Newest>
    <pictureList></pictureList>
    <Newest subject="韓國" subheading="漫畫"></Newest>
    <pictureList></pictureList>
    <Newest subject="Cosplay" subheading="寫真"></Newest>
    <pictureList></pictureList>
  </div>
</template>

<script>
import Newest from "./ListTitle/newest.vue";
import pictureList from "./pictureList/index.vue"
export default {
  name: "GCbody",
  components: {
    Newest,
    pictureList,
  }, 
};
</script>

<style scoped>
</style>