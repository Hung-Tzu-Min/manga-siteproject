<template>
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">特价排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Rank',
};
</script>

<style>
.rank {
  width: 1200px;
  margin: 0 auto;
}
.rank .tab {
  margin: 0 auto;
  overflow: hidden;
  width: 312px;
}
.rank .tab .tab-tit {
  text-align: center;
}
.rank .tab .tab-tit a {
  display: block;  /*因為a標籤默認是display:inline，不能調整寬高，轉成區塊性質才能調整*/
  padding: 0 18px;
  float: left;
  text-decoration: none;  /*消除超連結的下底線*/
  font-size: 16px;
  color: #999;
}
.rank .tab .tab-tit a p {
  margin: 5px 0;
}
.rank .tab .tab-tit a .img i {
  width: 35px;
  height: 35px;
  display: block;
  background-image: url(./images/bg0.png);
  margin-left: 12px;
}
.rank .tab .tab-tit a .text {
  line-height: 28px;
}
.rank .tab .tab-tit .on {
  color: #e60012;
}
/*因為上面有引入背景圖(bg0.png)，所以透過background-position標出定位點,調整顏色*/
.rank .tab .tab-tit .on .img i {
  background-position: 100% 0%;
  /* background-position: -35px 0; */
}
.rank .content {
  overflow: hidden;
  padding: 10px;
}
.rank .content ul li {
  overflow: hidden;
  list-style: none;
  line-height: 18px;
}
.rank .content ul li .img-item {
  border: 1px solid #e1251b;
  width: 269px;
  float: left;
  overflow: hidden;
  margin: 0 12px 10px;
  background: #fff;
}
.rank .content ul li .img-item .tab-pic {
  width: 230px;
  height: 210px;
  overflow: hidden;
  text-align: center;
  margin: 5px auto 18px;
}
.rank .content ul li .img-item .tab-pic a img {
  width: 200px;
  height: 200px;
}
.rank .content ul li .img-item .tab-info {
  background: #fafafa; /*稍微沒那麼白*/
}
.rank .content ul li .img-item .tab-info .info-title {
  height: 50px;
  line-height: 28px;
  overflow: hidden;
  margin: 0 auto;
  padding-left: 10px;
  }
  .rank .content ul li .img-item .tab-info .info-title a {
  color: #333;
  text-decoration: none;
}
.rank .content ul li .img-item .tab-info .info-price {
  font-size: 20px;
  color: #e1251b;
  height: 35px; 
  padding-left: 10px;
  display: block;
  line-height: 24px;
  margin: 10px auto 0;
}
</style>