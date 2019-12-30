<template>
    <div class="body">
      <div class="serch">
        <div>
          <span class="iconfont icon-sousuo"></span>
          搜索求助
        </div>
      </div>

      <div>
        <div class="chat">
          <div class="swiper-container">
            <div class="swiper-wrapper">

              <div id="1" @click="change(1)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 1}">
                <li>
                  <p>全部</p>
                </li>
              </div>

              <div id="2" @click="change(2)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 2}">
                <li>
                  <p>情感</p>
                </li>
              </div>

              <div id="3" @click="change(3)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 3}">
                <li>
                  <p>婚姻</p>
                </li>
              </div>

              <div id="4" @click="change(4)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 4}">
                <li>
                  <p>失恋</p>
                </li>
              </div>

              <div id="5" @click="change(5)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 5}">
                <li>
                  <p>家庭</p>
                </li>
              </div>

              <div id="6" @click="change(6)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 6}">
                <li>
                  <p>职场</p>
                </li>
              </div>

              <div id="7" @click="change(7)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 7}">
                <li>
                  <p>校园</p>
                </li>
              </div>

              <div id="8" @click="change(8)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 8}">
                <li>
                  <p>同性</p>
                </li>
              </div>

              <div id="9" @click="change(9)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 9}">
                <li>
                  <p>创业</p>
                </li>
              </div>

              <div id="10" @click="change(10)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 10}">
                <li>
                  <p>海外</p>
                </li>
              </div>

              <div id="11" @click="change(11)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">
                <li>
                  <p>两性</p>
                </li>
              </div>

              <div id="12" @click="change(12)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">
                <li>
                  <p>青葱</p>
                </li>
              </div>

              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">
                <li>
                  <p>拖延症</p>
                </li>
              </div>

              <div id="14" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">
                <li>
                  <p>强迫症</p>
                </li>
              </div>

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>疑心病</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>抑郁</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>焦虑</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>自卑</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>暴躁</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>失眠</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>恐惧</p>-->
              <!--                </li>-->
              <!--              </div>-->

              <!--              <div id="13" @click="change(13)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 11}">-->
              <!--                <li>-->
              <!--                  <p>其他</p>-->
              <!--                </li>-->
              <!--                 </div>-->

            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    import DBUtil from "../../utils/DBUtil";
    import Utils from "../../utils/Utils";
    import Swiper from "swiper"
    export default {
        name: "help",
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
            myswipery2: function() {
                var swiper2 = new Swiper('.chat .swiper-container', {
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
            this.myswipery2();
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
  @import "../../assets/font_t1ir0brjw7j/iconfont.css";
  @import url("../../../node_modules/swiper/css/swiper.css");
  * {
    margin: 0 auto;
    padding: 0 auto;
  }
  .body {
    padding-top: 1.3rem;
    background-color: burlywood;
  }
  .serch {
    text-align: center;
    background-color: wheat;
  }
  .serch>div {
    line-height: .6rem;
    height: .6rem;
    color: grey;
    width: 90%;
    border-radius: 3rem;
    border: 1px solid darkcyan;
  }
  .swiper-slide {
    padding-top: .2rem;
    height: .7rem !important;
    text-align: center;
    font-size: 18px;
    background: #fff;
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
  }
  .chat .swiper-slide {
    height: 100%;
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
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
    background-color: white;
  }
  .swiper-slide li p {
    font-size: .35rem;
    color: #7d7d7d;
  }
</style>
