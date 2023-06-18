<template>
  <div class="HomeList">
    <div class="middle">
      <div class="cc">
        <div class="title">
          <h1>{{ subject }}</h1>
          <em>{{ subheading }}</em>
        </div>
        <div class="more">
          <a>更多>></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newest",
  props: ['subject','subheading'],
};
</script>

<style scoped>
.HomeList {
  margin: 20px 0px 0px 0px;
}
.HomeList .middle {
  width: 1300px;
  margin: 0px auto;
}
.HomeList .middle .cc {
  border-bottom-style: double;
  height: 40px;
}
.HomeList .middle .cc .title {
  display: inline-block;
}
.HomeList .middle .cc .title h1 {
  font-size: 24px;
  display: inline-block;
  margin: 0px 10px 0px 0px;
}
.HomeList .middle .cc .title em {
  font-size: 20px;
  color: #4791d0;
}
.HomeList .middle .cc .more {
  float: right;
  color: red;
  font-size: 16px;
  margin: 10px 0px;
}
</style>