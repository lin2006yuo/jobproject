<template>
  <div class="i-main">
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item, index) in bannerImgList" :key="index" class="swiper-no-swiping">
                    <div :style="{backgroundImage: 'url('+item.url+')'}" class="img" alt="">
                        <p class="text" v-html="item.text"></p>
                        <div class="mask"></div>
                    </div>
                    <!-- 延迟加载 -->
                    <!-- <div :data-background="item.url" class="swiper-lazy img">
                        <div class="swiper-lazy-preloader"></div>
                        <p class="text" v-html="item.text"></p>
                        <div class="mask"></div>
                    </div> -->
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <!-- 四个模块 -->
        <div class="wrapper wrapper-1">
            <div class="title">
                <p>产品模块介绍</p>
            </div>
            <div class="content-box clearfix">
                <div class="content-wrapper clearfix">
                    <div class="content" v-for="(item, index) in content_box_list" :key="index">
                        <!-- <div class="imgbox" @click="contentBoxHandle(index + 1)"> -->
                        <div class="imgbox" @click="contentBoxHandle(index + 1)">
                        <!-- <div class="imgbox"> -->
                            <img :src="item.img" alt="" >
                            <div class="mask"></div>
                            <div class="text">{{item.text}}</div>
                        </div>
                        <div class="intro">{{item.intro}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper wrapper-2">
            <div class="box clearfix">
                <div class="left">
                    <ul class="list">
                        <div class="item" :class="{active: currentIndex === index}" v-for="(item,index) in fontList" :key="index" @mouseover="listItemClick(index)">
                            <div class="right">
                                <div class="top">{{item.top}}</div>
                                <div class="line"><i class="process"></i></div>
                                <div class="bottom">{{item.bottom}}</div>
                            </div>
                        </div>

                    </ul>
                </div>
                <div class="right-phone clearfix">
                    <div class="phone">
                        <div class="img-box">
                            <transition-group tag="ul" name="fade" move-class="cl1">
                                <img v-show="currentIndex === index" v-for="(src, index) in srcList" :key="index" v-lazy="src" alt="">
                            </transition-group>
                        </div>
                    </div>
                    <div class="phone">
                        <div class="img-box">
                            <transition-group tag="div" name="fade">
                                <img v-show="currentIndex === index" v-for="(src, index) in srcList2" :key="index" v-lazy="src" alt="">
                            </transition-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper wrapper-3">
            <!-- 1 -->
            <div class="box clearfix">
                <div class="left">
                    <div class="title">全世界的<br>小天使</div>
                    <p>为完美女人的明天共同成长、进步</p>
                </div>
                <div class="right">
                    <video muted src="@/assets/video/map2.mp4" autoplay="autoplay"  loop="loop" class="video"></video>
                </div>
            </div>

        </div>
        <mfooter></mfooter>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Mfooter from '@/components/footer.vue'

export default {
  components:{
    swiper,
    swiperSlide,
    Mfooter
  },
  props:{},
    data() {
        return {
            mySwiper: "",
            currentIndex: 0,
            bounceTimer: null,
            topicImgFinish: false,
            loadingPicCount: 0,
            bannerImgList: [
                {
                    url: require("@/assets/images/slider1.jpg"),
                    text: "步入婚姻的殿堂<br>延续美好的爱情故事"
                },
                {
                    url: require("@/assets/images/slider2.jpg"),
                    text: "悉心的呵护<br>蕴育出健康的宝贝"
                },
                {
                    url: require("@/assets/images/slider3.jpg"),
                    text: "塑造完美人格<br>从这里开始"
                },
                {
                    url: require("@/assets/images/slider4.jpg"),
                    text: "用爱的线条<br>铺垫孩子成长的路"
                }
            ],
            fontList: [
                {top: '婚礼 Wedding', bottom: '高端婚礼策划，定制属于你的美'},
                {top: '怀孕 Pregnancy', bottom: '生命的初始，新纪元的诞生'},
                {top: '育儿 Childcare', bottom: '培养天赋，成就未来'},
                {top: '家庭教育 Family Education', bottom: '为生之道，为人之道，为学之道'}
            ],
            srcList: [
                require("@/assets/images/phone/婚礼/婚礼素材库.png"),
                require("@/assets/images/phone/孕育/孕妇规划.png"),   
                require("@/assets/images/phone/育儿/育儿工具.png"),
                require("@/assets/images/phone/教育/教育首页.png"),
            ],
            srcList2: [
                require("@/assets/images/phone/婚礼/婚礼.png"),
                require("@/assets/images/phone/孕育/社交 怀孕周期.png"),
                require("@/assets/images/phone/育儿/育儿社交1.png"),
                require("@/assets/images/phone/教育/视频推荐页.png"),
            ],
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                noSwiping : true,
                autoplay: {
                    delay: 3000, //自动切换的时间间隔，单位ms
                    // stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
                    stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。
                    disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
                    reverseDirection: false, //开启反向自动轮播。
                    waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
                },
                // 延迟加载
                // lazy: {
                //     loadPrevNext: false,
                // },
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable :true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            },
            content_box_list: [
                {
                    text: '婚礼',
                    img: '',
                    intro: '我们关注每一个幸福的婚礼，提供婚礼方案的私家定制。帮助您制定婚礼的规划、预算和礼金管理，以及与亲朋好友的亲密社交。为您制作有创意、精美的婚礼请帖。'
                },
                {
                    text: '怀孕',
                    img: '',
                    intro: '您的宝宝成长如何？这里有专业的意见。我们也打造了一个孕育期女性的社群平台，您在这里可以发现和你同处一个阶段的孕期女性。一起探讨和关心孕期问题。'
                },
                {
                    text: '育儿',
                    img: '',
                    intro: '天使之翼为宝宝的哺育提供领域内专业的观点，帮助您做好时间管理、日记记录,以及宝宝用药情况等等。在社区内，您也可以看到其他妈妈的心得体会。'
                },
                {
                    text: '家庭教育',
                    img: '',
                    intro: '来听听大咖都是怎么谈家庭教育的，听他们的专业意见，天使之翼也帮助您规划好家庭教育，同时也为您提供一个与其他家长共同沟通、分享的平台。'
                },
            ]
        };
    },
  watch:{
      loadingPicCount(index){
          if(index >= 4){
            //   console.log('图片加载完成')
              this.$emit('picFinish')
          }
      }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper;
    }
  },
  methods:{
        listItemClick(index) {
            this.currentIndex = index;
            // clearInterval(this.time);
            // if (this.bounceTimer) {
            //     return;
            // } else {
            //     this.bounceTimer = setTimeout(() => {
            //         this._initTimeInterval();
            //         clearTimeout(this.bounceTimer)
            //         this.bounceTimer = null
            //     }, 5000);
            // }
        },
        //四个模块点击事件
        contentBoxHandle(index){
            /**
             * @param index
             * 1. 婚礼
             * 2. 怀孕
             * 3. 育儿
             * 4. 家庭教育
             */
            this.$router.push({
                name: 'page',
                params: {
                    id: index, //模块ID           
                }
            })
        },
        _initTimeInterval() {
            this.time = setInterval(() => {
                if (this.currentIndex === 3) {
                    this.currentIndex = -1;
                }
                this.currentIndex++;
            }, 5000);
        }
  },
  created(){},
  mounted(){
      //为4个模块图片加载完成绑定监听函数
      for (let index = 0; index < this.content_box_list.length; index++) {
          let newImg = new Image()
          newImg.src = require(`@/assets/images/a${index + 1}.jpg`)
          newImg.onload = () => {
              this.content_box_list[index].img = newImg.src
              this.loadingPicCount ++
          }
      }
  }
}
</script>
<style lang="stylus">
.banner .swiper-container
    width 100%
    height 800px
