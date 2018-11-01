<template>
  <div class="detailPage">
      <div class="dePagebox">
        <div class="article">
          <!-- 标题信息栏 -->
          <div class="article-title">
            <div class="de-title">新娘手捧花有哪些讲究</div>
            <div class="de-intro-wrapper">
              <div class="de-intro de-views"><i class="iconfont icon-view" style="font-size: 18px;margin-right: 10px"></i> 1052</div>
              <div class="de-intro de-update">更新时间：2018-09-26</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="article-wrapper">
            <div class="article-content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ea minus, libero necessitatibus eveniet delectus ratione culpa inventore beatae deserunt explicabo sit eius maxime commodi sint fugiat asperiores velit ipsam.
            </div>
            <div class="article-choose">
              <p class="pagechose last"><a>上一篇文章标题</a></p>
              <p class="pagechose next"><a>下一篇文章标题</a></p>
            </div>
            <div class="article-more" @click="moreArt" v-show="!showMore">
              <div class="dotbox">
                <div class="dot dot1"></div>
                <div class="dot dot2"></div>
                <div class="dot dot3"></div>
                <span class="more">更多文章</span>
              </div>
            </div>
            <div class="line" style="background-color: #eee" v-show="showMore"></div>
            <div class="articles" v-show="showMore">
              <p class="item"><a>悦人不如悦己：你若盛开，清风自来</a></p>
              <p class="item"><a>灵感：你值得一去的蜜月旅行地</a></p>
              <p class="item"><a>灵感：华丽而古朴的科罗拉多婚礼</a></p>
              <p class="item"><a>人品好的人，自带光芒</a></p>
              <p class="item"><a>善良，是我们为自己留下的路标</a></p>
            </div>
          </div>
          <div class="line"></div>
          <div class="de-bottom">
            <!-- like选择 -->
            <div class="like" @click="ilikeit" >
                <transition name="bounce">
                  <component v-bind:is="like"></component>
                </transition>
                <div class="likecount">{{likeCount}}</div>
            </div>
            <div class="sharewrapper">
              <div class="sharebox">
                <div class="shareicon">
                  <img src="@/assets/images/share/icon_weibo.png" alt="">
                </div>
                <div class="shareicon">
                  <img src="@/assets/images/share/icon_wechat.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <mfooter></mfooter>
  </div>
</template>

<script>
import Mfooter from '@/components/footer.vue'


export default {
  components: {
    'unlike' : {
      template: `<div class="iconbox unlike-box"><i style="font-size: 28px" class="iconfont icon-hlike"></i></div>`
    },
    'like' : {
      template: `<div class="iconbox unlike-box"><i style="font-size: 28px;color: pink" class="iconfont icon-like_placeholder"></i></div>`
    },
    Mfooter
  },
  props: {},
  data() {
    return {
      likeCount: 520,
      like: 'unlike',
      showMore: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    ilikeit(){
      if(this.like === 'like'){
        this.likeCount --
        this.like = 'unlike'
      }else{
        this.likeCount ++
        this.like = 'like'
      }
    },
    moreArt(){
      this.showMore = true
    }
  },
  created() {},
  mounted() {
      // console.log(this.$route.query.id)  //路由传递参数
  }
};
</script>
<style  scoped lang='stylus'>
@import '~assets/css/mixin'

.detailPage
  padding-top  84px
  .dePagebox
    width 1140px
    margin 0 auto
    .article
      margin-top 100px
      .article-title
        text-align center
        .de-title
          font-size 34px
        .de-intro-wrapper
          clearfix()
          display inline-block
          color #999
          margin-top 30px
          font-size 17px
          .de-intro
            float left
            &.de-views
              margin-right 26px
      .line
        width 100%
        height 1px
        background-color #d7d7d7
        margin 30px 0
      .article-wrapper
        width 960px
        margin 0 auto
        line-height 30px
        .article-choose
          margin-top 20px
          font-size 15px
          color #999
          clearfix()
          .pagechose:hover
            cursor pointer
            text-decoration underline
          .last
            float left
          .next
            float right
        .article-more
          text-align center
          margin-top 20px
        .articles
          .item
            a
              cursor pointer
              color #555
              &:hover
                color #000
        .dotbox
          display inline-block
          cursor pointer
          position relative
          &:hover
            .dot1
              animation bounce1 .5s infinite
            .dot2
              animation bounce1 .5s .2s infinite
            .dot3
              animation bounce1 .5s  .4s infinite
            .more
              opacity 1
          .more
            position absolute
            left -10px
            top -24px
            color #bbb
            font-size 14px
            white-space nowrap
            opacity 0
            transition opacity .5s
        .dot
          width 8px
          height 8px
          border-radius 50%
          background-color #555
          display inline-block
      .de-bottom
        text-align center
        .like
          display inline-block
          color #999
          font-size 24px
          cursor pointer
          user-select none
          .iconbox
            display inline-block
            width 30px
          .likecount
            margin-top 6px
            font-size 20px
        .sharewrapper
          text-align center
          margin 25px 0
          clearfix()
          .sharebox
            display inline-block
            position relative
            &:before
              content '分享'
              display block
              position absolute
              left -44px
              top 12px
              color #999
            .shareicon
              width 40px
              height 40px
              margin 0 6px
              display inline-block
              cursor pointer
              img 
                width 100%

.unlike-box:hover
  color pink
//动画
.bounce-enter-active {
  animation: bounce-in .5s;
}
// .bounce-leave-active {
//   animation: bounce-in .5s reverse;
// }

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce1
  0%
    transform translateY(0)
  50%
    transform translateY(-100%)
  100%
    transform translateY(0)
</style>