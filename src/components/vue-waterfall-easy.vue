<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="stylus" scoped>
.vue-waterfall-easy-container {
  width: 100%;
  height: 100%;
  position: relative;

  .vue-waterfall-easy-scroll {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  @media screen and (max-width: 1440px) {
    .vue-waterfall-easy {
      left: 48% !important;
    }
  }

  @media screen and (max-width: 1360px) {
    .vue-waterfall-easy {
      left: 40% !important;
    }
  }

  @media screen and (max-width: 1200px) {
    .vue-waterfall-easy {
      left: 56% !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .vue-waterfall-easy {
      left: 48% !important;
    }
  }

  @media screen and (max-width: 900px) {
    .vue-waterfall-easy {
      left: 65% !important;
    }
  }

  .vue-waterfall-easy {
    position: absolute;
    width: 100%; // 移动端生效

    @keyframes show-card {
      0% {
        transform: scale(0.5);
      }

      100% {
        transform: scale(1);
      }
    }

    & > .img-box {
      position: absolute;
      box-sizing: border-box;
      width: 50%; // 移动端生效
    }

    & > .img-box.default-card-animation {
      animation: show-card 0.4s;
      transition: left 0.6s, top 0.6s;
      transition-delay: 0.1s;
    }

    a {
      display: block;
    }

    a.img-inner-box {
      box-shadow: 0 0px 26px -3px rgba(0,0,0,0.2)
      border-radius: 4px;
      cursor pointer
    }

    .__err__ .img-wraper {
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50% 50%;

      img {
        display: none;
      }
    }

    a.img-wraper {
      &:hover {
        opacity 0.9
      }
      & > img {
        width: 100%;
        display: block;
        border: none;
      }
    }

    .over {
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 12px;
      line-height: 1.6;
      color: #666;
    }
  }

  .waterfooter {
    position: absolute;
    width: 100%;
  }

  & > .loading.first {
    bottom: 50%;
    transform: translate(-50%, 50%);
  }

  & > .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6px;
    z-index: 999;

    @keyframes ball-beat {
      50% {
        opacity: 0.2;
        transform: scale(0.75);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.ball-beat > .dot {
      vertical-align: bottom;
      background-color: #4b15ab;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 3px;
      animation-fill-mode: both;
      display: inline-block;
      animation: ball-beat 0.7s 0s infinite linear;
    }

    &.ball-beat > .dot:nth-child(2n-1) {
      animation-delay: 0.35s;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template>
<div class="vue-waterfall-easy-container" :style="{width: width&amp;&amp;!isMobile ? width+'px' : '', height: parseFloat(height)==height ? height+'px': height }">
    <div class="loading ball-beat" v-show="isPreloading_c" :class="{first:isFirstLoad}">
        <slot name="loading" :isFirstLoad="isFirstLoad"></slot>
        <div class="dot" v-if="!hasLoadingSlot" v-for="n in loadingDotCount" :style="loadingDotStyle" :key="n"></div>
    </div>
    <div class="vue-waterfall-easy-scroll" ref="scrollEl">
        <slot name="waterfall-head"></slot>
        <div class="vue-waterfall-easy" :style="isMobile? '' :{width: colWidth*cols+'px',left:'50%', marginLeft: -20 +'%'}">
            <slot name="imgheader">imgheader</slot>
            <div class="img-box" v-for="(v,i) in imgsArr_c" :key="i" :class="[cardAnimationClass, {__err__: v._error}]" :style="{padding: (isMobile ? mobileGap : gap)/2+'px', width: isMobile ? '' : colWidth+'px'}">
                <component class="img-inner-box" :is="isRouterLink  &amp;&amp; linkRange=='card' ? 'router-link' : 'alink'"
                    :data-index="i" :to="linkRange=='card' ? v[hrefKey] : false">
                    <component class="img-wraper" v-if="v[srcKey]" :is="isRouterLink &amp;&amp; linkRange=='img' ? 'router-link' :'alink'"
                        :to="linkRange=='img' ? v[hrefKey] : false " :style="{width:imgWidth_c + 'px',height:v._height ? v._height+'px':false}"><img
                            :src="v[srcKey]" /></component>
                    <slot :index="i" :value="v"></slot>
                </component>
            </div>
            <div class="over" v-if="over" ref="over">
                <slot name="waterfall-over">被你看光了</slot>
            </div>
        </div>
        <div class="waterfooter" ref="footer" v-if="over">
          <slot name="waterfall-footer">底部</slot>
        </div>
    </div>
</div>
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
import alink from "./alink.vue";

export default {
  name: "vue-waterfall-easy",
  components: {
    alink
  },
  props: {
    width: {
      // 容器宽度
      type: Number
    },
    height: {
      // 容器高度
      type: [Number, String]
    },
    reachBottomDistance: {
      // 滚动触底距离，触发加载新图片
      type: Number, // selector
      default: 20 // 默认在最低那一列到底时触发
    },
    loadingDotCount: {
      // loading 点数
      type: Number,
      default: 3
    },
    loadingDotStyle: {
      type: Object
    },
    gap: {
      // .img-box 间距
      type: Number,
      default: 20
    },
    ygap: {
      type: Number,
      default: 0
    },
    mobileGap: {
      type: Number,
      default: 8
    },
    maxCols: {
      type: Number,
      default: 5
    },
    imgsArr: {
      type: Array,
      required: true
    },
    srcKey: {
      type: String,
      default: "src"
    },
    hrefKey: {
      type: String,
      default: "href"
    },
    imgWidth: {
      type: Number,
      default: 240
    },
    isRouterLink: {
      type: Boolean,
      default: false
    },
    linkRange: {
      // card | img | custom 自定义通过slot自定义链接范围
      type: String,
      default: "card"
    },
    loadingTimeOut: {
      // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
      type: Number,
      default: 500
    },
    cardAnimationClass: {
      type: [String],
      default: "default-card-animation"
    },
    enablePullDownEvent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "this is from vue-waterfall-easy.vue",
      isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i), // 初始化移动端
      isPreloading: true, // 正在预加载中，显示加载动画
      isPreloading_c: true,
      imgsArr_c: [], // 待图片预加载imgsArr完成，插入新的字段height之后,才会生成imgsArr_c，这时才开始渲染
      loadedCount: 0,
      cols: NaN, // 需要根据窗口宽度初始化
      imgBoxEls: null, // 所有的.img-box元素
      beginIndex: 0, // 开始要排列的图片索引,首次为第二列的第一张图片，后续加载则为已经排列图片的下一个索引
      colsHeightArr: [],
      // 自定义loading
      LoadingTimer: null,
      isFirstLoad: true, // 首次加载
      over: false, // 结束waterfall加载,
      viewportWith: window.innerWidth
    };
  },
  computed: {
    colWidth() {
      // 每一列的宽度
      return this.imgWidth + this.gap;
    },
    imgWidth_c() {
      // 对于移动端重新计算图片宽度`
      return this.isMobile
        ? window.innerWidth / 2 - this.mobileGap
        : this.imgWidth;
    },
    hasLoadingSlot() {
      return !!this.$scopedSlots.loading;
    }
  },
  mounted() {
    this.bindClickEvent();
    this.loadingMiddle();

    this.preload();
    this.cols = this.calcuCols();
    this.$on("preloaded", () => {
      this.isFirstLoad = false;

      this.imgsArr_c = this.imgsArr.concat([]); // 预加载完成，这时才开始渲染
      this.$nextTick(() => {
        this.isPreloading = false;
        this.imgBoxEls = this.$el.getElementsByClassName("img-box");
        // console.log('图片总数', this.imgBoxEls.length)
        this.waterfall();
      });
    });
    if (!this.isMobile && !this.width) this.response();
    if (this.isMobile && this.enablePullDownEvent) this.pullDown();
    this.scroll();
  },
  watch: {
    isPreloading(newV, oldV) {
      if (newV) {
        setTimeout(() => {
          if (!this.isPreloading) return; // 500毫秒内预加载完图片则不显示加载动画
          this.isPreloading_c = true;
        }, this.loadingTimeOut);
      } else {
        this.isPreloading_c = false;
      }
    },
    imgsArr(newV, oldV) {
      if (oldV.length > 0 && newV[0] && !newV[0]._height) {
        // console.log('reset')
        this.reset();
      }
      this.preload();
    }
  },
  methods: {
    // ==1== 预加载
    preload(src, imgIndex) {
      this.imgsArr.forEach((imgItem, imgIndex) => {
        if (imgIndex < this.loadedCount) return; // 只对新加载图片进行预加载
        // 无图时
        if (!imgItem[this.srcKey]) {
          this.imgsArr[imgIndex]._height = "0";
          this.loadedCount++;

          // 支持无图模式
          if (this.loadedCount == this.imgsArr.length) {
            this.$emit("preloaded");
          }
          return;
        }

        var oImg = new Image();
        oImg.src = imgItem[this.srcKey];
        oImg.onload = oImg.onerror = e => {
          this.loadedCount++;
          // 预加载图片，计算图片容器的高
          this.imgsArr[imgIndex]._height =
            e.type == "load"
              ? Math.round(this.imgWidth_c / (oImg.width / oImg.height))
              : this.isMobile
                ? this.imgWidth_c
                : this.imgWidth;
          if (e.type == "error") {
            this.imgsArr[imgIndex]._error = true;
            this.$emit("imgError", this.imgsArr[imgIndex]);
          }

          if (this.loadedCount == this.imgsArr.length) {
            this.$emit("preloaded");
          }
        };
      });
    },
    // ==2== 计算cols
    calcuCols() {
      // 列数初始化
      var waterfallWidth = this.width ? this.width : window.innerWidth;
      var cols = parseInt((waterfallWidth - 240) / this.colWidth);
      cols = cols === 0 ? 1 : cols;
      return this.isMobile ? 2 : cols > this.maxCols ? this.maxCols : cols;
    },
    // ==3== waterfall布局
    waterfall() {
      if (!this.imgBoxEls) return;
      // console.log('waterfall')
      var top,
        left,
        height,
        colWidth = this.isMobile
          ? this.imgBoxEls[0].offsetWidth
          : this.colWidth;
      if (this.beginIndex == 0) this.colsHeightArr = [];
      for (var i = this.beginIndex; i < this.imgsArr.length; i++) {
        if (!this.imgBoxEls[i]) return;
        height = this.imgBoxEls[i].offsetHeight;
        if (i < this.cols) {
          this.colsHeightArr.push(height);
          top = 0;
          left = i * colWidth;
        } else {
          var minHeight = Math.min.apply(null, this.colsHeightArr); // 最低高低
          var minIndex = this.colsHeightArr.indexOf(minHeight); // 最低高度的索引
          top = minHeight + this.ygap; //
          left = minIndex * colWidth;
          // 设置元素定位的位置
          // 更新colsHeightArr
          this.colsHeightArr[minIndex] = minHeight + height + this.ygap;
        }

        this.imgBoxEls[i].style.left = left + "px";
        this.imgBoxEls[i].style.top = top + 264 + "px"; // lxy top 100为头部距离顶部
      }

      this.beginIndex = this.imgsArr.length; // 排列完之后，新增图片从这个索引开始预加载图片和排列
    },

    // ==4== resize 响应式
    response() {
      window.addEventListener("resize", () => {
        // lxy
        this.viewportWith = window.innerWidth;

        var old = this.cols;
        this.cols = this.calcuCols();
        if (old === this.cols) {
          return; // 列数不变直接退出
        }
        this.beginIndex = 0; // 开始排列的元素索引
        this.waterfall();
        if (this.over) this.setOverTipPos();
      });
    },

    // ==5== 滚动触底事件
    scrollFn() {
      var scrollEl = this.$refs.scrollEl;
      if (this.isPreloading) return;
      var minHeight = Math.min.apply(null, this.colsHeightArr);
      if (
        scrollEl.scrollTop + scrollEl.offsetHeight >
        minHeight - this.reachBottomDistance
      ) {
        this.isPreloading = true;
        // console.log('scrollReachBottom')
        this.$emit("scrollReachBottom"); // 滚动触底
      }
    },
    scroll() {
      this.$refs.scrollEl.addEventListener("scroll", this.scrollFn);
    },
    waterfallOver() {
      this.$refs.scrollEl.removeEventListener("scroll", this.scrollFn);
      this.isPreloading = false;
      this.over = true;
      this.setOverTipPos();
    },
    setOverTipPos() {
      var maxHeight = Math.max.apply(null, this.colsHeightArr);
      this.$nextTick(() => {
        this.$refs.over.style.top = maxHeight + 284 + "px";
      });
      this.$nextTick(() => {
        this.$refs.footer.style.top = maxHeight + 450 + "px";
      });
    },
    // ==6== 点击事件绑定
    bindClickEvent() {
      this.$el
        .querySelector(".vue-waterfall-easy")
        .addEventListener("click", e => {
          var targetEl = e.target;
          if (e.target.className.indexOf("over") !== -1) return;
          if (targetEl.className.indexOf("img-box") != -1) return;
          while (targetEl.className.indexOf("img-inner-box") == -1) {
            targetEl = targetEl.parentNode;
          }
          var index = targetEl.getAttribute("data-index");
          this.$emit("click", e, {
            index,
            value: this.imgsArr_c[index]
          });
        });
    },
    // ==7== 下拉事件
    pullDown() {
      var scrollEl = this.$el.querySelector(".vue-waterfall-easy-scroll");
      var startY;
      scrollEl.addEventListener("touchmove", e => {
        if (scrollEl.scrollTop === 0) {
          var t = e.changedTouches[0];
          if (!startY) startY = t.pageY;
          var pullDownDistance = t.pageY - startY;
          if (pullDownDistance > 0) {
            e.preventDefault();
          }
          this.$emit("pullDownMove", pullDownDistance);
        }
      });
      scrollEl.addEventListener("touchend", e => {
        if (scrollEl.scrollTop === 0) {
          startY = NaN;
          this.$emit("pullDownEnd");
        }
      });
    },
    // other
    loadingMiddle() {
      // 对滚动条宽度造成的不居中进行校正
      var scrollEl = this.$el.querySelector(".vue-waterfall-easy-scroll");
      var scrollbarWidth = scrollEl.offsetWidth - scrollEl.clientWidth;
      this.$el.querySelector(".loading").style.marginLeft =
        -scrollbarWidth / 2 + "px";
    },
    reset() {
      this.imgsArr_c = [];
      this.beginIndex = 0;
      this.loadedCount = 0;
      this.isFirstLoad = true;
      this.isPreloading = true;
      this.scroll();
      this.over = false;
    }
  }
};
</script>
