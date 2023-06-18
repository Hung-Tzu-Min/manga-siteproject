<template>
  <div>
    <button :disabled="searchParams.pageNo == 1" @click="previousPage">
      上一頁
    </button>
    <button v-if="StartNumAndEndNum.start > 1" @click="pageOne">1</button>
    <button v-if="StartNumAndEndNum.start > 2">...</button>

    <!-- <button  v-for="(page,index) in StartNumAndEndNum.end" :key="index" v-if="page>=StartNumAndEndNum.start">{{page}}</button> -->
    <div class="bt" v-for="(page, index) in StartNumAndEndNum.end" :key="index">
      <button v-if="page >= StartNumAndEndNum.start" @click="middleButton">
        {{ page }}
      </button>
    </div>

    <button v-if="StartNumAndEndNum.end < totalPage - 1">...</button>
    <button v-if="StartNumAndEndNum.end < totalPage" @click="lastPage">{{ totalPage }}</button>
    <button :disabled="searchParams.pageNo == totalPage" @click="nextPage">下一頁</button>

    <button style="margin-left: 30px">共{{ users.length }}條</button>
  </div>
</template>

<script>
export default {
  name: "PagiNation",
  data() {
    return {
      users: [],
      searchParams: {
        pageNo: 6,
        total: 0, //總資料數
        continues: 5,
        pageSize: 2,
      },
    };
  },
  mounted() {
    this.users = this.$store.state.info.users;
    this.searchParams = this.$store.state.searchParams;
    this.searchParams.total = this.totalPage
    console.log("抓到嗎?", this.searchParams.pageNo);
    console.log("抓到嗎??", this.searchParams.total);
   
    
   
  },
  computed: {
    //總共多少頁
    totalPage() {
      //向上取整數
      return Math.ceil(this.users.length / 2);
    },

    //計算出連續的頁碼的起始數字與結束數字
    StartNumAndEndNum() {
      const { totalPage } = this;
      const { continues, pageNo } = this.searchParams;

      //先定義2個變量，存儲起來起始數字與結束數字
      let start = 0,
        end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);

        //把不正常現象修正(start不應該出現"0"跟"負數")
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //把不正常現象修正(end數字大於總頁碼)
        if (end > totalPage) {
          start = totalPage - continues;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
  methods: {
    previousPage() {
      this.$store.commit("previousPage", this.searchParams.pageNo);
    },
    pageOne() {
      this.$store.commit("pageOne", 1);
    },
    middleButton() {
      this.$store.commit("middleButton", this.page);
      console.log("this.page?", this.page);
    },
    lastPage(){
      this.$store.commit("lastPag", this.totalPage);
    },
    nextPage() {
      this.$store.commit("nextPage", this.searchParams.pageNo);
    },
  },
};
</script>

<style>
.bt {
  display: inline-block;
}
</style>