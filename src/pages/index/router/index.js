import VueRouter from 'vue-router'
import Vue from 'vue'
// 视图
import Main from '../views/main'
import Page from '../views/page'
import Test from '../views/test'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/page',
            name: 'page',
            component: Page
        }
        // {
        //     path: '/',
        //     name: 'test',
        //     component: Test
        // }
    ]
})