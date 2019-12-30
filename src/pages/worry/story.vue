<template>
  <div>
    <div class="nav">
      <img src="../../assets/xinshilogo.png" alt="">
      <div class="nav-i">
        <div class="nav-a">
          <div>
            <h2>精彩故事</h2>
          </div>
          <div>
            <span class="iconfont icon-shaixuan">最热</span>
          </div>
        </div>
        <div class="chat">
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
                  <span class="iconfont icon-qinggan1"></span>
                  <p>情感</p>
                </li>
              </div>

              <div id="3" @click="change(3)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 3}">
                <li>
                  <span class="iconfont icon-hunyin"></span>
                  <p>婚姻</p>
                </li>
              </div>

              <div id="4" @click="change(4)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 4}">
                <li>
                  <span class="iconfont icon-jiating"></span>
                  <p>家庭</p>
                </li>
              </div>

              <div id="5" @click="change(5)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 5}">
                <li>
                  <span class="iconfont icon-hunyin"></span>
                  <p>婚姻</p>
                </li>
              </div>

              <div id="6" @click="change(6)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 6}">
                <li>
                  <span class="iconfont icon-zhichang"></span>
                  <p>职场</p>
                </li>
              </div>

              <div id="7" @click="change(7)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 7}">
                <li>
                  <span class="iconfont icon-qiqiu_fill"></span>
                  <p>同性</p>
                </li>
              </div>

              <div id="8" @click="change(8)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 8}">
                <li>
                  <span class="iconfont icon-xiaoyuan"></span>
                  <p>校园</p>
                </li>
              </div>

              <div id="9" @click="change(9)" class="swiper-slide" :class="{'active': worryPageInfo.currentIndex === 9}">
                <li>
                  <span class="iconfont icon-qita"></span>
                  <p>其他</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tab-container -->
      <div>

        <!--全部-->

        <div class="content" v-if="worryPageInfo.currentIndex == 1">
          <ul>
            <li>
                <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                  <div>
                    <span>情感</span>
                  </div>
                  <div>
                    <span>07:56</span>
                  </div>
                  <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                  </div>
                </div>
                <div class="content-d">
                  <span class="iconfont icon-ermai1">1.2万</span>
                  <div>
                    <span>
                      209评论
                    </span>
                  </div>
                </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--情感-->

        <div class="content" v-if="worryPageInfo.currentIndex == 2">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--婚姻-->

        <div class="content" v-if="worryPageInfo.currentIndex == 3">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--家庭-->

        <div class="content" v-if="worryPageInfo.currentIndex == 4">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--职场-->
        <div class="content" v-if="worryPageInfo.currentIndex == 5">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--同性-->
        <div class="content" v-if="worryPageInfo.currentIndex == 6">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--校园-->
        <div class="content" v-if="worryPageInfo.currentIndex == 7">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--其他-->
        <div class="content" v-if="worryPageInfo.currentIndex == 8">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
        </div>

        <!--同性-->
        <div class="content" v-if="worryPageInfo.currentIndex == 9">
          <ul>
            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a2.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a1.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a7.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

            <li>
              <div class="content-v"  style="background: url(https://cdn.xgl6.top/img/a4.jpg);background-size: 100%">
                <div>
                  <span>情感</span>
                </div>
                <div>
                  <span>07:56</span>
                </div>
                <div>
                    <span>
                        <p>单位的孙菲菲分式方程大V而是就弄卫生路口大V没问了萨</p>
                    </span>
                </div>
              </div>
              <div class="content-d">
                <span class="iconfont icon-ermai1">1.2万</span>
                <div>
                    <span>
                      209评论
                    </span>
                </div>
              </div>
            </li>

          </ul>
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
        name: "story",
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
                var swiperswiper = new Swiper('.chat .swiper-container', {
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
  @import "../../assets/font_bfmo3x1fa0r/iconfont.css";
  @import url("../../../node_modules/swiper/css/swiper.css");
  @import "../../assets/font_invz46gco9m/iconfont.css";
  .nav {
    padding-top: 1.2rem;
    /*background-color: red;*/
    height: 2.6rem;
    width: 100%;
    padding-bottom: .15rem;
    border-bottom: 1px solid whitesmoke;
  }
  .nav img {
    top: 12rem;
    left: 5.5rem;
    height: 1.4rem;
    width: 1.4rem;
    position: fixed;
  }
  .nav-i {
    position: fixed;
    background-color: white;
    margin-top: -.14rem;
    padding-bottom: .25rem;
    border-bottom: 1px solid silver;
  }
  .nav-a {
    margin-top: .25rem;
    padding-right: .2rem;
    padding-left: .2rem;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    display: inline-block;
  }
  .nav-a div {
    /*float: left;*/
    width: 82%;
    display: inline-block;
  }
  .nav-a div:nth-child(2) span {
    /*display: inline-block;*/
    padding: .12rem .12rem .12rem .12rem;
    border-radius: 5rem;
    line-height: .3rem;
    height: .3rem;
    width: 10%;
    background-color: #9E9E9E;
    /*text-align: center;*/
  }
  .navigation {
    height: 1.55rem;
    width: 100%;
    background-color: cornsilk;
  }
  .nav-a {
    height: .8rem;
    width: 100%;
    /*background-color: green;*/
    /*position: fixed;*/
  }
  .navigation li {
    float: left;
    height: 1.55rem;
    width: 20%;
    /*background-color: yellow;*/
    text-align: center;
  }
  /*.swiper-wrapper {*/
  /*  width: 80%;*/
  /*}*/
  .swiper-slide {
    height: 1.55rem !important;
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
  .swiper-slide li span {
    font-size: .65rem;
    color: springgreen;
  }
  .swiper-slide li p {
    font-size: .35rem;
    color: #7d7d7d;
  }
  .content {
    padding-top: 2.7rem;
    width: 100%;
    background-color: wheat;
  }
  .content ul li {
    width: 46%;
    height: 4.2rem;
    background-color: whitesmoke;
    float: left;
    margin-left: .2rem;
    margin-top: .23rem;
    border-radius: .3rem;
    border-bottom: 1px solid grey;
  }
  .content-v {
    height: 3.3rem;
    width: 100%;
    background-size:100%;
    border-radius: .3rem .3rem 0 0;
  }

 .content-v div:nth-child(1) {
   margin: .2rem 0 0 .15rem;
   background-color: hotpink;
   padding: .1rem;
   border-radius: .1rem;
   display: inline-block;
 }
  .content-v div:nth-child(2) {
    background-color: darkgrey;
    margin-left: 1.48rem;
    padding: .06rem;
    border-radius: .2rem;
    display: inline-block;
  }
  .content-v div:nth-child(3) {
    margin-top: 1.5rem;
    height: .9rem;
    overflow: hidden;
    padding: 0 .2rem 0 .2rem;
    color: white;
  }
  .content-d>span {
    line-height: .9rem;
    color: springgreen;
    padding-left: .18rem;
  }
  .content-d div {
    line-height: .9rem;
    float: right;
    color: #909093;
    padding-right: .15rem;
  }
  .active li p {
    color: black;
  }
  .active li span {
    color: #FF7A00;
  }
</style>