.banner .swiper-container .swiper-slide .img
    width 100%
    height 100%
.banner .swiper-container .swiper-slide .img
    background-repeat no-repeat
    background-size cover
    background-position center center
    text-align center
    line-height 800px
    position relative
.banner .swiper-container .swiper-slide .img:nth-child(3)
    background-position 0 0
.banner .swiper-container .swiper-slide .img .mask
    background-color rgba(0, 0, 0, 0.4)
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    z-index 0
.banner .swiper-container .swiper-slide .img .text
    font-weight 400
    font-size 62px
    color #fff
    width 800px
    line-height 79px
    left 50%
    top 50%
    transform translate(-50%, -50%)
    position absolute
    z-index 1000
.wrapper
    /* width: 1140px; */
    /* height: 1000px; */
    margin 0 auto
    padding 70px 0
.wrapper-1
    width 1200px
@media only screen and (max-width: 1300px)
    .wrapper-1
        width 1000px !important
.wrapper-1 .title
    text-align center
    padding-bottom 30px
.wrapper-1 .title p
    display inline-block
    font-size 36px
    font-weight bold
    position relative
.wrapper-1 .title p:after
    position absolute
    bottom -30px
    left 0
    content ''
    width 100%
    height 2px
    background-color #7dbbfe
    left 50%
    transform translateX(-50%)
