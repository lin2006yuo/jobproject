<template>
  <div class="page">
        <ul class="page-menu">
            <li v-for="(item, index) in topicInfo.menuList" :key="index" class="page-menu-item" :class="{menuItemInedex: curMenuItemIndex === (index+1)}" @click="menuItemClickHandle(item.name, index + 1)">
              <!-- <transition name="scale"><i class="iconfont icon-hunli-1" v-show="curMenuItemIndex === 1"></i></transition> -->
              <div class="iconbox"><i class="iconfont sp-icon" :class="[item.icon]"></i></div>
              {{item.name}}
            </li>
            <nav class="nav">
                <input type="checkbox" class="nav__cb" id="menu-cb">
                <label class="nav__btn" for="menu-cb"></label>
                <div class="nav__content">
                    <ul class="nav__items">
                        <li class="nav__item" v-for="(item, index) in topicName" :key="index"
                            @click="turn2OthterTopic(index + 1)"
                        > 
                            <span class="nav__item-text" style="white-space: nowrap" >{{item}}</span>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </ul>
            <vue-waterfall-easy 
                ref="waterfall"
                :imgsArr="imgsArr"
                :maxCols="3"
                :imgWidth="300"
                :ygap="20"
                @scrollReachBottom="initImgsArr"
                @click="clickHandle"
                >
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
        count: 2,
        curMenuItemIndex: 1,
        curTopic: 1,  //当前模块
        topicInfo: {},
        curMiniTitle: '',
        isOver: false,
        topicName: ['婚礼', '孕育', '育儿', '家庭教育']
    }
  },
  watch:{
  },
  computed:{
  },
  methods:{
　　　initImgsArr () {   //初始化图片数组的方法，把要加载的图片装入
        if(this.isOver){
            this.$refs.waterfall.waterfallOver()
                return
        }
        getArticle(this.curTopic, this.count, this.curMiniTitle).then(res => {
            
            //获取的数据为0，直接关闭loading，显示无数据
            if(res.data.length === 0) {
                this.imgsArr = []
                console.log('获取0条数据')
                this.$refs.waterfall.waterfallOver()
                return 
            }

            //获取的数据不够十张，下次不再获取数据
            if(res.data.length <10) {
                let arr = []
                res.data.forEach(arti=> {
                    //去除婚纱模块照片
                    // if(this.curTopic === 1){
                    //     let  newArti = createArticle(arti)
                    //     let ret = newArti.content.replace(/<img\b[^>]*>/g, "")
                    //     newArti.content = ret
                    //     arr.push(newArti)
                    //     return 
                    // }
                    arr.push(createArticle(arti))
                })
                this.imgsArr = this.imgsArr.concat(arr)

                // this.$refs.waterfall.waterfallOver()
                this.isOver = true
                return
            }
            
            //只获取40条数据
            // if(this.count >= 5){
            //     console.log('没有了')
            //     this.$refs.waterfall.waterfallOver()
            //     return
            // }


            //正常获取数据
            if(res.code === 1){
                let arr = []
                res.data.forEach(arti=> {
                    //去除婚纱模块照片
                    // if(this.curTopic === 1){
                    //     let  newArti = createArticle(arti)
                    //     let ret = newArti.content.replace(/<img\b[^>]*>/g, "")
                    //     newArti.content = ret
                    //     arr.push(newArti)
                    //     return 
                    // }
                    arr.push(createArticle(arti))
                })
                this.imgsArr = this.imgsArr.concat(arr)
            }


            //计数
            this.count ++
        })
　　　},
    reset(){
        this.$refs.waterfall.reset()
        this.isOver = false
        // console.log(this.$refs.waterfall.$el)
        this.count = 1;
        this.imgsArr = []
        this.changeMiniTitle()
    },
    //产生图片数组随机下标
    randomNumInImgArr(){
        return Math.floor(Math.random()*(this.imgsArr.length - 1))
    },
    changeMenu(){
          if(this.curTopic === 1) {
            this.topicInfo = {
                topicTitle: '婚礼素材的采集者',
                topicIntro: '高端婚礼策划,定制属于你的美',
                menuList: [
                    {name: '婚纱', icon: 'icon-hunli-1'},
                    {name: '婚礼场地', icon: 'icon-hunli-3'},
                    {name: '伴娘礼服', icon: 'icon-lifuzhuanhuan'},
                    {name: '花束', icon: 'icon-hunli-2'},
                    {name: '戒指', icon: 'icon-hunli-'},
                ]
            }
          }else if(this.curTopic === 2) {
            this.topicInfo = {
                topicTitle: '孕育',
                topicIntro: '生命的初始，新纪元的诞生',
                menuList: [
                    {name: '备孕', icon:'icon-yunjia'},
                    {name: '怀孕', icon:'icon-yunfu'},
                    {name: '产后', icon:'icon-mother'},
                ]
            }        
          }else if(this.curTopic ===3 ){
              this.topicInfo = {
                topicTitle: '育儿',
                topicIntro: '培养天赋，成就未来',
                menuList: [
                    {name: '1-2个月', icon:'icon--baby-'},
                    {name: '3-6个月', icon:'icon-yinger'},
                    {name: '7-12个月', icon:'icon-ertong'},
                ]   
              }
          }else{
              this.topicInfo = {
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
    },
    menuItemClickHandle(name, index){
        this.reset()
        this.curMenuItemIndex = index
        //如果是育儿模块，则将'岁'字去掉
        if(this.curTopic === 3){
            this.curMiniTitle = name.replace('个月', "")
        }else{
            this.curMiniTitle = name
        }
        //查询数据
　　　  this.initImgsArr()
    },
    clickHandle(event, { index, value }){
        //产生更多文章列表，从以获取数据中随机选择
        let randomArticleArr = []
        for(let i = 0; i<= 5; i++){
            let randomIndex = this.randomNumInImgArr()
            while(randomArticleArr.indexOf(this.imgsArr[randomIndex]) == -1){
                randomArticleArr.push(this.imgsArr[randomIndex])
            }
        }
        //向sessionStorage存数据
        sessionStorage.setItem('article', JSON.stringify(value))
        sessionStorage.setItem('randaomArticle', JSON.stringify(randomArticleArr))
        let {href} = this.$router.resolve({
            name: 'detailPage',
        });
        window.open(href, '_blank');
    },
    changeMiniTitle(){
        if(this.curTopic === 1){
            this.curMiniTitle = '婚纱'
        }else if(this.curTopic === 2){
            this.curMiniTitle = '备孕'
        }else if(this.curTopic === 3){
            this.curMiniTitle = '1-2'
        }else {
            this.curMiniTitle = '学习方法'
        }
    },
    turn2OthterTopic(index){
        this.curTopic = index
        this.reset()
        this.changeMenu()
        this.initImgsArr()
    }
  },
  created(){
  },
  activated(){
    this.curTopic = parseInt(this.$route.query.id)
    this.changeMenu()
    this.changeMiniTitle()
    this.reset()
    /**
     * @param
     * 1. 婚礼
     * 2. 怀孕
     * 3. 育儿
     * 4. 家庭教育
     */

    this.initImgsArr()       //初始化第一次（即页面加载完毕时）要加载的图片数据
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
        width 180px
        left 10%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1360px) 
   .page-menu 
        width 180px
        left 5%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1200px) 
   .page-menu 
        width 180px
        left 15%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 1024px) 
   .page-menu 
        width 180px
        left 5%
        margin-top -200px
        z-index 1000
        cursor pointer 
