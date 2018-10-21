<template>
    <div class="about">
        <navigator></navigator>
        <banner :src="url"></banner>
        <div class="wrapper">
            <div class="introbox">
                <div class="title">公司简介</div>
                <div class="info-box">
                    <p class="info">天使之翼 Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学
                        ,懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。
                    </p>
                    <p class="info">
                        我们服务的内容主要包括婚礼，育婴，家庭教育等；共分为六个主题：天使婚礼，天使孕妈，天
                        使婴幼儿，天使胄少年，天使完美女人，天使大咖。为不同阶段的中国新女性提供相对应的信息
                        服务。
                    </p>
                    <p class="info">
                        优势：打造芫美女性，让女性更加懂得生活，懂得学习，懂得去教育下一代，以及教会女人变得
                        时尚。让女人变得更加富有内涵，气质突显。
                    </p>
                </div>
                <div class="icon-box clearfix">
                    <div class="icon-item">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">愿景</div>
                        <p class="icon-text">成为最受女性欢迎的新媒体平台</p>
                    </div>
                    <div class="icon-item">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">愿景</div>
                        <p class="icon-text">成为最受女性欢迎的新媒体平台</p>
                    </div>
                    <div class="icon-item">
                        <i class="icon debug-icon"></i>
                        <div class="icon-title">愿景</div>
                        <p class="icon-text">成为最受女性欢迎的新媒体平台</p>
                    </div>
                </div>
            </div>
            <div class="information-box">
                <span class="line"></span>
                <div class="info-box">
                    <p class="info">天使之翼 Angelswing"作为新女性数字新媒体平台，励志为中国新时代女性提供一个时尚，科学
                        ,懂人性，懂文化，知人性，会生活的，做完美女人，一个会让你变得更好女人的教育平台。
                    </p>
                    <p class="info">
                        我们服务的内容主要包括婚礼，育婴，家庭教育等；共分为六个主题：天使婚礼，天使孕妈，天
                        使婴幼儿，天使胄少年，天使完美女人，天使大咖。为不同阶段的中国新女性提供相对应的信息
                        服务。
                    </p>
                    <p class="info">
                        优势：打造芫美女性，让女性更加懂得生活，懂得学习，懂得去教育下一代，以及教会女人变得
                        时尚。让女人变得更加富有内涵，气质突显。
                    </p>
                </div>
                <div class="info-title-box">
                    <p class="info-title">关键指标数据</p>
                    <p class="info-title-b">关注女性婚礼、孕育、育儿、家庭教育</p>
                </div>
                <div class="data-box clearfix">
                    <div class="data-left">
                        <div class="data-l-item" v-for="item in 5" :key="item">
                            <p class="data-l-number">21559</p>
                            <p class="data-l-intro">用户量</p>
                        </div>
                    </div>
                    <div class="data-right">
                        <div class="data-r-item" v-for="item in 5" :key="item">
                            <p class="data-r-title">主流用户</p>
                            <p class="data-r-intro">20岁至40岁女性</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <mfooter></mfooter>
    </div>
</template>

<script type="text/ecmascript-6">
import Navigator from "@/components/nav";
import Banner from "@/components/banner";
import Mfooter from '@/components/footer'
import img from '@/assets/images/information_banner.jpg'


export default {
    data() {
        return {
            url: img
        };
    },
    components: {
        Banner,
        Navigator,
        Mfooter
    }
};
</script>

<style scoped lang="stylus">
@import '~assets/css/mixin'
.wrapper
    width 1140px
    margin 0 auto
    /* border-bottom: 1px solid #666; */
    padding 95px 0 0
    text-align center
/* intro */
.wrapper .introbox
    width 900px
    margin 0 auto
    padding-bottom 80px
    /* border-bottom: 1px solid #999; */
.wrapper .introbox .title
    font-size 47px
    font-weight lighter
    color #484848
.wrapper .introbox .info-box
    margin 70px 0 100px 0
.wrapper .introbox .info-box .info
    text-align left
    line-height 24px
    margin-bottom 30px
    font-size 16px
    color #999
    letter-spacing 1px
.wrapper .introbox .icon-box
    clearfix()
.wrapper .introbox .icon-box .icon-item
    float left
    width 33%
    text-align center
.wrapper .introbox .icon-box .icon-item i
    display inline-block
    width 120px
    height 120px
    background-image url('~assets/images/icon_test.png')
    margin-bottom 20px
.debug-icon {
    background-position: -65px -8px
}
.wrapper .introbox .icon-box .icon-item .icon-title
    font-size 20px
    font-weight bold
    margin 20px 0
    color #666
.wrapper .introbox .icon-box .icon-item .icon-text
    letter-spacing 2px
    letter-spacing 1px
    color #999
/* line */
.wrapper .information-box .line
    position absolute
    left 50%
    transform translateX(-50%)
    top 0
    display block
    height 1px
    width 1140px
    background-color #d8d8d8
/* information-box */
.wrapper .information-box
    position relative
    margin 0 auto
    width 900px
    padding 80px 0 80px
.wrapper .information-box .info-box
    color #666
    text-align left
    margin-bottom 70px
.wrapper .information-box .info-box .info
    text-align left
    line-height 24px
    margin-bottom 22px
    font-size 16px
    color #999
    letter-spacing 1px
.wrapper .information-box .info-title
    font-size 48px
    margin-bottom 13px
.wrapper .information-box .info-title-b
    font-size 15px
    color #999
/* *data-box */
.wrapper .info-title-box
    margin 0 auto
    width 900px
    padding 80px 0 80px
.wrapper .data-box
    clearfix()
/* left */
.wrapper .data-box .data-left
    float left
    margin-right 90px
/* right */
.wrapper .data-box .data-right
    float left
/* item  left */
.wrapper .data-box .data-left .data-l-item
    margin-bottom 30px
.wrapper .data-box .data-left .data-l-item .data-l-number
    font-size 38px
    font-weight bold
    margin 0 0 13px 0
    background linear-gradient(to right, #9bdbfb, #7cbafe)
    -webkit-background-clip text
    /* background-clip: text; */
    color transparent
.wrapper .data-box .data-left .data-l-item .data-l-intro
    text-align right
    font-size 12px
    color #666
/* item right */
.wrapper .data-box .data-right .data-r-item
    text-align left
    margin-bottom 50px
.wrapper .data-box .data-right .data-r-item .data-r-title
    font-weight bold
    font-size 14px
    margin 20px 0 20px 0
.wrapper .data-box .data-right .data-r-item .data-r-intro
    font-size 14px
    color #666
</style>
