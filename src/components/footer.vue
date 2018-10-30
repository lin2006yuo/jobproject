<template>
    <div class="footer">
        <div class="box clearfix">
            <ul class="list">
                <p class="title"><a href="#">产品</a></p>
                <p class="item"><a href="#">婚礼</a></p>
                <p class="item"><a href="#">孕育</a></p>
                <p class="item"><a href="#">育儿</a></p>
                <p class="item"><a href="#">家庭教育</a></p>
            </ul>
            <ul class="list">
                <p class="title"><a href="#">合作</a></p>
                <p class="item"><a href="#">婚礼</a></p>
                <p class="item"><a href="#">孕育</a></p>
                <p class="item"><a href="#">育儿</a></p>
                <p class="item"><a href="#">家庭教育</a></p>
            </ul>
            <ul class="list">
                <p class="title"><a href="#">关于我们</a></p>
                <p class="item contact-item"><a href="#">联系我们</a></p>
                <p class="contact">商务合作：Sales@Angelswing.com.cn</p>
                <p class="contact">加入我们：HR@Angelswing.com.cn</p>
                <p class="contact">联系天使：Help@Angelswing.com.cn</p>
                <p class="item join-item"><a href="#">加入我们</a></p>
                <p class="contact">我们重视每一位员工，期待共同成长，<br>共同进步，为美好的明天而奋斗。</p>
            </ul>
            <ul class="list">
                <p class="title"><a href="#">关注我们</a></p>
                <img src="@/assets/images/code.png" alt="" class="codeimg">
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 1300px) 
    .footer .box
        width 1000px !important
    .footer .box .list
        margin 0 60px !important
.footer
    width 100%
    background-color #2e3642
    padding 40px 0
.footer .box
    width 1140px
    margin 0 auto
    text-align center
.footer .box .list
    text-align left 
    float left
    margin 0 90px
.footer .box .list:nth-child(3)
    margin-right 0
.footer .box .list .title
    margin-bottom 35px
.footer .box .list .title a
    color #fff
    font-size 22px
.footer .box .list .item
    margin-bottom 25px
.footer .box .list .item a
    color #666
.codeimg
    margin-top -2px
.contact
    font-size 14px
    color #999
    margin-bottom 5px
.contact-item
    margin-bottom 15px !important
.join-item
    margin-top 15px !important
    margin-bottom 15px !important
</style>
