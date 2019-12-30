<template>
    <div class="body">
      <div class="nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">

              <div id="1" @click="change(1)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 1}">
                <li>
                  <span class="iconfont icon-quanbu"></span>
                  <p>全部</p>
                </li>
              </div>

              <div id="2" @click="change(2)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 2}">
                <li>
                  <span class="iconfont icon-chugui"></span>
                  <p>情感</p>
                </li>
              </div>

              <div id="3" @click="change(3)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 3}">
                <li>
                  <span class="iconfont icon-hunyinwenti"></span>
                  <p>婚姻</p>
                </li>
              </div>

              <div id="4" @click="change(4)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 4}">
                <li>
                  <span class="iconfont icon-zhichang"></span>
                  <p>职场</p>
                </li>
              </div>

              <div id="5" @click="change(5)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 5}">
                <li>
                  <span class="iconfont icon-jiating"></span>
                  <p>家庭</p>
                </li>
              </div>

              <div id="6" @click="change(6)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 6}">
                <li>
                  <span class="iconfont icon-zhichang"></span>
                  <p>亲子</p>
                </li>
              </div>

              <div id="7" @click="change(7)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 7}">
                <li>
                  <span class="iconfont icon-qita"></span>
                  <p>其他</p>
                </li>
              </div>
          </div>
          </div>
        <div class="qie">
          <span>最热<span class="iconfont icon-f11-copy"></span></span>
        </div>
      </div>

      <div>
        <!--全部-->
          <div v-if="worryPageInfo.currentIndex == 1">
            <div class="body-v">
              <div class="details">
                <div class="backdrop" style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                  <div>
                    <div class="count">
                      <p>
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                      </p>
                    </div>

                    <div>
                      <p>-aini.yang</p>
                    </div>
                  </div>
                </div>
                <div class="details-next">
                  <ul>
                    <li>
                      <!--                    <ul class="nav-v">-->
                      <!--                      <li>-->
                      <div class="left">
                        <span>婚姻圈</span>
                      </div>
                      <!--                      </li>-->
                      <!--                      <li>-->
                      <div class="right">
                        <div>
                          <span class="iconfont icon-liulan-copy"></span>
                          <span>1816浏览</span>
                          <!--                      </div>-->

                          <!--                      </li>-->
                          <!--                      <li>-->
                          <!--                      <div>-->
                          <span class="iconfont icon-Artboard"></span>
                          <span>分享</span>
                          <!--                      </div>-->
                          <!--                      </li>-->
                          <!--                      <li>-->
                          <!--                      <div>-->
                          <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                          <span>私信Ta</span>
                        </div>
                        <!--                      </li>-->
                        <!--                    </ul>-->
                      </div>
                    </li>

                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <p>
                        查看所有220条评论
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="details">
                <div class="backdrop" style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                  <div>
                    <div class="count">
                      <p>
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                        离婚已经7个月13天了,每次想到你还是会觉得很心痛,尽管我知道我们已经不可能会在一起了,可是我好想好想你啊.
                      </p>
                    </div>

                    <div>
                      <p>-aini.yang</p>
                    </div>
                  </div>
                </div>
                <div class="details-next">
                  <ul>
                    <li>
                      <!--                    <ul class="nav-v">-->
                      <!--                      <li>-->
                      <div class="left">
                        <span>婚姻圈</span>
                      </div>
                      <!--                      </li>-->
                      <!--                      <li>-->
                      <div class="right">
                        <div>
                          <span class="iconfont icon-liulan-copy"></span>
                          <span>1816浏览</span>
                          <!--                      </div>-->

                          <!--                      </li>-->
                          <!--                      <li>-->
                          <!--                      <div>-->
                          <span class="iconfont icon-Artboard"></span>
                          <span>分享</span>
                          <!--                      </div>-->
                          <!--                      </li>-->
                          <!--                      <li>-->
                          <!--                      <div>-->
                          <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                          <span>私信Ta</span>
                        </div>
                        <!--                      </li>-->
                        <!--                    </ul>-->
                      </div>
                    </li>

                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <li class="message">
                      <div>
                        <img src="https://cdn.xgl6.top/img/a7.jpg" alt="">
                      </div>
                      <div>
                        <p>
                          寻找中年女老师
                        </p>
                        <h>
                          我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊我也想聊聊
                        </h>
                      </div>
                      <div>
                        <span class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"></span>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <p>
                        查看所有220条评论
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!--情感-->

          <div v-if="worryPageInfo.currentIndex == 2">
            2
          </div>

          <!--婚姻-->

          <div v-if="worryPageInfo.currentIndex == 3">
            3
          </div>

          <!--职场-->

          <div v-if="worryPageInfo.currentIndex == 4">
            4
          </div>
          <!--家庭-->
          <div v-if="worryPageInfo.currentIndex == 5">
            5
          </div>
          <!--亲子-->
          <div v-if="worryPageInfo.currentIndex == 6">
            6
          </div>
          <!--其他-->
          <div v-if="worryPageInfo.currentIndex == 7">
            7
        </div>
      </div>
    </div>
</template>

