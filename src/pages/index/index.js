import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import '@/assets/css/reset.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import router from './router'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */



new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
