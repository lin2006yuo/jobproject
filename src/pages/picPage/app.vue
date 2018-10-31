<template>
  <div class="pic_page">
    <!-- <header>我是头部</header> -->
    <vue-waterfall-easy 
      ref="waterfall"
      :imgsArr="imgsArr"
      :imgWidth="300"
      :maxCols="3"
       @scrollReachBottom="fetchImgsData"
    >
      <div slot="waterfall-head">waterfall-head</div>
      <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <!-- <p class="some-info">{{props.value.info}}</p> -->
      </div>
    </vue-waterfall-easy>
    <!-- <img src="static/img/123.png" alt=""> -->
  </div>
</template>

<script>
// 瀑布流组件
import vueWaterfallEasy from '@/components/vue-waterfall-easy'

export default {
  components:{
    vueWaterfallEasy
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
　　　}
  },
  created(){
　　　　this.imgsArr = this.initImgsArr(0, 20)       //初始化第一次（即页面加载完毕时）要加载的图片数据
　　　　this.fetchImgsArr = this.initImgsArr(20, 30) // 模拟每次请求的下一批新的图片的数据数据
  },
  mounted(){}
}
</script>
<style  scoped lang='stylus'>
.pic_page {
  width 100%
  height 100%
}
</style>