.wrapper-1 .content-box
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    margin-top 60px
    /* width: 1153px; */
.wrapper-1 .content-wrapper
    width 100%
.wrapper-1 .content
    /* display: flex; */
    width 576px
    float left
    margin-right 40px
    /* flex-direction: column; */
    margin-bottom 20px
    box-shadow 0 7px 15px 0 rgba(0, 0, 0, 0.1)
    border-bottom-left-radius 5px
    border-bottom-right-radius 5px
    &:hover
        // box-shadow 0 7px 15px 0 rgba(221, 237, 255, 1)
@media only screen and (max-width: 1500px) 
    .wrapper-1 .content-wrapper
        width 1000px
        margin 0 auto
    .wrapper-1 .content
        width 476px
.wrapper-1 .content:nth-child(4), .wrapper-1 .content:nth-child(2)
    margin-right 0
.wrapper-1 .content img
    width 100%
.wrapper-1 .content .imgbox
    position relative
    cursor pointer
    font-size 0
.wrapper-1 .content .imgbox .mask
    position absolute
    background-color rgba(0,0,0,0.3)
    z-index 1
    left 0
    top 0
    width 100%
    height 100%
.wrapper-1 .content .imgbox .text
    color #fff
    position absolute
    left 50%
    top 50%
    z-index 999
    font-size 48px
    transform translate(-50%, -50%);
.wrapper-1 .content .intro
    line-height 21px
    padding 20px 20px 45px
    font-size 14px
    color #999
    /* border-radius: 50% */
.wrapper-2
    background-color #7dbbfe
.wrapper-2 .box
    width 1140px
    margin 0 auto
    height 500px
.wrapper-2 .box .left
    width 588px
    float left
.wrapper-2 .box .left .list
    /* display: flex;
    flex-direction: column; */
    /* justify-content: */
    line-height 1.4
.wrapper-2 .box .left .item
    /* display: flex;
    flex-direction: row; */
    color #fff
    margin-bottom 60px
    cursor pointer
    margin 47px 0
    overflow hidden
.wrapper-2 .box .left .list .active:nth-child(4) #right .top
    font-size 20px !important
.wrapper-2 .box .left .item .number
    float left
    font-size 20px
    margin 16px
    /* display: flex;
    align-items: center;
    justify-content: center */
.wrapper-2 .box .left .item .right
    float left
.wrapper-2 .box .left .item .right .top
    /* margin-bottom: 10px;
    position: relative; */
    /* transition: all .5s; */
    /* transform-origin: top left; */
    font-size 20px
.wrapper-2 .box .left .item .right .line
    width 100px
    height 2px
    margin 3px 0
    font-size 16px
    background rgba(255, 255, 255, 0.5)
