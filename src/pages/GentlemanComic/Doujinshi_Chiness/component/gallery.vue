<template>
  <div class="imageDisplay">
    <div class="gallery">
      <ul>
        <li v-for="item in Lists">
          <div class="pic_box"><img :src="item.image" /></div>
          <div class="info">
            <div class="info_title">
              <a :title="item.name">{{ item.name }}</a>
            </div>
            <div class="info_col">{{ item.info }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pageButton">
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
      <!-- <button
        class="middlepage"
        v-for="(btn, index) in totalbtn"
        :key="index"
        @click="setPage(index)"
        :class="{ highlight: currentPage == index + 1 }"
      >
        {{ index + 1 }}
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  props: ["searchList"],
  data() {
    return {
      Lists: [],
      page: 12, //每頁顯示的data數量
      currentPage: 1, //當前為第幾頁
      // totalbtn: 0, 
      pageListNum: 7, //顯示的頁碼數組長度
    };
  },
  updated() {
    // this.totalbtn = Math.ceil(this.searchList.length / this.page);
  },
  mounted() {
    this.setPage(0);
  },

  methods: {
    setPage(index) {
      this.Lists = [];
      if (index === 0) {
        this.currentPage = 1;
      }
      if (index > 0) {
        this.currentPage = index + 1;
      }
      for (let i = this.pageStart; i < this.pageEnd; i++) {
        if (i >= this.searchList.length) {
          break;
        }
        this.Lists.push(this.searchList[i]);
      }
    },
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
      return Math.ceil(this.searchList.length / this.page);
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
    searchList: {
      handler(newValue, oldValue) {
        this.Lists = [];
        if (this.searchList === newValue) {
          for (let i = this.pageStart; i < this.pageEnd; i++) {
            if (i >= this.searchList.length) {
              break;
            }
            this.Lists.push(this.searchList[i]);
          }
        }
      },
    },
  },
};
</script>

<style scoped>
.imageDisplay {
  margin: 40px 0px 0px 0px;
}
.imageDisplay .gallery ul {
  display: flex;
  /* justify-content:space-between ; */
  flex-wrap: wrap;
}
.imageDisplay .gallery li {
  display: inline-block;
  width: 25%;
  height: 515px;

  margin: 0px 0px 20px 0px;
  border-bottom: 1px solid rgb(192, 190, 190);
}
.imageDisplay .gallery .pic_box {
  width: 300px;
  height: 430px;
  padding: 0px 12.5px;
}
.imageDisplay .gallery .pic_box img {
  width: 300px;
  height: 430px;
  object-fit: cover;
  border-radius: 3%;
}
.imageDisplay .gallery .info {
  margin: 10px 0px 0px 0px;
  padding: 0px 12.5px;
}
.imageDisplay .gallery .info .info_title {
  height: 40px;
  width: 300px;
  line-height: 1.5;
  overflow: hidden;
  font-size: 14px;
}
.imageDisplay .gallery .info .info_col {
  margin: 10px 0px;
  font-size: 12px;
}
.imageDisplay .pageButton {
  height: 100px;
}
.imageDisplay .pageButton .middlepage {
  width: 32px;
  height: 32px;
  font-size: 14px;
  margin: 0px 3px;
  border: 0;
}
.imageDisplay .pageButton button:hover {
  background-color: rgb(99, 108, 104);
}
.imageDisplay .pageButton .pageUpDown {
  width: 64px;
  height: 32px;
  font-size: 14px;
  margin: 0px 5px;
  border: 0;
}
.imageDisplay .pageButton .FirstLastpage {
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