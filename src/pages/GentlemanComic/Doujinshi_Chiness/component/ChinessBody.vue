<template>
  <div class="DCbody">
    <div class="cc">
      <div class="directory">
        <a>首頁</a>
        <em>></em>
        <a>同人誌</a>
        <em>></em>
        漢化
      </div>
      <div class="search">
        <div class="search_sort">
          <button>創建時間</button>
          <button>上傳時間</button>
          <button>圖片數</button>
        </div>
        <div class="search_function">
          <input type="text" placeholder="搜索漫畫" v-model="keyword" />
          <button @click="search_info">找</button>
        </div>
      </div>
      <DoujinshiChinessbodygallery
        :searchList="searchList"
        v-if="searchList != ''"
      />
      <div class="imageDisplay" v-if="searchList == ''">
        <div class="gallery">
          <ul>
          
            <li v-for="(item, index) in List">
              <div class="pic_box" @click="enterComic(item, index)">
                <img :src="item.image" />
              </div>
              <div class="info">
                <div class="info_title" @click="enterComic(item, index)">
                  <a :title="item.name">{{ item.name }}</a>
                </div>
                <div class="info_col">
                  <i>創建於{{ item.uploadtime }}，</i>
                  <i>{{ item.num }}張照片</i>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="pageButton">
          <button class="pageUpDown" @click="UpDownPage(true, null)">
            上一頁
          </button>
          <button
            v-if="currentPage > 4"
            class="FirstLastpage"
            @click="setPage(0)"
          >
            1
          </button>
          <button
            class="middlepage"
            v-for="(btn, index) in test.end"
            :key="index"
            v-if="btn >= test.start"
            @click="setPage(index)"
            :class="{ highlight: currentPage == index + 1 }"
          >
            {{ index + 1 }}
          </button>
          <button
            v-if="currentPage < total - 3"
            class="FirstLastpage"
            @click="setPage(total - 1)"
          >
            {{ total }}
          </button>
          <button class="pageUpDown" @click="UpDownPage(null, true)">
            下一頁
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoujinshiChinessbodygallery from "./gallery.vue";
export default {
  name: "DoujinshiChinessBody",
  components: { DoujinshiChinessbodygallery },
  props: ["DCbodyData"],
  data() {
    return {
      List: [],
      searchList: [],
      vuexdata: [],
      fileData: [],
      page: 12, //每頁顯示的data數量
      currentPage: 1, //當前為第幾頁
      pageListNum: 7, //顯示的頁碼數組長度
      keyword: "",
    };
  },
  methods: {
    setPage(index) {
      this.List = [];
      if (index === 0) {
        this.currentPage = 1;
      }
      if (index > 0) {
        this.currentPage = index + 1;
      }
      for (let i = this.pageStart; i < this.pageEnd; i++) {
        if (i >= this.vuexdata.length) {
          break;
        }
        this.List.push(this.vuexdata[i]);
      }
    },
    UpDownPage(reduce, add) {
      this.List = [];
      if (add) {
        if (this.currentPage == this.total) {
          this.currentPage = this.total;
          alert("已達最後一頁");
        } else {
          this.currentPage += 1;
        }
      }
      if (reduce) {
        this.currentPage -= 1;
        if (this.currentPage == 0) {
          this.currentPage = 1;
        }
      }
      for (let i = this.pageStart; i < this.pageEnd; i++) {
        if (i >= this.vuexdata.length) {
          break;
        }
        this.List.push(this.vuexdata[i]);
      }
    },
    search_info() {
      this.searchList = [];
      if (this.keyword != "") {
        for (let i = 0; i < this.vuexdata.length; i++) {
          if (this.vuexdata[i].name.indexOf(this.keyword) > -1) {
            this.searchList.push(this.vuexdata[i]);
          }
        }
      } else {
        this.setPage(0);
      }
    },
    enterComic(info, index) {
      this.getfile(info.id - 1);

      this.$router.push({
        name: "Acomic",
        params: {
          id: info.id,
        },
      });

      sessionStorage.setItem("id", JSON.stringify(info.id));
      sessionStorage.setItem("name", JSON.stringify(info.name));
      sessionStorage.setItem("image", JSON.stringify(info.image));
      sessionStorage.setItem("files", JSON.stringify(this.fileData));
      sessionStorage.setItem("uploadtime", JSON.stringify(info.uploadtime));
    },
    getfile(val) {
      const files = this.DCbodyData[val].files;
      const imageFiles = files.keys();

      imageFiles.forEach((file) => {
        const filePath = files(file);
        const fileName = file.split("/").pop();
        const uploadtime = this.DCbodyData[val].uploadtime;
        this.fileData.push({ filePath, fileName, uploadtime });
      });
    },
  },
  mounted() {
    this.vuexdata = this.$store.state.mockData;
    this.setPage(0);
    console.log("組件中", this.$store.state.mockData);
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.page;
      //取得該頁第一個值的index
    },
    pageEnd() {
      return this.currentPage * this.page;
      //取得該頁最後一個值的index
    },
    total() {
      return Math.ceil(this.vuexdata.length / this.page);
    },
    test() {
      const { currentPage, pageListNum, total } = this;
      let start = 0,
        end = 0;
      if (pageListNum > total) {
        start = 1;
        end = total;
      } else {
        start = currentPage - Math.floor(pageListNum / 2);
        end = currentPage + Math.floor(pageListNum / 2);
        if (start < 1) {
          start = 1;
          end = pageListNum;
        }
        if (end > total) {
          start = total - pageListNum + 1;
          end = total;
        }
      }
      return { start, end };
    },
  },
  watch: {
    List: {
      handler(newValue, oldValue) {
       
      },
    },
  },
};
</script>

