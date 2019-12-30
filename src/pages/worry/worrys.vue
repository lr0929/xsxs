<template>
  <div>
    <div class="nav-a">
      <div id="7" @click="show(true)" :class="{'active': worryPageInfo.guanzhu}">关注</div>
      <div id="8" @click="show(false)" :class="{'active': !worryPageInfo.guanzhu}">推荐</div>
    </div>
    <div class="gz" v-if="worryPageInfo.guanzhu">
      <p>暂无关注内容</p>
    </div>
    <div v-if="!worryPageInfo.guanzhu" style="background-color: whitesmoke;">
      <div class="nr">
        <h3>千不该万不该,爱上一个已婚男人,姐妹们不要和我犯一样的错</h3>
        <p>我爱上了一个已婚的男士,但没想过破坏他的家庭,我们就像约好的一样,偷偷谈,不公开.和他谈的时候发现他和另一个男得暧昧</p>
        <ul>
          <li>
            <img src="../../assets/img/check.png" alt="">
            <span>蹲下细数眼泪</span>
          </li>
          <li class="m">
            <span class="iconfont icon-xiaoxi1">87</span>
            <span class="iconfont icon-zan">9</span>
          </li>
        </ul>
      </div>
      <div class="nr">
        <h3>千不该万不该,爱上一个已婚男人,姐妹们不要和我犯一样的错</h3>
        <p>我爱上了一个已婚的男士,但没想过破坏他的家庭,我们就像约好的一样,偷偷谈,不公开.和他谈的时候发现他和另一个男得暧昧</p>
        <ul>
          <li>
            <img src="../../assets/img/check.png" alt="">
            <span>蹲下细数眼泪</span>
          </li>
          <li class="m">
            <span class="iconfont icon-xiaoxi1">87</span>
            <span class="iconfont icon-zan">9</span>
          </li>
        </ul>
      </div>
      <div class="nr">
        <h3>千不该万不该,爱上一个已婚男人,姐妹们不要和我犯一样的错</h3>
        <p>我爱上了一个已婚的男士,但没想过破坏他的家庭,我们就像约好的一样,偷偷谈,不公开.和他谈的时候发现他和另一个男得暧昧</p>
        <ul>
          <li>
            <img src="../../assets/img/check.png" alt="">
            <span>蹲下细数眼泪</span>
          </li>
          <li class="m">
            <span class="iconfont icon-xiaoxi1">87</span>
            <span class="iconfont icon-zan">9</span>
          </li>
        </ul>
      </div>
      <div class="nr">
        <h3>千不该万不该,爱上一个已婚男人,姐妹们不要和我犯一样的错</h3>
        <p>我爱上了一个已婚的男士,但没想过破坏他的家庭,我们就像约好的一样,偷偷谈,不公开.和他谈的时候发现他和另一个男得暧昧</p>
        <ul>
          <li>
            <img src="../../assets/img/check.png" alt="">
            <span>蹲下细数眼泪</span>
          </li>
          <li class="m">
            <span class="iconfont icon-xiaoxi1">87</span>
            <span class="iconfont icon-zan">9</span>
          </li>
        </ul>
      </div>
      <div class="nr">
        <h3>千不该万不该,爱上一个已婚男人,姐妹们不要和我犯一样的错</h3>
        <p>我爱上了一个已婚的男士,但没想过破坏他的家庭,我们就像约好的一样,偷偷谈,不公开.和他谈的时候发现他和另一个男得暧昧</p>
        <ul>
          <li>
            <img src="../../assets/img/check.png" alt="">
            <span>蹲下细数眼泪</span>
          </li>
          <li class="m">
            <span class="iconfont icon-xiaoxi1">87</span>
            <span class="iconfont icon-zan">9</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    import DBUtil  from "../../utils/DBUtil";
    import Utils from "../../utils/Utils";

    export default {
        name: 'worrys',
        data() {
            return {
                worryPageInfo: {
                    currentIndex: 1,
                    guanzhu: true
                }
            };
        },

        methods: {
            change(index) {
                this.worryPageInfo.currentIndex = index;
            },
            show(index) {
                this.worryPageInfo.guanzhu = index
            }
        },
        mounted() {
            //恢复现场
            let pageInfo = DBUtil.getSessionStorage("worryPageInfo",true);
            if(Utils.isNotEmpty(pageInfo)){
                this.worryPageInfo = pageInfo;
            }
            this.show(this.worryPageInfo.guanzhu);
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
  @import "../../assets/font_7o86exhlyrv/iconfont.css";

  .nav-a {
    padding-top: 1.07rem;
    height: .5rem;
    background-color: white;
  }
  .nav-a div {
    position: fixed;
    display: inline-block;
    padding-left: 28%;
    font-size: .35rem;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background-color: white;
    border-bottom: .01rem solid whitesmoke;
  }
  .nav-a div:nth-child(2) {
    margin-left: 2.89rem;
  }
  .nav-a .active {
    color: limegreen;
  }
  .gz {
    margin-top: 5rem;
    text-align: center;
    font-size: .4rem;
    color: #7d7d7d;
  }
  .nr {
    padding-top: .1rem;
    margin-top: .21rem;
    height: 4rem;
    width: 92%;
    padding-left: .3rem;
    padding-right: .3rem;
    background-color: white;
    margin-bottom: .18rem;
  }
  .nr h3,p,ul {
    padding-top: .3rem;
  }
  .nr p {
    font-size: .31rem;
    color: grey;
  }
  .nr ul li {
    float: left;
  }
  .nr ul li:nth-child(1) img {
    border-radius: 50%;
  }
  .nr ul li:nth-child(1) {
    line-height: .6rem;
    color: #909093;
  }
  .nr ul li:nth-child(2) {
    right: 0;
  }
  .m {
    margin-right: 1px;
    margin-left: 2rem;
  }
  .m span {
    margin-left: .6rem;
  }
</style>

