<template>
  <div>
    <div class="typeNav">
      <div class="container">
        <h2 class="all">全部商品分类</h2>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <div class="conPoin">
          <a href="###">手机、数码、通讯</a>
          <a href="###">手机</a>
          <a href="###">Apple苹果</a>
          <a>iphone 6S系类</a>
        </div>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <div @mousemove="magnifier()" class="preview">
            <div class="jqzoom">
              <img src="./images/s1.png" />
            </div>
          </div>
          <!--下方的缩略图-->
          <div class="specScroll">
            <!--左按钮-->
            <a class="prev">&lt;</a>
            <!-- 中间可滑动区域 -->
            <div class="items">
              <div class="itemsCon"></div>
            </div>
            <!--右按钮-->
            <a class="next">&gt;</a>
          </div>
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail"></div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
            </div>

            <div class="cartWrap">
              <div class="controls">
                <input autocomplete="off" value="1" class="itxt" />
                <a href="###" class="plus">+</a>
                <a href="###" class="mins">-</a>
              </div>
              <div class="add">
                <a href="###" target="_blank">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="productDetail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part01.png" />
                  </div>
                  <div class="attr">Apple苹果iPhone 6s (A1699)</div>
                  <div class="price">
                    <em>¥</em>
                    <i>6088.00</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/part03.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img src="./images/l-m01.png" />
              <p>￥5299</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/dp01.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp02.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp03.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
              </ul>
              <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 猜你喜欢 -->
    <div class="like">
      <h4 class="kt">猜你喜欢</h4>
      <ul class="like-list">
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike01.png" />
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <em>¥</em>
            <i>3699.00</i>
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike02.png" />
          </div>
          <div class="attr">Apple苹果iPhone 6s/6s Plus 16G 64G 128G</div>
          <div class="price">
            <em>¥</em>
            <i>4388.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike03.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike04.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike05.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
        <li class="likeItem">
          <div class="p-img">
            <img src="./images/itemlike06.png" />
          </div>
          <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</div>
          <div class="price">
            <em>¥</em>
            <i>4088.00</i>
          </div>
          <div class="commit">已有700人评价</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      goodDate: {
        path: [
          {
            title: "手机、数码、通讯",
            url: "###",
          },
          {
            title: "手机",
            url: "###",
          },
          {
            title: "Apple苹果",
            url: "###",
          },
          {
            title: "iphone 6S系类",
          },
        ],
        imgsrc: [
          { b: "./images/b1.png", s: "./images/s1.png" },
          { b: "./images/b2.png", s: "./images/s2.png" },
          { b: "./images/b3.png", s: "./images/s3.png" },
          { b: "./images/b1.png", s: "./images/s1.png" },
          { b: "./images/b2.png", s: "./images/s2.png" },
          { b: "./images/b3.png", s: "./images/s3.png" },
          { b: "./images/b1.png", s: "./images/s1.png" },
          { b: "./images/b2.png", s: "./images/s2.png" },
          { b: "./images/b3.png", s: "./images/s3.png" },
          { b: "./images/b1.png", s: "./images/s1.png" },
          { b: "./images/b2.png", s: "./images/s2.png" },
          { b: "./images/b3.png", s: "./images/s3.png" },
          { b: "./images/b1.png", s: "./images/s1.png" },
          { b: "./images/b2.png", s: "./images/s2.png" },
          { b: "./images/b3.png", s: "./images/s3.png" },
        ],
        goodsDetail: {
          title: "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
          recommend:
            "推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返",
          price: 5299,
          promoteSales: {
            type: "加价购",
            content:
              "满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品",
          },
          support: "以旧换新，闲置手机回收 4G套餐超值抢 礼品购",
          address: "广东省 深圳市 宝安区",
          evaluateNum: 65545,
          crumbData: [
            {
              title: "选择颜色",
              data: [
                {
                  type: "金色",
                  changePrice: 0,
                },
                {
                  type: "银色",
                  changePrice: 40,
                },
                {
                  type: "黑色",
                  changePrice: 90,
                },
              ],
            },
            {
              title: "内存容量",
              data: [
                {
                  type: "16G",
                  changePrice: 0,
                },
                {
                  type: "64G",
                  changePrice: 300,
                },
                {
                  type: "128G",
                  changePrice: 900,
                },
                {
                  type: "256G",
                  changePrice: 1300,
                },
              ],
            },
            {
              title: "选择版本",
              data: [
                {
                  type: "公开版",
                  changePrice: 0,
                },
                {
                  type: "移动版",
                  changePrice: -1000,
                },
              ],
            },
            {
              title: "购买方式",
              data: [
                {
                  type: "官方标配",
                  changePrice: 0,
                },
                {
                  type: "优惠移动版",
                  changePrice: -240,
                },
                {
                  type: "电信优惠版",
                  changePrice: -390,
                },
              ],
            },
          ],
        },
      },

    };
  },
  mounted(){
    this.magnifier()
  },
  methods:{
    magnifier(){
        let imgsrc = this.goodDate.imgsrc
      
    },
  }
};
</script>

