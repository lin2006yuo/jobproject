import VueRouter from 'vue-router'
import Vue from 'vue'
// 视图
// import Main from '../views/main'
const Main = () => import('../views/main')
// import Page from '../views/page'
const Page = () => import('../views/page')
// import detailPage from '../views/detailPage'
const detailPage = () => import('../views/detailPage')

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
        },
        {
            path: '/detailPage',
            name: 'detailPage',
            component: detailPage
        }
        // {
        //     path: '/',
        //     name: 'test',
        //     component: Test
        // }
    ]
})