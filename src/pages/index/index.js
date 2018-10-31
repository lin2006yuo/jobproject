import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import '@/assets/css/reset.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import router from './router'
// 二级界面icon
import '@/assets/fonts/second/iconfont.css'


Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */



new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
