<template>
  <div class="page">
        <!-- 左 -->
        <!-- <div class="page-left">
            <ul class="page_meus">
                <li class="page_item">婚纱</li>
                <li class="page_item">婚礼场地</li>
                <li class="page_item">伴娘礼服</li>
                <li class="page_item">花束</li>
                <li class="page_item">钻戒</li>
                <li class="page_item">花童礼服</li>
            </ul>
        </div> -->
        <!-- 右 -->
        <ul class="page-menu">
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 1}" @click="menuItemClickHandle(1)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-1" v-show="curMenuItemIndex === 1"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-1" ></i></div>
              婚纱</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 2}" @click="menuItemClickHandle(2)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-3" v-show="curMenuItemIndex === 2"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-3" ></i></div>
              婚礼场地</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 3}" @click="menuItemClickHandle(3)">
              <!-- <transition name="scale"><i class="iconfont icon-lifuzhuanhuan" v-show="curMenuItemIndex === 3"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon icon-lifuzhuanhuan" ></i></div>
              伴娘礼服</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 4}" @click="menuItemClickHandle(4)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-2" v-show="curMenuItemIndex === 4"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-2" ></i></div>
              花束</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 5}" @click="menuItemClickHandle(5)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-" v-show="curMenuItemIndex === 5"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-"></i></div>
              钻戒</li>
        </ul>
            <vue-waterfall-easy 
                ref="waterfall"
                :imgsArr="imgsArr"
                :maxCols="3"
                :imgWidth="300"
                :ygap="20"
                @click="clickHandle"
                @scrollReachBottom="fetchImgsData"
                >
                <!-- <div slot="waterfall-head" class="waterfall-head">
                    <p class="page-title">婚礼素材的采集者</p>
                    <p class="page-intro">高端婚礼策划</p>
                </div> -->
                <div slot="imgheader" style="margin-top: 164px;text-align:center">
                    <p class="page-title">婚礼素材的采集者</p>
                    <p class="page-intro">高端婚礼策划,定制属于你的美</p>
                </div>
                <div class="img-info" slot-scope="props">
                    <p class="some-info">第{{props.index+1}}张图片</p>
                    <p class="some-info">{{props.value.id}}</p>
                </div>
                <div slot="waterfall-over">没有啦</div>
                 <div slot="waterfall-footer">
                     <mfooter></mfooter>
                 </div>
            </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from '@/components/vue-waterfall-easy'
import { debounce,throttle } from 'assets/js/util.js'
import Mfooter from '@/components/footer.vue'

export default {
  components:{
      vueWaterfallEasy,
      Mfooter
  },
  props:{},
  data(){
    return {
        imgsArr: [],
        count: 1,
        curMenuItemIndex: 1
    }
  },
  watch:{},
  computed:{},
  methods:{
　　　initImgsArr (n, m) {   //初始化图片数组的方法，把要加载的图片装入
　　　　var arr = []
　　　　for (var i = n; i < m; i++) {
// 　　　　　　arr.push({ src: `https://dummyimage.com/200x${i+1}00/ffffff/000000`, link: '', info: '一些图片描述文字' }) //src为加载的图片的地址、link为超链接的链接地址、　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//info为自定义的图片展示信息，请根据自己的情况自行填写
              arr.push({ src: `static/img/${i+1}.jpg`, info: i, id: i })
　　　　}
        console.log(this.imgsArr);
        
　　　　return arr
　　　},
　　　fetchImgsData () {
        this.count ++    //获取新的图片数据的方法，用于页面滚动满足条件时调用
        if(this.count >= 5){
          console.log('没有了')
          this.$refs.waterfall.waterfallOver()
          return false
        }
        console.log('滚动拉取')
　　　　this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
　　　},
        menuItemClickHandle(index){
            this.imgsArr = this.initImgsArr(0, 20) 
            this.curMenuItemIndex = index
        },
        clickHandle(event, { index, value }){
            this.$router.push({
                name: 'detailPage'
            })
            console.log(event, index, value)
        }
  },
  created(){
　　　　this.imgsArr = this.initImgsArr(0, 20)       //初始化第一次（即页面加载完毕时）要加载的图片数据
　　　　this.fetchImgsArr = this.initImgsArr(20, 30) // 模拟每次请求的下一批新的图片的数据数据
  },
  mounted(){
    //   var pagescroll = document.querySelector('.vue-waterfall-easy-scroll')
    //     pagescroll.addEventListener('scroll', debounce(() => {
    //         this.$emit('scroll', 1)
    //     }, 100))
  }
}
</script>
<style  scoped lang='stylus'>
.page
    position absolute
    width 100%
    height 100%
    // padding-top 84px
.page_wrapper
    width 1300px
    margin 0 auto
    height 500px
.page-left
    float left
    width 20%
    position relative
.page-right
    float right
    width 80%
.page_meus
    width 10%
    position fixed
.page_item
    width 100%
    padding 26px 0
    font-size 20px
    color #bbbbbb
    border-bottom 1px solid #e1e1e1
    cursor pointer
// 头部占位
.waterfall-head
    padding-top 84px


.clearfix
    content: ''
    display block
    clear both
.page-title
    font-size 36px
    color #333
    margin-bottom 20px
.page-intro
    color #737373
    font-size 18px
.img-info
    padding 30px 20px


// 菜单
.page-menu 
    position fixed
    width 180px
    top 48%
    left 18%
    margin-top -200px
    z-index 100
    cursor pointer
    .page-menu-item
        line-height 80px
        font-size 18px
        color #bbbbbb
        border-bottom 1px solid #e1e1e1
        &.menuItemInedex 
            color #7cbafe    
            .iconbox
                transform scale(1)  !important
                i
                    font-size 28px !important   
        .iconbox
            display inline-block
            transform scale(0)
            transition all .3s ease-in     
            i
                font-size 0px
                margin-right 5px
                vertical-align sub
@media screen and (max-width: 1440px) 
   .page-menu 
        position fixed
        width 180px
        top 50%
        left 10%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1360px) 
   .page-menu 
        position fixed
        width 180px
        top 50%
        left 5%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1200px) 
   .page-menu 
        position fixed
        width 180px
        top 50%
        left 15%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1024px) 
   .page-menu 
        position fixed
        width 180px
        top 50%
        left 5%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 900px) 
   .page-menu 
        position fixed
        width 180px
        top 50%
        left 15%
        margin-top -200px
        z-index 1000
        cursor pointer 


.scale-enter-active, .scale-leave-active {
  transition: opacity  .5s;
}
.scale-enter/* .fade-leave-active below version 2.1.8 */ {
  opacity 0
}
// 瀑布流每个图片

</style>