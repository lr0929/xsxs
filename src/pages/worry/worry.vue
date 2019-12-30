<template>
	<div>
    <myfooter></myfooter>
<!--    &lt;!&ndash;	顶部导航栏&ndash;&gt;-->
<!--			<div class="shopcart-head">-->
<!--				<router-link to="/">-->
<!--					<div class="indexicon"><img src="../../assets/img/fh.png"/></div>-->
<!--				</router-link>-->
<!--				<p class="escp">心&nbsp;事</p>-->
<!--			</div>-->

    <div class="nav" v-model="worryPageInfo.currentIndex">
      <div id="1" @click="change(1)" :class="{'active': worryPageInfo.currentIndex === 1}">心事</div>
      <div id="2" @click="change(2)" :class="{'active': worryPageInfo.currentIndex === 2}">手记</div>
      <div id="3" @click="change(3)" :class="{'active': worryPageInfo.currentIndex === 3}">故事</div>
      <div id="4" @click="change(4)" :class="{'active': worryPageInfo.currentIndex === 4}">心情</div>
      <div id="5" @click="change(5)" :class="{'active': worryPageInfo.currentIndex === 5}">求助</div>
      <div id="6" @click="change(6)" :class="{'active': worryPageInfo.currentIndex === 6}">干货</div>
    </div>

    <!-- tab-container -->
    <div>
      <!--心事-->
      <div v-if="worryPageInfo.currentIndex == 1">
        <worrys></worrys>
      </div>

      <!--手记-->

      <div v-if="worryPageInfo.currentIndex == 2">
        <rain></rain>
      </div>

      <!--故事-->

      <div v-if="worryPageInfo.currentIndex == 3">
        <story></story>
      </div>

      <!--心情-->

      <div v-if="worryPageInfo.currentIndex == 4">
        <mood></mood>
      </div>
      <!--求助-->
      <div v-if="worryPageInfo.currentIndex == 5">
        <help></help>
      </div>
      <!--干货-->
      <div v-if="worryPageInfo.currentIndex == 6">
        6
      </div>
     </div>
    <div>

    </div>
		</div>

</template>

<script>
  import story from "./story";
  import rain from "./rain";
  import worrys from "./worrys";
  import myfooter from "../../components/myfooter";
  import DBUtil  from "../../utils/DBUtil";
  import Utils from "../../utils/Utils";
  import mood from "./mood";
  import help from "./help";

	export default {
      name: 'worry',
      data() {
        return {
            worryPageInfo: {
                currentIndex: 1,
                guanzhu: true
            }
        };
      },
      components: {
          myfooter,
          worrys,
          rain,
          story,
          mood,
          help,
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
  * {
    margin: 0 auto;
    padding: 0 auto;
  }
	.indexicon img {
	  width: 100%;
	  height: 100%;
	}
	.escp {
	  width: 4.8rem;
	  height: 100%;
	  text-align: center;
	  line-height: 0.84rem;
	  margin: auto;
	  font-size: 0.3rem;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
  .nav {
    position: fixed;
    width: 100%;
    height: 1.06rem;
    background-color: darkseagreen;
  }
  .nav div {
    display: inline-block;
    width: 15.5%;
    line-height: 1rem;
    text-align: center;
    font-size: .35rem;
  }
  .nav .active {
    border-bottom: .06rem solid springgreen;
    transform: scale(1.05);
  }

</style>
