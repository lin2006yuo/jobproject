<template>
    <div class="index">
        <navigator></navigator>
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in bannerImgList" :key="index">
                    <div :style="{backgroundImage: 'url('+item.url+')'}" class="img" alt="">
                        <p class="text">{{item.text}}</p>
                        <div class="mask"></div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </div>
        <div class="wrapper wrapper-1">
            <div class="title">
                <p>产品模块介绍</p>
            </div>
            <div class="content-box clearfix">
                <div class="content"><img src="@/assets/images/a1.jpg" alt="">
                    <div class="intro">"天使之翼Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学，懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。</div>
                </div>
                <div class="content"><img src="@/assets/images/a2.jpg" alt="">
                    <div class="intro">"天使之翼Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学，懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。</div>
                </div>
                <div class="content"><img src="@/assets/images/a3.jpg" alt="">
                    <div class="intro">"天使之翼Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学，懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。</div>
                </div>
                <div class="content"><img src="@/assets/images/a4.jpg" alt="">
                    <div class="intro">"天使之翼Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学，懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。</div>
                </div>
            </div>
        </div>
        <div class="wrapper wrapper-2">
            <div class="box clearfix">
                <div class="left">
                    <ul class="list">
                        <div class="item" :class="{active: currentIndex === index}" v-for="(item,index) in 4" :key="index" @click="listItemClick(index)">
                            <div class="number ">0{{item}}</div>
                            <div class="right">
                                <div class="top">婚礼 Wedding</div>
                                <div class="line"><i class="process"></i></div>
                                <div class="bottom">高端婚礼策划，定制属于你的美</div>
                            </div>
                        </div>

                    </ul>
                </div>
                <div class="right-phone clearfix">
                    <div class="phone">
                        <div class="img-box">
                            <transition-group tag="ul" name="fade" move-class="cl1">
                                <img v-show="currentIndex === index" v-for="(src, index) in srcList" :key="index" :src="src" alt="">
                            </transition-group>
                        </div>
                    </div>
                    <div class="phone">
                        <div class="img-box">
                            <transition-group tag="div" name="fade">
                                <img v-show="currentIndex === index" v-for="(src, index) in srcList2" :key="index" :src="src" alt="">
                            </transition-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper wrapper-3">
            <div class="box clearfix">
                <div class="left">
                    <div class="title">全世界的小妮子</div>
                    <p>为完美女人的明天共同成长</p>
                </div>
                <div class="right">
                    <video muted src="@/assets/video/map.mp4" autoplay="autoplay" class="video"></video>
                </div>
            </div>

        </div>
        <mfooter></mfooter>
    </div>
</template>

<script type="text/ecmascript-6">
import Navigator from "@/components/nav.vue";
import Mfooter from '@/components/footer.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    data() {
        return {
            mySwiper: "",
            currentIndex: 0,
            bounceTimer: null,
            bannerImgList: [
                {
                    url: require("@/assets/images/slider1.jpg"),
                    text: "天使之翼为亿万女性打造 完美女人做出贡献"
                },
                {
                    url: require("@/assets/images/slider2.jpg"),
                    text: ""
                },
                {
                    url: require("@/assets/images/slider3.jpg"),
                    text: ""
                }
            ],
            srcList: [
                require("@/assets/images/phone/婚礼/婚礼素材库.png"),
                require("@/assets/images/phone/孕育/孕妇规划.png"),
                require("@/assets/images/phone/教育/教育首页.png"),
                require("@/assets/images/phone/育儿/育儿工具.png")
            ],
            srcList2: [
                require("@/assets/images/phone/婚礼/婚礼.png"),
                require("@/assets/images/phone/孕育/社交 怀孕周期.png"),
                require("@/assets/images/phone/教育/视频推荐页.png"),
                require("@/assets/images/phone/育儿/育儿社交1.png")
            ],
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                loop: true,
                pagination: {
                    el: ".swiper-pagination"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    components: {
        Navigator,
        swiper,
        swiperSlide,
        Mfooter
    },
    mounted() {
        this._initTimeInterval();
    },
    methods: {
        listItemClick(index) {
            this.currentIndex = index;
            clearInterval(this.time);
            if (this.bounceTimer) {
                return;
            } else {
                this.bounceTimer = setTimeout(() => {
                    this._initTimeInterval();
                }, 5000);
            }
        },
        _initTimeInterval() {
            this.time = setInterval(() => {
                if (this.currentIndex === 3) {
                    this.currentIndex = -1;
                }
                this.currentIndex++;
            }, 5000);
        }
    }
};
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
    font-size 67px
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
    width 50%
    height 2px
    background-color #666
    left 50%
    transform translateX(-50%)
.wrapper-1 .content-box
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    margin-top 60px
    /* width: 1153px; */
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
.wrapper-1 .content:nth-child(4), .wrapper-1 .content:nth-child(2)
    margin-right 0
.wrapper-1 .content img
    width 100%
.wrapper-1 .content .intro
    padding 20px 20px 45px
    font-size 15px
    line-height 19px
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
    font-weight 600
    font-size 20px
.wrapper-2 .box .left .item .right .line
    width 100px
    height 2px
    margin 3px 0
    font-size 16px
    background rgba(255, 255, 255, 0.5)
.wrapper-2 .box .left .item .right .bottom
    font-size 16px
.wrapper-2 .box .left .item.active .right .top
    /* width: 290px;
    height: 65px; */
    animation title-Ani 5s forwards
    font-weight 600
    font-size 36px
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
.wrapper-2 .box .right-phone .phone .img-box img
    width 100%
    height 100%
    position absolute
.wrapper-3 .box
    width 1600px
    margin 0 auto
.wrapper-3 .box .left
    float left
    margin-left 221px
    margin-top 173px
.wrapper-3 .box .left .title
    font-size 50px
    width 250px
    line-height 70px
    font-weight bold
    margin-bottom 20px
.wrapper-3 .box .left p
    font-size 18px
    letter-spacing 2px
.wrapper-3 .box .right
    float right
.wrapper-3 .video
    width 930px
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
        font-size 48px
    100%
        font-size 48px
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
