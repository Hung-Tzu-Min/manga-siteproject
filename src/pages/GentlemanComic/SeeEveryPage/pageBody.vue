<template>
  <div class="SeeEveryPage">
    <div class="bread_cc">
      <div class="bread">
        <a>首頁</a>
        <em>></em>
        <a>同人誌</a>
        <em>></em>
        <a>漢化</a>
        <em>></em>
        <a>{{ pageData.title }}</a>
        <em>></em>
        {{ pageData.name }}
      </div>
    </div>
    <div class="picturearea_cc">
      <div class="picturearea">
        <img :src="pageData.path" @click="nextpic(pNum)" />
      </div>
    </div>
    <div class="photo_info">
      <h1>{{ pageData.name }}</h1>
    </div>
    <div class="pagingarea_cc">
      <div class="pagingarea">
        <span>
          <b>{{ pNum }}</b
          >/{{ pagetotal }}
        </span>
        <div class="control">
          <button @click="handleClick(pNum, up)">上一頁</button>
          <label>
            <select v-model="pNum" class="dropdown" @change="selectPage($event)">
              <option v-for="(item, index) in pageData.List" :value="index+1">
                第{{ item.fileId }}頁
              </option>
            </select>
          </label>
          <button @click="handleClick(pNum, down)" >下一頁</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageBody",
  data() {
    return {
      pageData: {
        name: null,
        path: null,
        List: [],
        id: null,
        title:'',
      },
      pNum: 1,
      TEST: 0,
    };
  },
  created() {
    this.pageData.name = JSON.parse(sessionStorage.getItem("fileName"));
    this.pageData.path = JSON.parse(sessionStorage.getItem("filePath"));
    this.pageData.List = JSON.parse(sessionStorage.getItem("files"));
    this.pageData.id = JSON.parse(sessionStorage.getItem("fileId"));
    this.pageData.title = JSON.parse(sessionStorage.getItem("name"));
  },
  mounted() {
    this.countpNum();
  },
  methods: {
    selectPage(event) {
      console.log(event.target.value);
      // const str = event.target.value.slice(1,6)
      // const num = parseInt(str)
      const num = event.target.value.replace(/[^0-9]/gi, "");
      this.pageData.path = this.pageData.List[num - 1].filePath;
      this.pageData.name = this.pageData.List[num - 1].fileName;
      this.pNum = Number(num);
    },
    countpNum() {
      const val = this.pageData.name.replace(/[^0-9]/gi, "");
      this.pNum = Number(val);
    },
    nextpic(value) {
      console.log("首次拿到的值", value);
      this.pNum = value + 1;
      if (value >= this.pageData.List.length) {
        this.pageData.path = this.pageData.List[0].filePath;
        this.pageData.name = this.pageData.List[0].fileName;
        this.pNum = 1;
      } else {
        this.pageData.path = this.pageData.List[this.pNum - 1].filePath;
        this.pageData.name = this.pageData.List[this.pNum - 1].fileName;
      }
      console.log("處理後的值", this.pNum);
    },
    handleClick(value, judge) {
    
      if (judge === "up") {
        this.pNum = value - 1;
        if (this.pNum <= 0) {
          this.pageData.path = this.pageData.List[this.pagetotal-1].filePath;
          this.pageData.name = this.pageData.List[this.pagetotal-1].fileName;
          this.pNum = this.pagetotal;
        } else {
          this.pageData.path = this.pageData.List[this.pNum - 1].filePath;
          this.pageData.name = this.pageData.List[this.pNum - 1].fileName;
        }
      } else if (judge === "down") {
        this.pNum = value + 1;
        if (value >= this.pageData.List.length) {
          this.pageData.path = this.pageData.List[0].filePath;
          this.pageData.name = this.pageData.List[0].fileName;
          this.pNum = 1;
        } else {
          this.pageData.path = this.pageData.List[this.pNum - 1].filePath;
          this.pageData.name = this.pageData.List[this.pNum - 1].fileName;
        }
      }
    },
   
  },
  computed: {
    pagetotal() {
      return this.pageData.List.length;
    },
    up() {
      return "up";
    },
    down() {
      return "down";
    },
  },
};
</script>

<style scoped>
.SeeEveryPage {
  margin: 40px 0px 0px 0px;
}
.SeeEveryPage .bread_cc {
  width: 1200px;
  margin: 0px auto;
}
.SeeEveryPage .bread_cc .bread {
  height: 40px;
  border-bottom: 1px solid rgb(206, 206, 185);
}
.SeeEveryPage .picturearea_cc {
  width: auto;
  margin: 0px auto;
}
.SeeEveryPage .picturearea_cc .picturearea {
  margin: 40px 0px 10px 0px;
  height: auto;
  text-align: center;
}
.SeeEveryPage .picturearea_cc .picturearea img {
  width: 70%;
  height: 70%;
  padding: 6px;
  background-color: #fff;
}
.SeeEveryPage .photo_info {
  width: 1200px;
  margin: 0px auto;
}
.SeeEveryPage .pagingarea_cc {
  margin: 70px 0px 0px 0px;
}
.SeeEveryPage .pagingarea_cc .pagingarea {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.SeeEveryPage .pagingarea_cc .pagingarea span {
  display: inline-block;
  font-size: 40px;
}
.SeeEveryPage .pagingarea_cc .pagingarea span b {
  color: #ffc600;
}
.SeeEveryPage .pagingarea_cc .pagingarea .control {
  display: inline-block;
}
.SeeEveryPage .pagingarea_cc .pagingarea .control button {
  margin: 0px 3px;
  padding: 4px 20px;
  border: 0;
  color: #f3f3f3;
  background-color: #5f5f5f;
  line-height: 20px;
}
/* .SeeEveryPage .pagingarea_cc .pagingarea .control label {
  margin: 5px 0px 0px 0px;
} */
/* .SeeEveryPage .pagingarea_cc .pagingarea .control label select {
  
} */
.SeeEveryPage .pagingarea_cc .pagingarea .control label .dropdown {
  border: 1px solid #5f5f5f;
  min-width: 100px;
  background: #dbdbdb;
  font-size: 14.5px;
  padding: 0px 0px 0px 3px;
  height: 28px;
}
.SeeEveryPage .pagingarea_cc .pagingarea .control label .dropdown option {
  font-size: 14.5px;
}
</style>