<style scoped>
.DCbody {
  margin: 20px 0px 0px 0px;
}
.DCbody .cc {
  width: 1300px;
  margin: 0px auto;
}
.DCbody .cc .directory {
  margin: 10px 0px;
  padding: 0px 0px 0px 50px;
}
.DCbody .cc .search {
  border-top: 1px solid rgb(206, 206, 185);
  padding: 15px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
}
.DCbody .cc .search .search_sort button {
  border: 0;
  height: 29px;
  width: 68px;
  margin: 0px 5px 0px 0px;
  opacity: 0.8;
}
.DCbody .cc .search .search_sort button:hover {
  opacity: 1;
  color: black;
}
.DCbody .cc .search .search_function {
  /* background-color: brown; */
  max-width: 250px;
  max-height: 29px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.DCbody .cc .search .search_function input {
  width: 200px;
  height: 29px;
  border: none;
  padding-left: 10px;
}
.DCbody .cc .search .search_function button {
  display: inline-block;
  width: 29px;
  height: 29px;
  border: none;
}
.DCbody .cc .imageDisplay {
  margin: 40px 0px 0px 0px;
}
.DCbody .cc .imageDisplay .gallery ul {
  display: flex;
  /* justify-content:space-between ; */
  flex-wrap: wrap;
}
.DCbody .cc .imageDisplay .gallery li {
  display: inline-block;
  width: 25%;
  height: 515px;

  margin: 0px 0px 20px 0px;
  border-bottom: 1px solid rgb(192, 190, 190);
}
.DCbody .cc .imageDisplay .gallery .pic_box {
  width: 300px;
  height: 430px;
  padding: 0px 12.5px;
}
.DCbody .cc .imageDisplay .gallery .pic_box img {
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 3%;
}
.DCbody .cc .imageDisplay .gallery .info {
  margin: 10px 0px 0px 0px;
  padding: 0px 12.5px;
}
.DCbody .cc .imageDisplay .gallery .info .info_title {
  height: 40px;
  width: 300px;
  line-height: 1.5;
  overflow: hidden;
  font-size: 14px;
}
.DCbody .cc .imageDisplay .gallery .info .info_title a {
  color: #333;
}
.DCbody .cc .imageDisplay .gallery .info .info_col {
  margin: 10px 0px;
  font-size: 12px;
}
.DCbody .cc .imageDisplay .gallery .info .info_col i {
  margin: 0px 5px 0px 0px;
  color: #999;
}
.DCbody .cc .imageDisplay .pageButton {
  height: 100px;
}
.DCbody .cc .imageDisplay .pageButton .middlepage {
  width: 32px;
  height: 32px;
  font-size: 14px;
  margin: 0px 3px;
  border: 0;
}
.DCbody .cc .imageDisplay .pageButton button:hover {
  background-color: rgb(99, 108, 104);
}
.DCbody .cc .imageDisplay .pageButton .pageUpDown {
  width: 64px;
  height: 32px;
  font-size: 14px;
  margin: 0px 5px;
  border: 0;
}
.DCbody .cc .imageDisplay .pageButton .FirstLastpage {
  width: 32px;
  height: 32px;
  font-size: 14px;
  margin: 0px 3px;
  border: 0;
  /* border-color: red; */
}
.highlight {
  background: skyblue !important;
}
</style>