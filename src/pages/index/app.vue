<template>
    <div class="index">
        <navigator 
            :color="$route.name === 'page' || $route.name === 'detailPage'? '#555' : '#eaeaea'"
            :shadow="$route.name === 'page' || $route.name === 'detailPage'? true : false"
            :bgColor="$route.name === 'page' || $route.name === 'detailPage'? '#fff' : ''"
            :logo="$route.name === 'page' || $route.name === 'detailPage'? 'xxx' : 'blue'"
        ></navigator>
        <router-view @scorll="scorllHandle"></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
import Navigator from "@/components/nav.vue";

import {isMobile} from '@/assets/js/mobile.js'

export default {
    data() {
        return {

        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    components: {
        Navigator,
    },
    mounted() {
        // this._initTimeInterval();
        isMobile()
    },
    methods: {
        scorllHandle(){
            console.log('父scorll')
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
