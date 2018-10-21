<template>
    <div class="banner" :style="{backgroundImage: 'url('+src+')'}">
        <div class="mask"></div>
        <div class="b-text">未来并不遥远，就在你脚下</div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
        };
    },
    props: ['src'],
    mounted(){

    },
    components: {}
};
</script>

<style scoped lang="stylus">
.banner
    height 800px
    background center center / cover url('~assets/images/information_banner.jpg') no-repeat
    position relative
    z-index 1
.banner .mask
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.5)
    z-index 10
.banner .b-text
    font-size 62px
    letter-spacing 7px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    color #fff
    z-index 20
    white-space nowrap
</style>
