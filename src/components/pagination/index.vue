<template>
  <div class="pageButton">
    <button class="pageUpDown" @click="UpDownPage(true, null)">上一頁</button>
    <button
      v-if="total > 7 && currentPage > 4"
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
      v-if="total > 7 && currentPage < totalbtn - 3"
      class="FirstLastpage"
      @click="setPage(totalbtn - 1)"
    >
      {{ this.totalbtn }}
    </button>
    <button class="pageUpDown" @click="UpDownPage(null, true)">下一頁</button>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["bookFiles"],
  data() {
    return {
      List: [],
      page: 12, //每頁顯示的data數量
      currentPage: 1, //當前為第幾頁
      totalbtn: 0,
      pageListNum: 7, //顯示的頁碼數組長度
    };
  },
  mounted() {
    this.totalbtn = Math.ceil(this.bookFiles.length / this.page);
    this.setPage();
  },
  methods: {
    setPage(index) {
      // this.$emit('update-list', index);
      this.List = [];
      if (index === 0) {
        this.currentPage = 1;
      }
      if (index > 0) {
        this.currentPage = index + 1;
      }
      for (let i = this.pageStart; i < this.pageEnd; i++) {
        if (i >= this.bookFiles.length) {
          break;
        }
        this.List.push(this.bookFiles[i]);
      }
      this.$emit("update-list", this.List);
    },
    UpDownPage(reduce, add) {
      this.List = [];
      if (add) {
        if (this.currentPage == this.totalbtn) {
          // this.currentPage = this.totalbtn;s
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
        if (i >= this.bookFiles.length) {
          break;
        }
        this.List.push(this.bookFiles[i]);
      }
      this.$emit("update-list", this.List);
    },

  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.page;
    },
    pageEnd() {
      return this.currentPage * this.page;
    },
    total() {
      return Math.ceil(this.bookFiles.length / this.page);
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
};
</script>

<style scoped>
.pageButton {
  height: 100px;
}
.pageButton .middlepage {
  width: 32px;
  height: 32px;
  font-size: 14px;
  margin: 0px 3px;
  border: 0;
}
.pageButton button:hover {
  background-color: rgb(99, 108, 104);
}
.pageButton .pageUpDown {
  width: 64px;
  height: 32px;
  font-size: 14px;
  margin: 0px 5px;
  border: 0;
}
.pageButton .FirstLastpage {
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