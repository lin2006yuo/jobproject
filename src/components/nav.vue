<template>
    <nav ref="topnav" :class="{notToTop: !isTop}">
        <div class="nav-wrapper clearfix">
            <a class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </a>
            <ul class="navlist">
                <div class="item"><a href="index.html">首页</a></div>
                <div class="item"><a href="about.html">关于我们</a></div>
                <div class="item"><a href="./SASSplatform.html">SASS平台</a></div>
                <div class="item"><a href="join.html">加入我们</a></div>
            </ul>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            isTop: true
        };
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
        this.topnav = this.$refs.topnav
    },
    components: {},
    methods: {
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop === 0){
                this.isTop = true
            }else{
                this.isTop = false
            }
        }
    }
};
</script>

<style scoped lang="stylus">
@import '~assets/css/mixin.styl'
@import '~assets/css/variable.styl'

.notToTop
    background-color $color-theme
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
    padding 20px
    clearfix()
.nav-wrapper .logo
    float left
    width 117px
    height 50px
.nav-wrapper .logo img
    width 100%
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
