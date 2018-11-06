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
        <!-- 菜单 -->
        <ul class="page-menu">
          <li v-for="(item, index) in topicInfo.menuList" :key="index" class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === (index+1)}" @click="menuItemClickHandle(index + 1)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-1" v-show="curMenuItemIndex === 1"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon" :class="[item.icon]"></i></div>
              {{item.name}}</li>
          <!-- <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 2}" @click="menuItemClickHandle(2)">
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-3" ></i></div>
              婚礼场地</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 3}" @click="menuItemClickHandle(3)">
              <div class="iconbox"><i class="iconfont sp-icon icon-lifuzhuanhuan" ></i></div>
              伴娘礼服</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 4}" @click="menuItemClickHandle(4)">
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-2" ></i></div>
              花束</li>
          <li class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === 5}" @click="menuItemClickHandle(5)">
              <div class="iconbox"><i class="iconfont sp-icon icon-hunli-"></i></div>
              钻戒</li> -->
        </ul>
            <vue-waterfall-easy 
                ref="waterfall"
                :imgsArr="imgsArr"
                :maxCols="3"
                :imgWidth="300"
                :ygap="20"

                >
                <!-- <div slot="waterfall-head" class="waterfall-head">
                    <p class="page-title">婚礼素材的采集者</p>
                    <p class="page-intro">高端婚礼策划</p>
                </div> -->
                <div slot="imgheader" style="margin-top: 164px;text-align:center">
                    <p class="page-title">{{topicInfo.topicTitle}}</p>
                    <p class="page-intro">{{topicInfo.topicIntro}}</p>
                </div>
                <div class="img-info" slot-scope="props">
                    <p class="some-info">{{props.value.title}}</p>
                    <!-- <p class="some-info">{{props.value.id}}</p> -->
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
import { createArticle } from '@/common/article'
//文章接口
import {getArticle} from '@/api/article'

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
        curMenuItemIndex: 1,
        curTopic: 1  //当前模块
    }
  },
  watch:{},
  computed:{
      topicInfo(){
          if(this.curTopic === '1') {
            return {
                topicTitle: '婚礼素材的采集者',
                topicIntro: '高端婚礼策划,定制属于你的美',
                menuList: [
                    {name: '婚纱', icon: 'icon-hunli-1'},
                    {name: '婚礼现场', icon: 'icon-hunli-3'},
                    {name: '伴娘礼服', icon: 'icon-lifuzhuanhuan'},
                    {name: '花束', icon: 'icon-hunli-2'},
                    {name: '钻戒', icon: 'icon-hunli-'},
                ]
            }
          }else if(this.curTopic === '2') {
            return {
                topicTitle: '孕育',
                topicIntro: '生命的初始，新纪元的诞生',
                menuList: [
                    {name: '备孕', icon:'icon-yunjia'},
                    {name: '怀孕', icon:'icon-yunfu'},
                    {name: '产后', icon:'icon-mother'},
                ]
            }        
          }else if(this.curTopic ==='3' ){
              return {
                topicTitle: '育儿',
                topicIntro: '培养天赋，成就未来',
                menuList: [
                    {name: '0-1岁', icon:'icon--baby-'},
                    {name: '1-3岁', icon:'icon-yinger'},
                    {name: '3-5岁', icon:'icon-ertong'},
                ]   
              }
          }else{
              return {
                topicTitle: '家庭教育',
                topicIntro: '为生之道，为人之道，为学之道',
                menuList: [
                    {name: '学习方法', icon:'icon-xuexishuben'},
                    {name: '课外辅导', icon:'icon-mingshifudao'},
                    {name: '兴趣班', icon:'icon-wudao2'},
                    {name: '娱乐互动', icon:'icon-navicon-hdbk'},
                    {name: '家庭旅行', icon:'icon-feiji'},
                    {name: '心理健康', icon:'icon-jiankangxian'},
                    {name: '社交能力', icon:'icon-shejiao'},
                    {name: '综合素养', icon:'icon-zongheceping'},
                    {name: '道德素养', icon:'icon-deyutiandi'},
                    {name: '课内成绩', icon:'icon-chengjiguanli'},
                ]   
              }  
          }
      }
  },
  methods:{
　　　initImgsArr (n) {   //初始化图片数组的方法，把要加载的图片装入
// 　　　　var arr = []
// 　　　　for (var i = n; i < m; i++) {
//               arr.push({ src: `static/img/${i+1}.jpg`, info: i, id: i })
// 　　　　}
        getArticle(this.curTopic, n, "1-2").then(res => {
            if(res.code === 1){
                let arr = []
                res.data.forEach(arti=> {
                    arr.push(createArticle(arti))
                })
                this.imgsArr = this.imgsArr.concat(arr)
            }
        })
　　　},
　　　fetchImgsData () {
//         this.count ++    //获取新的图片数据的方法，用于页面滚动满足条件时调用
//         if(this.count >= 5){
//           console.log('没有了')
//           this.$refs.waterfall.waterfallOver()
//           return false
//         }
//         console.log('滚动拉取')
// 　　　　this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
// 　　　},
//         menuItemClickHandle(index){
//             this.imgsArr = this.initImgsArr(0, 20) 
//             this.curMenuItemIndex = index
//         },
//         clickHandle(event, { index, value }){
//             // this.$router.push({
//             //     name: 'detailPage',
//             //     params: {
//             //         id: 'lxy'
//             //     }
//             // })
//             let {href} = this.$router.resolve({
//                 name: 'detailPage',
//                 query: {
//                     id: 'lxy'
//                 }
//             });
//             window.open(href, '_blank');
//             // console.log(event, index, value)
        }
  },
  created(){

  },
  activated(){
    /**
     * @param
     * 1. 婚礼
     * 2. 怀孕
     * 3. 育儿
     * 4. 家庭教育
     */
    this.curTopic = this.$route.query.id
    this.initImgsArr(1)       //初始化第一次（即页面加载完毕时）要加载的图片数据
// 　　this.fetchImgsArr = this.initImgsArr(20, 30) // 模拟每次请求的下一批新的图片的数据数据
      //取消loading动画
      this.$emit('page')
  },
  mounted(){
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
    height 455px !important
    overflow-y auto
    &::-webkit-scrollbar
        width: 6px;
    &::-webkit-scrollbar-track
        border-radius: 5px;
        background-color: #f5f5f5;
    &::-webkit-scrollbar-thumb
        border-radius: 5px;
        background: #ccc;
    .page-menu-item
        line-height 80px
        font-size 18px
        color #bbbbbb
        border-bottom 1px solid #e1e1e1
        margin-right 10px !important
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