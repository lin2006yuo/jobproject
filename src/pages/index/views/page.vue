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
            <vue-waterfall-easy 
                ref="waterfall"
                :imgsArr="imgsArr"
                :maxCols="3"
                @scrollReachBottom="fetchImgsData"
                >
                <div slot="waterfall-head" class="waterfall-head"></div>
                <div class="img-info" slot-scope="props">
                    <p class="some-info">第{{props.index+1}}张图片</p>
                    <!-- <p class="some-info">{{props.value.info}}</p> -->
                </div>
                 <mfooter slot="waterfall-over" style="position: absolute"></mfooter>
            </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
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
    }
  },
  watch:{},
  computed:{},
  methods:{
　　　initImgsArr (n, m) {   //初始化图片数组的方法，把要加载的图片装入
　　　　var arr = []
　　　　for (var i = n; i < m; i++) {
// 　　　　　　arr.push({ src: `https://dummyimage.com/200x${i+1}00/ffffff/000000`, link: '', info: '一些图片描述文字' }) //src为加载的图片的地址、link为超链接的链接地址、　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//info为自定义的图片展示信息，请根据自己的情况自行填写
              arr.push({ src: `static/img/${i+1}.jpg` })
　　　　}
        console.log(this.imgsArr);
        
　　　　return arr
　　　},
　　　fetchImgsData () {
        this.count ++    //获取新的图片数据的方法，用于页面滚动满足条件时调用
        if(this.count === 5){
          console.log('没有了')
          this.$refs.waterfall.waterfallOver()
          return false
        }
        console.log('滚动拉取')
　　　　this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
　　　},
    
  },
  created(){
　　　　this.imgsArr = this.initImgsArr(0, 20)       //初始化第一次（即页面加载完毕时）要加载的图片数据
　　　　this.fetchImgsArr = this.initImgsArr(20, 30) // 模拟每次请求的下一批新的图片的数据数据
  },
  mounted(){
      var pagescroll = document.querySelector('.vue-waterfall-easy-scroll')
        pagescroll.addEventListener('scroll', debounce(() => {
            this.$emit('scroll', 1)
        }, 100))
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
</style>