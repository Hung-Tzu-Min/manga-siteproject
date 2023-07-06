<template>
  <div class="imageDisplay">
    <div class="cc">
      <ul>
        <li v-for="item in GCbodyList">
          <div class="pic_box"><img :src="item.image" /></div>
          <div class="info">
            <div class="info_title">
              <a :title="item.name">{{ item.name }}</a>
            </div>
            <div class="info_col">{{ item.info }}</div>
          </div>
        </li>
      </ul>
      <!-- <ul>
        <li>
          <div class="pic_box"><img src="./images/01.jpg" /></div>
          <div class="info">
            <div class="info_title">
              <a
                title="[セントラルフィールド (ぱいお)]人妻恵理子の不貞記録｜人妻恵理子的不貞記録 [中国翻訳]"
                >[セントラルフィールド (ぱいお)]
                人妻恵理子の不貞記録｜人妻恵理子的不貞記録 [中国翻訳]</a
              >
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
        <li>
          <div class="pic_box"><img src="./images/02.jpg" /></div>
          <div class="info">
            <div class="info_title">
              <a title="[山本善々] 隷属魔王 [DL版] [个人整合]"
                >[山本善々] 隷属魔王 [DL版] [个人整合]</a
              >
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
        <li>
          <div class="pic_box"><img src="./images/03.png" /></div>
          <div class="info">
            <div class="info_title">
              <a
                title="[メメ屋 (メメ50)] 性癖マッチングアプリ ズボプリ[幸德秋良与以北汉化 鬼畜王汉化组][無修正]"
                >[メメ屋 (メメ50)] 性癖マッチングアプリ ズボプリ
                [幸德秋良与以北汉化 鬼畜王汉化组][無修正]</a
              >
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
        <li>
          <div class="pic_box"><img src="./images/04.jpg" /></div>
          <div class="info">
            <div class="info_title">
              <a title="[TGA] 巨根留学生のNTRホームステイ[続] [中国翻訳]"
                >[TGA] 巨根留学生のNTRホームステイ[続] [中国翻訳]
              </a>
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
        <li>
          <div class="pic_box"><img src="./images/05.jpg" /></div>
          <div class="info">
            <div class="info_title">
              <a
                title="[フリテン堂]モブ男子の俺が100人孕ませるまで出ることのできない子作り島に引っ越した結果[中国翻訳] [DL版]"
                >[フリテン堂]
                モブ男子の俺が100人孕ませるまで出ることのできない子作り島に引っ越した結果
                [中国翻訳] [DL版]</a
              >
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
        <li>
          <div class="pic_box"><img src="./images/06.jpg" /></div>
          <div class="info">
            <div class="info_title">
              <a
                title="[もじゃりん] ちょっとMでドスケベで + メロンブックス限定小冊子キャラクタープロット集 [篆儀通文書坊漢化]"
                >[もじゃりん] ちょっとMでドスケベで + メロンブックス限定小冊子
                キャラクタープロット集 [篆儀通文書坊漢化]</a
              >
            </div>
            <div class="info_col">2023-02-29, 60張照片</div>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "pictureList",
  data() {
    return {
      GCbodyList: [
        {
          image: require('@/assets/GCimages/BookCover/01.jpg'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][01]",
          info:'2023-02-28, 60張照片',
        },
        {
          image: require('@/assets/GCimages/BookCover/02.jpg'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][02]",
          info:'2023-02-29, 155張照片',
        },
        {
          image: require('@/assets/GCimages/BookCover/03.png'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][03]",
          info:'2023-02-29, 45張照片',
        },
        {
          image: require('@/assets/GCimages/BookCover/04.jpg'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][04]",
          info:'2023-02-29, 310張照片',
        },
        {
          image: require('@/assets/GCimages/BookCover/05.jpg'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][05]",
          info:'2023-02-29, 287張照片',
        },
        {
          image: require('@/assets/GCimages/BookCover/06.jpg'),
          name: "[Comic][ONE PIECE 航海王][尾田栄一郎][東立][06]",
          info:'2023-02-29, 270張照片',
        },
      ],
    };
  },
};
</script>

<style scoped>
.imageDisplay {
  margin: 20px 0px 0px 0px;
}
.imageDisplay .cc {
  width: 1300px;
  margin: 0px auto;
}
.imageDisplay .cc ul {
  display: flex;
  justify-content: space-between;
}
.imageDisplay .cc li {
  display: inline-block;
  width: 195px;
  height: 320px;
  /* border: 1px solid rgb(219, 207, 207); */
}
.imageDisplay .cc li .pic_box {
  width: 195px;
  height: 250px;
}
.imageDisplay .cc li .pic_box img {
  /* display: block; */
  width: 195px;
  height: 250px;
  object-fit: cover;
  border-radius: 3%;
}
.imageDisplay .cc li .info {
  margin: 10px 0px 0px 0px;
}
.imageDisplay .cc li .info .info_title {
  height: 40px;
  line-height: 1.5;
  overflow: hidden;
  font-size: 14px;
}
.imageDisplay .cc li .info .info_col {
  margin: 7px 0px;
  font-size: 12px;
}
</style>