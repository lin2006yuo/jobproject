<template>
    <div class="footer">
        <div class="box clearfix">
            <ul class="list">
                <p class="title"><a>产品</a></p>
                <p class="item"><a href="#" @click="turn2Topic(1)">婚礼</a></p>
                <p class="item"><a href="#" @click="turn2Topic(2)">孕育</a></p>
                <p class="item"><a href="#" @click="turn2Topic(3)">育儿</a></p>
                <p class="item"><a href="#" @click="turn2Topic(4)">家庭教育</a></p>
            </ul>
            <ul class="list">
                <p class="title"><a >合作</a></p>
                <p class="item"><a href="#" @click="turn2Topic(1)">婚礼</a></p>
                <p class="item"><a href="#" @click="turn2Topic(2)">孕育</a></p>
                <p class="item"><a href="#" @click="turn2Topic(3)">育儿</a></p>
                <p class="item"><a href="#" @click="turn2Topic(4)">家庭教育</a></p>
            </ul>
            <ul class="list" style="margin-left: 60px">
                <p class="title"><a>关于我们</a></p>
                <p class="item contact-item"><a>联系我们</a></p>
                <p class="contact">商务合作：Sales@Angelswing.com.cn</p>
                <p class="contact">加入我们：HR@Angelswing.com.cn</p>
                <p class="contact">联系天使：Help@Angelswing.com.cn</p>
                <p class="item join-item"><a href="join.html">加入我们</a></p>
                <p class="contact" style="line-height: 20px;font-size: 12px">我们重视每一位员工，期待共同成长，<br>共同进步，为美好的明天而奋斗。</p>
            </ul>
            <ul class="list" style="margin: 0 28px">
                <p class="title"><a>关注我们</a></p>
                <div class="codeimg" style="display:inline-block;margin-right: 25px">
                     <img src="@/assets/images/code.png" alt="">
                     <div class="tex">服务号</div>
                </div>
                <div class="codeimg" style="display:inline-block;margin-right: 25px">
                     <img src="@/assets/images/code2.jpg" alt="">
                     <div class="tex">订阅号</div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    components: {},
    methods: {
        turn2Topic(index){
            this.$router.push({
                name: 'page',
                query: {
                    id: index, //模块ID           
                }
            })
        }
    }
};
</script>

<style scoped lang="stylus">
@media only screen and (max-width: 1300px) 
    .footer .box
        width 1000px !important
    .footer .box .list
        margin 0 40px !important
.footer
    width 100%
    background-color #2e3642
    padding 60px 0
    position relative
    z-index 1000
.footer .box
    width 1140px
    margin 0 auto
    text-align center
.footer .box .list
    text-align left 
    float left
    margin 0 80px
.footer .box .list:nth-child(3)
    margin-right 10px
.footer .box .list .title
    margin-bottom 35px
.footer .box .list .title a
    color #fff
    font-size 22px
.footer .box .list .item
    margin-bottom 25px
.footer .box .list .item a
    color #999
.codeimg
    width 103px
    height 103px
    margin-top -2px
    img 
        width 100%
        height 100px
        margin-bottom 10px
    .tex
        text-align center
        color #eaeaee
.contact
    font-size 14px
    color #999
    margin-bottom 5px
.contact-item
    margin-bottom 15px !important
.join-item
    margin-top 43px !important
    margin-bottom 15px !important
</style>
