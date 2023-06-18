<template>
  <div class="GCheader">
    <div class="Fullcolor">
      <div class="mainTitle">
        <dl>紳士漫畫</dl>
      </div>
      <div class="title" @click="GoHome">
        <dl>首頁</dl>
      </div>
      <div class="title">
        <dl>最新</dl>
      </div>
      <div v-for="(item, index) in headerList" :key="index" class="title"
        @mouseenter="item.chang = true"
        @mouseleave="item.chang = false"
      >
        <dl>{{ item.title }}</dl>
        <dd v-if="item.chang">
          <a class="Doujinshi" v-for="child in item.list" @click="pageChange(child.link)">{{ child.text }}</a>
        </dd>
      </div>
      <!-- <div
        class="title"
        @mouseenter="doujinshiShow"
        @mouseleave="doujinshiHide"
      >
        <dl>同人誌</dl>
        <dd>
          <router-link to="/DoujinshiChiness" class="Doujinshi" v-show="chang"
            >漢化</router-link
          >
          <a class="Doujinshi" v-show="chang">日語</a>
          <a class="Doujinshi" v-show="chang">English</a>
          <a class="Doujinshi" v-show="chang">CG畫集</a>
          <a class="Doujinshi" v-show="chang">3D漫畫</a>
          <a class="Doujinshi" v-show="chang">Cosplay</a>
        </dd>
      </div>
      <div class="title" @mouseenter="bookletShow" @mouseleave="bookletHide">
        <dl>單行本</dl>
        <dd>
          <a class="booklet" v-show="chang1">漢化</a>
          <a class="booklet" v-show="chang1">日語</a>
          <a class="booklet" v-show="chang1">English</a>
        </dd>
      </div>
      <div class="title" @mouseenter="magazineShow" @mouseleave="magazineHide">
        <dl>雜誌&短篇</dl>
        <dd>
          <a class="magazine" v-show="chang2">漢化</a>
          <a class="magazine" v-show="chang2">日語</a>
          <a class="magazine" v-show="chang2">English</a>
        </dd>
      </div>
      <div
        class="title"
        @mouseenter="chang3 = true"
        @mouseleave="chang3 = false"
      >
        <dl>韓漫</dl>
        <dd v-if="chang3">
          <a class="KR" v-show="chang3">漢化</a>
          <a class="KR" v-show="chang3">其他</a>
        </dd>
      </div> -->
      <div class="title">
        <dl>論壇</dl>
      </div>
      <div class="login">
        <p>登入</p>
        <p>註冊</p>
      </div>
    </div>
  </div>
</template>

<script>
// import router from "@/router";

export default {
  name: "GCheader",
  data() {
    return {
      headerList: [
        {
          title: "同人誌",
          list: [
            { text: "漢化", link: "/DoujinshiChiness" },
            { text: "日語", link: "1" },
            { text: "English", link: "2" },
            { text: "CG畫集", link: "3" },
            { text: "3D漫畫", link: "4" },
            { text: "Cosplay", link: "5" },
          ],
          chang: false,
        },
        {
          title: "單行本",
          list: [
            { text: "漢化", link: "" },
            { text: "日語", link: "" },
            { text: "English", link: "" },
          ],
          chang: false,
        },
        {
          title: "雜誌&短篇",
          list: [
            { text: "漢化", link: "" },
            { text: "日語", link: "" },
            { text: "English", link: "" },
          ],
          chang: false,
        },
        {
          title: "韓漫",
          list: [
            { text: "漢化", link: "" },
            { text: "日語", link: "" },
          ],
          chang: false,
        },
      ],
    };
  },
  methods: {
    GoHome() {
      this.$router.push("/GentlemanComic");
    },
    pageChange(pageLink) {
      if(this.$route.path !== pageLink){
        this.$router.push({path:pageLink});
      }
      
      console.log(pageLink)
    },
  },

};
</script>

<style scoped>
.GCheader {
  width: 1200px;
  margin: 0 auto;
  height: 45px;
}
.GCheader .Fullcolor {
  height: 45px;
  width: 1200px;
  background-color: skyblue;
  position: absolute;
}
.GCheader .mainTitle {
  float: left;
  height: 45px;
  width: 130px;
  box-sizing: Border-box;
}
.GCheader .mainTitle dl {
  font-size: 20px;
  text-align: center;
  margin: 9.2px 0px;
}
.GCheader .title {
  float: left;
  width: 90px;
  height: 45px;
  box-sizing: Border-box;
  border: 1px solid #ddd;
}

.GCheader .title dl {
  display: block;
  font-size: 14px;
  margin: 10px 5px 16px 5px;
  text-align: center;
  box-sizing: Border-box;
}

.GCheader .title dd .Doujinshi {
  display: block;
  font-size: 14px;
  height: 45px;
  padding: 10px 0px;
  text-align: center;
  box-sizing: Border-box;
  background-color: rgb(168, 145, 190);
  border: 1px solid #ddd;
  /* display: none; */
}
.GCheader .title dd .Doujinshi:hover {
  opacity: 0.8;
}
.GCheader .title dd .booklet {
  display: block;
  font-size: 14px;
  height: 45px;
  padding: 10px 0px;
  text-align: center;
  box-sizing: Border-box;
  background-color: rgb(168, 145, 190);
  border: 1px solid #ddd;
}
.GCheader .title dd .booklet:hover {
  opacity: 0.8;
}
.GCheader .title dd .magazine {
  display: block;
  font-size: 14px;
  height: 45px;
  padding: 10px 0px;
  text-align: center;
  box-sizing: Border-box;
  background-color: rgb(168, 145, 190);
  border: 1px solid #ddd;
}
.GCheader .title dd .magazine:hover {
  opacity: 0.8;
}
.GCheader .title dd .KR {
  display: block;
  font-size: 14px;
  height: 45px;
  padding: 10px 0px;
  text-align: center;
  box-sizing: Border-box;
  background-color: rgb(168, 145, 190);
  border: 1px solid #ddd;
}
.GCheader .title dd .KR:hover {
  opacity: 0.8;
}
.GCheader .login {
  display: inline-block;
  /* float: right; */
  display: flex;
  flex-direction: row-reverse;
}
</style>