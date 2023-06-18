<template>
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="./images/clock.png" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img src="./images/today01.png" />
        </li>
        <li class="banner">
          <img src="./images/today02.png" />
        </li>
        <li class="banner">
          <img src="./images/today03.png" />
        </li>
        <li class="banner">
          <img src="./images/today04.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Recommend',
};
</script>

<style>
/*讓recommend水平至中(下面的2個元素要同時存在)*/
.today-recommend .py-container {
  width: 1200px;
  margin: 0 auto; 
}
/*設定空間內的高度與底色,還有外距,並讓圖片水平並排*/
.today-recommend .py-container .recommend {
  height: 165px;
  background-color: #eaeaea;
  margin: 10px 0;
  display: flex;
}

.today-recommend .py-container .recommend .clock {
  width: 16.68%;
  background-color: #5c5251;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.today-recommend .py-container .recommend .clock .time {
  padding: 30px 0;
}
.today-recommend .py-container .recommend .clock h3 {
  margin: 9px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 30.06px;
}
.today-recommend .py-container .recommend .banner {
  width: 20.83%;  /*4個banner總共用掉83.32%的空間,加上上面clock的16.67%,就是99%*/
}
.today-recommend .py-container .recommend .banner img {
  width: 100%;
  height: 100%;
  transition: all 400ms;
}
.today-recommend .py-container .recommend .banner img:hover{
    opacity: 0.8;
}
</style>