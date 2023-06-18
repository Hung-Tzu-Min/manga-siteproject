<template>
  <div>
    <MyHeader v-show="$route.meta.show"/>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    <!-- <MyList /> -->

  </div>
</template>

<script>
import MyHeader from "./components/header/Header.vue";
import Footer from "./components/Footer/index.vue"

// import MyList from "./components/Bodywrap/List.vue";


export default {
  name: "App",
  methods: {},
  components: {
    MyHeader: MyHeader,
    Footer,
    // MyList,
  },
};
</script>

<style>
</style>