<script>
    import DBUtil from "../../utils/DBUtil";
    import Utils from "../../utils/Utils";
    import Swiper from "swiper"
    export default {
        name: "mood",
        data() {
            return {
                worryPageInfo: {
                    currentIndex: 1,
                }
            };
        },
        methods: {
            change(index) {
                this.worryPageInfo.currentIndex = index;
            },
            myswipery1: function() {
                var swiperswiper = new Swiper('.nav .swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    // pagination: '.swiper-pagination',
                    slidesPerView: 5,
                    paginationClickable: true,
                    spaceBetween: 3,

                    // speed:3000,
                    // loop : true,
                    freeMode:true,      //自由滑动
                    // slidesPerView : 5,
                    // slidesPerGroup : 1,
                    // prevButton:'.swiper-button-prev',
                    // nextButton:'.swiper-button-next',
                });
              }
            },
            mounted() {
                this.myswipery1();
                //恢复现场
                let pageInfo = DBUtil.getSessionStorage("worryPageInfo",true);
                if(Utils.isNotEmpty(pageInfo)){
                    this.worryPageInfo = pageInfo;
                }
                this.change(this.worryPageInfo.currentIndex);

            },
            beforeRouteLeave(to, from, next){
                //保存现场
                DBUtil.setSessionStorage("worryPageInfo",this.worryPageInfo);
                next();
            }
    }
</script>

<style scoped>
  @import "../../assets/font_95f1ucjaaxu/iconfont.css";
  @import url("../../../node_modules/swiper/css/swiper.css");
  @import "../../assets/font_vp4c0smuvzm/iconfont.css";
  @import "../../assets/font_p398ibhkkjl/iconfont.css";

  * {
    margin: 0 auto;
    padding: 0 auto;
    list-style: none;
  }
  .count>p {
    overflow: hidden;
    display: -webkit-box;
    /*text-overflow: ellipsis;*/
    -webkit-line-clamp: 7;/* 显示几行*/
    -webkit-box-orient: vertical;/*三个省略号*/
  }
  .body {
    padding-top: 1rem;
    background-color: lavender;
  }
  .nav {
    height: 1.2rem;
    /*background-color: papayawhip;*/
    display: flex;
    padding-bottom: .15rem;
    margin-top: .06rem;
    position: fixed;
    /*margin-right: 0;*/
  }
  .body-v {
    margin-top: 1.48rem;
    margin-bottom: 1.2rem;
  }
  .qie {
    background-color: white;
    width: 30%;
    height: 1.34rem;
    line-height: 1.3rem;
    text-align: center;
    position: fixed;
    right: 0;
  }
  .swiper-container {
    width: 72%;
    right: 1.05rem;
    /*border: 1px solid red;*/
    background-color: white;
    height: 1.35rem;
  }
  .swiper-wrapper {
    width: 100%;

  }
  .qie>span {
    width: 1rem;
    background-color: springgreen;
    padding: .15rem .2rem .15rem .3rem;
    border-radius: 3rem;
    color: white;
  }
  .swiper-slide {
    text-align: center;
    font-size: 17px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    /*margin-top: .06rem;*/
    /*background-color: powderblue;*/
    margin: .06rem .25rem 0 .05rem;
  }
  .swiper-slide span,p {
    color: #909093;
  }
  .swiper-slide span {
    font-size: .5rem;
  }
  .details {
    height: 12.8rem;
    margin-bottom: .25rem;
  }
  .active span,.active p {
    color: #54DD90;
  }
  .backdrop {
    height: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .backdrop>div {
    height: 75%;
    width: 75%;
  }
  .backdrop>div>div {
    height: 90%;
    width: 100%;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    overflow: hidden;
  }
  .backdrop>div>div>p {
    color: white;
    font-size: .35rem;
    text-align: center;
  }
  .backdrop>div>div:nth-child(2){
    height: 10%;
    width: 100%;
  }
  .details-next {
    /*height: 45%;*/
    width: 100%;
    height: 5.8rem;
    background-color: white;
  }

  .details-next ul li {
    height: .95rem;
    width: 100%;
    margin-bottom: .23rem;
  }
  .details-next>ul>li {
    display: flex;
    line-height: .95rem;
  }
  /*.nav-v {*/
  /*  display: flex;*/
  /*  line-height: .898rem;*/
  /*}*/
  /*.nav-v li {*/
  /*  !*margin: 0 0 0 .3rem;*!*/
  /*}*/
  /*.details-next>ul>li span:nth-child(1) {*/
  /*  font-size: 8px;*/
  /*}*/
  .left {
    width: 25%;
    height: 100%;
    /*background-color: red;*/
    text-align: center;
  }
  .left span {
    background-color: rebeccapurple;
    padding: .06rem .15rem .06rem .15rem;
    border-radius: 3rem;
  }
  .right {
    width: 75%;
    height: 100%;
    /*background-color: gold;*/
    display: flex;
    /*align-items: center;*/
  }
  .right div {
    /*background-color: hotpink;*/
    margin-right: .3rem;
  }
  .message div:nth-child(1) {
    width: 16%;
    height: 100%;
    text-align: center;
  }
  .message div:nth-child(1) img {
    border-radius: 1rem;
    height: 90%;
    width: 68%;
  }
  .message div:nth-child(2) {
     width: 71%;
     height: 100%;
   }
  .message div:nth-child(2) p {
    width: 90%;
    height: 50%;
    margin-top: -.2rem;
  }
  .message div:nth-child(2) h {
    margin-left: .26rem;
    overflow: hidden;
    display: -webkit-box;
    width: 85%;
    /*text-overflow: ellipsis;*/
    -webkit-line-clamp: 1;/* 显示几行*/
    -webkit-box-orient: vertical;/*三个省略号*/
  }
  .message div:nth-child(3) {
    width: 13%;
    height: 100%;
    text-align: center;

  }
  .message div:nth-child(3) span {
    color: #54DD90;
    font-size: .5rem;
  }
</style>
