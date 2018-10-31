import Vue from 'vue'
import App from './App'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// icon
import "@/assets/css/l-iconfont.css";
import "@/assets/fonts/l-iconfont/l-iconfont.css";


Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
