<template>
  <div class="aComic">
    <div class="cc">
      <div class="directory">
        <a>首頁</a>
        <em>></em>
        <a>同人誌</a>
        <em>></em>
        <a>漢化</a>
        <em>></em>
        {{ this.book.name }}
      </div>
      <div class="comic_info">
        <h2>{{ this.book.name }}</h2>
        <div class="asTB">
          <div class="useDown">
            <img :src="this.book.image" />
            <div>
              <a>下拉閱讀</a>
              <a>加入書架</a>
              <a>下載漫畫</a>
            </div>
          </div>
          <div class="useTag">
            <label>分類:同人誌/漢化</label>
            <label>頁數:190</label>
            <div>
              標籤
              <a></a>
              <a></a>
            </div>
            <p>簡介</p>
          </div>
          <div class="useInfo">
            <a>
              <img />
              <p>username</p>
            </a>
            <p>投稿作品<font color="#D70202">1xxx</font>部</p>
            <p>關注<font color="#1382EB">150</font></p>
            <p>粉絲<font color="#F204A1">69</font></p>
            <a>關注</a>
            <a>私信</a>
            <div>簽名:來吧，試著打倒我吧！然後我將成為活著的傳說！</div>
          </div>
        </div>
      </div>
      <div class="gallery">
        <ul>
          <li v-for="(file, index) in newfiles" >
            <div class="pic_box" @click="zoomIn(file)">
              <img :src="file.filePath" />
            </div>
            <div class="info">
              <div class="info_title">{{ file.fileName }}</div>

              <div class="info_col">上傳於 {{ file.uploadtime }}</div>
            </div>
          </li>
        </ul>
      </div>
      <pagination :bookFiles="bookFiles" @update-list="handleUpdateList" />
      <!--@childByValue="pageData"-->
    </div>
  </div>
</template>

<script>
import pagination from "@/components/pagination/index.vue";
export default {
  name: "comicbody",
  components: { pagination },
  /*props: ["用$router.push傳值，接收值的組件，該組件旗下的子組件都可以用
             this.$route.params.xxxxx or this.$route.query.xxxxx  接收到值
            因此根本不需要在用props傳一次   "],*/
  data() {
    return {
      book: {
        id: null,
        name: null,
        image: null,
        files: [],
        uploadtime: null,
      },
      newfiles: [],
    };
  },
  created() {
   
    
    this.book.id = JSON.parse(sessionStorage.getItem("id"));
    this.book.name = JSON.parse(sessionStorage.getItem("name"));
    this.book.image = JSON.parse(sessionStorage.getItem("image"));
    this.book.files = JSON.parse(sessionStorage.getItem("files"));
    this.book.uploadtime = JSON.parse(sessionStorage.getItem("uploadtime"));
  },
  mounted() {
    // this.render(this.$route.params.id)


  },
  methods: {
    // render(id){
    //   const files = this.$store.state.mockData[id].files
    //   const imageFiles = files.keys();
    //   console.log(imageFiles)
    // },
    handleUpdateList(value) {
      this.newfiles = [];
      for (let i = 0; i < value.length; i++) {
        this.newfiles.push(value[i]);
      }
    },
    zoomIn(info){
      console.log(info)
      this.$router.push({path:'/SeeEveryPage'})

      sessionStorage.setItem("fileName", JSON.stringify(info.fileName));
      sessionStorage.setItem("filePath", JSON.stringify(info.filePath));
      sessionStorage.setItem("fileList", JSON.stringify(this.book.files));
    }
  },
  computed: {
    bookFiles() {
      return this.book.files;
    },
   
  },
};
</script>

<style scoped>
.aComic {
  margin: 20px 0px 0px 0px;
}
.aComic .cc {
  width: 1300px;
  margin: 0px auto;
}
.aComic .cc .directory {
  width: 1200px;
  height: 30px;
  margin: 10px 0px;
  padding: 0px 0px 0px 50px;
  border-bottom: 1px solid rgb(206, 206, 185);
}
.aComic .cc .comic_info {
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0px 0px 0px 0px;
  margin: 10px 0px 0px 50px;
  border: 4px solid #bab9b9;
}
.aComic .cc .comic_info h2 {
  color: #333;
  margin: 8px 8px 0px 8px;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #bebebe;
  padding: 4px 0px 8px 0px;
}
.aComic .cc .comic_info .asTB {
  height: 500px;
  display: flex;
}
.aComic .cc .comic_info .asTB .useDown {
  margin: 18px 0px 0px 0px;
  width: 23.93%;
  text-align: center;
}
.aComic .cc .comic_info .asTB .useDown img {
  width: 244.47px;
  height: 302px;
  object-fit: cover;
}
.aComic .cc .comic_info .asTB .useDown div {
  margin: 50px 0px 0px 0px;
}
.aComic .cc .comic_info .asTB .useDown a {
  display: inline-block;
  width: 130px;
  height: 20px;
  padding: 8px 14px 4px;
  margin: 4px;
  color: azure;
  background-color: #57a957;
}
.aComic .cc .comic_info .asTB .useTag {
  margin: 18px 0px 0px 0px;
  width: 48.03%;
}
.aComic .cc .comic_info .asTB .useInfo {
  width: 28.03%;
  background-color: #cececc;
}
.aComic .cc .gallery {
  margin: 45px 0px 0px 0px;
}
.aComic .cc .gallery ul {
  display: flex;
  /* justify-content:space-between ; */
  flex-wrap: wrap;
}
.aComic .cc .gallery li {
  display: inline-block;
  width: 16.667%;
  height: 334px;
  margin: 0px 0px 20px 0px;
  border-bottom: 1px solid rgb(192, 190, 190);
}
.aComic .cc .gallery .pic_box {
  width: 200px;
  height: 265px;
  padding: 0px 8px;
}
.aComic .cc .gallery .pic_box img {
  width: 200px;
  height: 265px;
  object-fit: cover;
  border-radius: 3%;
}
.aComic .cc .gallery .info {
  margin: 10px 0px 0px 0px;
  padding: 0px 12.5px;
}
.aComic .cc .gallery .info .info_title {
  height: 20px;
  width: 200px;
  line-height: 1.5;
  overflow: hidden;
  font-size: 14px;
}
.aComic .cc .gallery .info .info_col {
  margin: 15px 0px;
  font-size: 12px;
  color: #999;
}
</style>