.wrapper-2 .box .left .item .right .bottom
    font-size 16px
.wrapper-2 .box .left .item.active:nth-child(4) .right .top
    animation title-Ani2 5s forwards 
.wrapper-2 .box .left .item.active .right .top
    /* width: 290px;
    height: 65px; */
    animation title-Ani 5s forwards
    // font-weight 600
    font-size 32px
.wrapper-2 .box .left .item.active .number
    margin 56px 16px 0 16px
    animation data
.wrapper-2 .box .left .item.active .right .line
    /* width: 290px;
    height: 65px; */
    /* margin-top: 40px; */
    width 200px
    /* line-height: 1.42857143; */
    font-size 16px
.wrapper-2 .box .left .item.active .right .line .process
    animation process-Ani 5s infinite
    display block
    height 2px
    background-color #fff
.wrapper-2 .box .right-phone
    float right
    width 552px
@media only screen and (max-width: 1500px) 
    .wrapper-2 .box
        width: 1020px;
    .wrapper-2 .box .right-phone
        width 432px
        margin-top: 50px;
    .wrapper-2 .box .right-phone .phone
        width 200px !important 
        margin-right: 10px !important
    .wrapper-2 .box .right-phone .phone .img-box
        left: 12px !important 
        top: 48px !important 
        width: 176px !important 
        height: 315px !important 
.wrapper-2 .box .right-phone .phone:nth-child(1)
    float left
.wrapper-2 .box .right-phone .phone:nth-child(2)
    float right
.wrapper-2 .box .right-phone .phone
    background url('~assets/images/phone.png') no-repeat
    display block
    background-size contain
    float right
    margin-top 6px
    width 264px
    height 504px
    position relative
    margin-right -38px
.wrapper-2 .box .right-phone .phone .img-box
    /* border: 1px solid #666; */
    position absolute
    left 14px
    top 57px
    width 215px
    height 382px
    overflow hidden
    z-index 0
.wrapper-2 .box .right-phone .phone .img-box img
    width 100%
    height 100%
    position absolute
    z-index 1000
.wrapper-3 .box
    // width 1600px
    margin 0 auto
.wrapper-3 .box .left
    float left
    margin-left 221px
    margin-top 173px
.wrapper-3 .box .left .title
    color #333333
    font-size 48px
    width 250px
    line-height 62px
    font-weight bold
    margin-bottom 20px
.wrapper-3 .box .left p
    font-size 18px
    letter-spacing 2px
.wrapper-3 .box .right
    float right
    margin-right 50px
.wrapper-3 .video
    width 930px
    // @media only screen and (max-width: 1440px) and (min-width: 1280px)
    // width: 725px;
    // @media only screen and (max-width: 1280px) and (min-width: 1024px)
    // width: 609px;
.swiper-pagination-bullet-active
    background-color #eaeaea
.banner .swiper-container .swiper-slide:nth-child(3) .img{
    background-position 0 0
}
@media only screen and (max-width: 1500px) and (min-width: 1280px)
    .wrapper-3 .video
        width: 725px;
        height: 421px;
    .wrapper-3 .box .left
        margin-left 100px
@media only screen and (max-width: 1280px)
    .wrapper-3 .box .left
        margin-left: 65px;
    .wrapper-3 .video
        width: 609px;
        height: 421px;

@keyframes number-Ani
    0%
        margin 0 16px 0 16px
    10%
        margin 56px 16px 0 16px
    100%
        margin 56px 16px 0 16px
@keyframes title-Ani
    0%
        font-size 16px
    10%
        font-size 46px
    100%
        font-size 46px
@keyframes title-Ani2
    0%
        font-size 16px
    10%
        font-size 38px
    100%
        font-size 38px
@keyframes process-Ani
    0%
        width 0
    100%
        width 100%
/* .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
.fade-leave-to  {
    opacity: 0;
  } */
.fade-enter-active, .fade-leave-active
    transition all 1s ease
.fade-enter, .fade-leave-to
    opacity 0
</style>
