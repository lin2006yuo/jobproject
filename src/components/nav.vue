<template>
    <nav ref="topnav" :class="{notToTop: !isTop}">
        <div class="nav-wrapper clearfix">
            <a class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </a>
            <ul class="navlist">
                <div class="item"><a href="index.html">首页</a></div>
                <div class="item"><a href="about.html">关于我们</a></div>
                <div class="item"><a href="https://angelswing.com.cn/angelproject/public/static/saas/login.html">新媒体SAAS平台</a></div>
                <div class="item"><a href="join.html">加入我们</a></div>
            </ul>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
import { debounce,throttle } from 'assets/js/util.js'
export default {
    data() {
        return {
            isTop: true,
            getStart: false
        };
    },
    mounted(){
        window.addEventListener('scroll', debounce(this.handleScroll,100))
        this.topnav = this.$refs.topnav
    },
    components: {},
    methods: {
        handleScroll(){
            console.log(1);
            
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop === 0){
                this.isTop = true
            }else{
                this.isTop = false
            }
            if(!this.getStart){
                if(scrollTop >= 1139){
                    console.log('1139');
                    this.$emit('start')
                    this.getStart = true
                }
            }else{
                return
            }

        }
    }
};
</script>

<style scoped lang="stylus">
@import '~assets/css/mixin.styl'
@import '~assets/css/variable.styl'

.notToTop
    background-color #fff
    box-shadow 0 1px 5px 0 rgba(0,0,0,0.2)
    .nav-wrapper .navlist .item a
        color #555
nav
    position fixed
    width 100%
    z-index 1000
    color #fff
    transition all 0.5s
.nav-wrapper
    width 1140px
    height 60px
    margin 0 auto
    padding 12px
    clearfix()
@media only screen and (max-width: 1440px)
    .nav-wrapper
        width 900px
.nav-wrapper .logo
    float left
    width 117px
    height 50px
.nav-wrapper .logo img
    width 120%
.nav-wrapper .navlist
    float right
    clearfix()
.nav-wrapper .navlist .item
    float left
    line-height 60px
    font-weight bold
    padding 0 20px
    cursor pointer
.nav-wrapper .navlist .item a
    color #fff
</style>
