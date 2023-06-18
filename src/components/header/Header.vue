<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <a href="###">登入</a>
            <a href="###" class="register">免费注册</a>
            <router-link to="/GentlemanComic">我的本子網頁</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的訂單</a>
          <a href="###">我的購物車</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="msg"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
        msg:'',
    };
  },
  methods:{
    goSearch(){
        this.$router.push('/search')
    },
  }
};
</script>

<style scoped>
.header > .top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header > .top .container {
  width: 1200px;
  margin: 0 auto; /*水平居中*/
  overflow: hidden;
}
.header > .top .container .loginList {
  float: left; /*將右側的隱藏空間讓出來,並讓排在下方的元素,提至右側並排，並且讓自己移到最左側*/
}
.header > .top .container .loginList p {
  float: left;
  margin-right: 10px;
}
/* 下面這行主要用於顯示"登入&註冊"中間的一個灰色分隔線
   ，並調整登入&註冊的間距 */
.header > .top .container .loginList p .register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.header > .top .container .typeList {
  float: right; /*將左側的隱藏空間讓出來,並讓排在下方的元素,提至左側並排，並且讓自己移到最右側*/
}
/* 下面這行是用於調整清單列中每一個元素的間距 */
.header > .top .container .typeList a {
  padding: 0 10px;
}
/* 
    下面這行是用於顯示表單列中間的灰色分隔線。
    並且使用了a+a,代表除開第1個<a>標籤,後面的<a>都會套上
    下面的效果 (因此"我的訂單"並沒有出現左外框)
*/
.header > .top .container .typeList a + a {
  border-left: 1px solid #b3aeae;
}
.header > .bottom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 
    讓排在logo下方的搜尋輸入框,往右並往上移,並讓logo至於最左側
*/
.header > .bottom .logoArea {
  float: left;
}
/* 
    下面這行用於設定logo的像素大小,
    並且上下外距設25px,左右外距為45px
*/
.header > .bottom .logoArea .logo img {
  width: 175px;
  margin: 25px 45px;
}
.header > .bottom .searchArea {
  float: right;   /*用意為置右靠齊*/
  margin-top: 35px;
}
/* 
    不懂,需要隱藏甚麼?
*/
.header > .bottom .searchArea .searchForm {
  overflow: hidden;
}
/* 
    下面這行用於設定搜尋的輸入框
*/
.header > .bottom .searchArea .searchForm input {
  box-sizing: border-box; 
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  float: left;
  
}
/* 
    下面這行用於設定使用者點擊搜尋輸入框後的樣式變化
    利用 :focus
*/
.header > .bottom .searchArea .searchForm input:focus {
  outline: none;  /*將 outline 设置为 0 或 none 会移除浏览器的默认聚焦样式*/
  
}
/*
    設定搜尋按鈕
*/
.header > .bottom .searchArea .searchForm button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;  /*關閉border樣式,有助減少內存消耗*/
  color: #fff;
  float: left;
  cursor: pointer; /*讓游標變成手指圖案*/
}
/*
    下面這行用於設定使用者點擊搜尋鈕後的樣式變化
    (不過上面border:none之後,其實也看不出來多這行有甚麼變化...)
*/
.header > .bottom .searchArea .searchForm button:focus {
  outline: none;  /*移除浏览器的默认聚焦样式*/
}
</style>