@media screen and (max-width: 900px) 
   .page-menu 
        width 180px
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


//展开动画
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* MAIN VARIABLES FOR CUSTOMIZATION */
/* -------------------------------- */
.nav {
  position: relative;
  left: 50%;
  height: auto;
  background: #fff;
  border-radius: 5px;
  -webkit-transform: translate3d(-50%, 0, 0);
          transform: translate3d(-50%, 0, 0);
}
.nav__cb {
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  pointer-events: none;
}
.nav__content {
    float left;
    margin-top: 70px
  position: relative;
  width: 90px;
  height: 90px;
  transition: height 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
}
.nav__content .nav__item {
    transition: height 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
}
.nav__cb:checked ~ .nav__content {
  transition: height 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  height: 200px;
}
.nav__cb:checked ~ .nav__content .nav__item {
  transition: height 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  height: 50px
}
.nav__items {
  position: relative;
  height: 100%;
  list-style-type: none;
  font-size: 0;
}
.nav__item {
  vertical-align: top;
  width: 70px;
  text-align: center;
  color: #6C7784;
  font-size: 18px;
  color: #bbb;
  line-height: 50px;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  cursor: pointer;
    height 0
}
.nav__item:hover {
  color: #7dbbfe;
}
.nav__item-text {
  display: block;
  height: 100%;
  -webkit-transform: rotateY(-70deg);
          transform: rotateY(-70deg);
  opacity: 0;
  -webkit-transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s;
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.7s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
}
.nav__cb:checked ~ .nav__content .nav__item-text {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
  opacity: 1;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s;
  transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5), opacity 0.2s, -webkit-transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5);
}
.nav__item:nth-child(1) .nav__item-text {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(1) .nav__item-text {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.nav__item:nth-child(2) .nav__item-text {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(2) .nav__item-text {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}
.nav__item:nth-child(3) .nav__item-text {
  -webkit-transition-delay: 0.1s;
          transition-delay: 0.1s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(3) .nav__item-text {
  -webkit-transition-delay: 0.2s;
          transition-delay: 0.2s;
}
.nav__item:nth-child(4) .nav__item-text {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.nav__cb:checked ~ .nav__content .nav__item:nth-child(4) .nav__item-text {
  -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
}
.nav__btn {
  position: absolute;
  left: 0;
  top: 0;
  width: 90px;
  height: 90px;
  padding: 36px 17px;
  cursor: pointer;
}
.nav__btn:before, .nav__btn:after {
  content: "";
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #ccc;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s;
  transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3), background-color 0.3s, -webkit-transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
}
.nav__btn:before {
  margin-bottom: 10px;
}
.nav__btn:hover:before, .nav__btn:hover:after {
  background: #7dbbfe;
}
.nav__cb:checked ~ .nav__btn:before {
  -webkit-transform: translateY(7px) rotate(-225deg);
          transform: translateY(7px) rotate(-225deg);
}
.nav__cb:checked ~ .nav__btn:after {
  -webkit-transform: translateY(-7px) rotate(225deg);
          transform: translateY(-7px) rotate(225deg);
}


</style>