<style scoped>
.typeNav {
  border-bottom: 2px solid #e1251b;
}
.typeNav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.typeNav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.typeNav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.con {
  width: 1200px;
  margin: 15px auto 0;
}
.con .conPoin {
  padding: 9px 15px 9px 0;
}
.con .conPoin > a + a::before {
  content: "\00AC\00a0";
  padding: 0 5px;
  color: #be2525;
}
.con .mainCon {
  overflow: hidden;
  margin: 5px 0 15px;
}
.con .mainCon .previewWrap {
  float: left;
  width: 400px;
  position: relative;
}
.con .mainCon .previewWrap .preview {
  width: 400px;
  height: 400px;
  border: 1px solid #dfdfdf;
}
.con .mainCon .previewWrap .preview .jqzoom {
  cursor: pointer; /*改變滑鼠游標滑過時的樣式*/
  width: 400px;
  height: 400px;
  position: relative;
}
.con .mainCon .previewWrap .preview .jqzoom img {
  width: 100%;
}
.con .mainCon .previewWrap .preview .jqzoom .mask {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #ddd;
}
.con .mainCon .previewWrap .preview .maxbox {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 420px;
  top: 0px;
  overflow: hidden;
  z-index: 20;
  border: 1px solid #ddd;
}
.con .mainCon .previewWrap .preview .maxbox img {
  width: 800px;
  height: 800px;
  display: block;
}
.con .mainCon .previewWrap .specScroll {
  margin-top: 5px;
  width: 400px;
  overflow: hidden;
}
.con .mainCon .previewWrap .specScroll .prev,
.con .mainCon .previewWrap .specScroll .next {
  text-align: center;
  width: 10px;
  height: 54px;
  line-height: 54px;
  border: 1px solid #ccc;
  background: #ebebeb;
  cursor: pointer;
}
.con .mainCon .previewWrap .specScroll .prev {
  float: left;
  margin-right: 4px;
}
.con .mainCon .previewWrap .specScroll .next {
  float: right;
}
.con .mainCon .previewWrap .specScroll .items {
  float: left;
  position: relative;
  width: 372px;
  height: 56px;
  overflow: hidden;
}
.con .mainCon .previewWrap .specScroll .items .itemsCon {
  position: absolute;
  width: 9999px;
  height: 56px;
  left: 0;
}
.con .mainCon .previewWrap .specScroll .items .itemsCon img {
  float: left;
  text-align: center;
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.con .mainCon .InfoWrap {
  width: 700px;
  float: right;
}
.con .mainCon .InfoWrap .InfoName {
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
}
.con .mainCon .InfoWrap .news {
  color: #e12228;
  margin-top: 15px;
}
.con .mainCon .InfoWrap .priceArea {
  background: #fee9eb;
  padding: 7px;
  margin: 13px 0;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .title {
  float: left;
  margin-right: 15px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price {
  float: left;
  color: #c81623;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price i {
  font-size: 16px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price em {
  font-size: 24px;
  font-weight: 700;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .price span {
  font-size: 12px;
}
.con .mainCon .InfoWrap .priceArea .priceArea1 .remark {
  float: right;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .title {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth {
  width: 520px;
  float: left;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .red-bg {
  background: #c81623;
  color: #fff;
  padding: 3px;
}
.con .mainCon .InfoWrap .priceArea .priceArea2 .fixWidth .t-gray {
  color: #999;
}
.con .mainCon .InfoWrap .support {
  border-bottom: 1px solid #ededed;
  padding-bottom: 5px;
}
.con .mainCon .InfoWrap .support .supportArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .support .supportArea .title {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .support .supportArea .fixWidth {
  width: 520px;
  float: left;
  color: #999;
}
.con .mainCon .InfoWrap .choose .chooseArea {
  overflow: hidden;
  line-height: 28px;
  margin-top: 10px;
}
.con .mainCon .InfoWrap .choose .chooseArea .choosed mark {
  height: 30px;
  display: inline-block;
  line-height: 30px;
  background-color: snow;
  border: 1px solid #ddd;
  padding: 0 20px;
  margin-right: 20px;
}
.con .mainCon .InfoWrap .choose .chooseArea .choosed mark a {
  font-size: 12px;
  color: red;
  margin-left: 20px;
  cursor: pointer;
}
.con .mainCon .InfoWrap .choose .chooseArea dl {
  overflow: hidden;
  margin: 13px 0;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dt {
  margin-right: 15px;
  float: left;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dd {
  float: left;
  margin-right: 5px;
  color: #666;
  line-height: 24px;
  padding: 2px 14px;
  border-top: 1px solid #eee;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #eee;
}
.con .mainCon .InfoWrap .choose .chooseArea dl dd:nth-of-type(1) {
  color: red;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .itxt {
  width: 38px;
  height: 37px;
  border: 1px solid #ddd;
  color: #555;
  float: left;
  border-right: 0;
  text-align: center; /*也可控制input中，文字擺放的位置*/
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .plus,
.con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  width: 15px;
  text-align: center;
  height: 17px;
  line-height: 17px;
  background: #f1f1f1;
  color: #666;
  position: absolute;
  right: -8px;
  border: 1px solid #ccc;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .mins {
  right: -8px;
  top: 19px;
  border-top: 0;
}
.con .mainCon .InfoWrap .choose .cartWrap .controls .plus {
  right: -8px;
}
.con .mainCon .InfoWrap .choose .cartWrap .add {
  float: left;
}
.con .mainCon .InfoWrap .choose .cartWrap .add a {
  background-color: #e1251b;
  padding: 0 25px;
  font-size: 16px;
  color: #fff;
  height: 36px;
  line-height: 36px;
  display: block;
}
</style>