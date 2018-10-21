<template>
    <div class="join">
        <navigator></navigator>
        <banner :src="url"></banner>
        <div class="wrapper">
            <div class="welfare-box">
                <div class="w-title">福利待遇</div>
                <p class="w-title-b">给员工营造好的工作环境，我们用心做好每一步</p>
                <ul class="w-list clearfix">
                    <div class="w-item">
                        <i class="icon-img debug-icon"></i>
                        <div class="w-item-text">五险一金</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon"></i>
                        <div class="w-item-text">五险一金</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon"></i>
                        <div class="w-item-text">五险一金</div>
                    </div>
                </ul>
            </div>
            <div class="recuit-title">职位招聘</div>
            <div class="recuit-content">
                <div class="recuit-box"></div>
            </div>
            <ul class="doll-list clearfix">
                <li class="doll-item">
                    <i class="doll"></i>
                    <p class="text">CEO</p>
                </li>
                <li class="doll-item">
                    <i class="doll"></i>
                    <p class="text">CEO</p>
                </li>
                <li class="doll-item">
                    <i class="doll"></i>
                    <p class="text">CEO</p>
                </li>
                <li class="doll-item">
                    <i class="doll"></i>
                    <p class="text">CEO</p>
                </li>
                <li class="doll-item">
                    <i class="doll"></i>
                    <p class="text">CEO</p>
                </li>
            </ul>
        </div>
        <mfooter></mfooter>
    </div>
</template>

<script type="text/ecmascript-6">
import Navigator from "@/components/nav";
import Mfooter from "@/components/footer";
import Banner from "@/components/banner";
import img from "@/assets/images/joinus_banner.jpg";

export default {
    data() {
        return {
            url: img
        };
    },
    components: {
        Mfooter,
        Navigator,
        Banner
    }
};
</script>

<style scoped lang="stylus">
/*wrapper*/
.wrapper {
    text-align: center
}
/*welfare-box*/
.wrapper .welfare-box {
    width: 900px;
    margin: 0 auto;
    padding: 100px 0;
}

.wrapper .welfare-box .w-title {
    font-size: 50px;
    margin-bottom: 20px;
    color: #666
}
.wrapper .welfare-box .w-title-b {
    font-size: 16px;
    color: #888;
    white-space: nowrap;
    letter-spacing: 2px
}
.wrapper .welfare-box .w-list {
    margin-top: 70px;
    display: inline-block;
}
.wrapper .welfare-box .w-list .w-item {
    float: left;
    margin: 0 80px;
}
.wrapper .welfare-box .w-list .w-item .icon-img {
    display: block;
    width: 120px;
    height: 120px;
    background-image: url('~assets/images/icon_test.png');
    margin-bottom: 20px;
}
.wrapper .welfare-box .w-list .w-item .w-item-text {
    color: #666;
    /* font-weight: bold; */
}


/*recuit-title*/
.wrapper .recuit-title {
    height: 350px;
    width: 100%;
    font-size: 54px;
    letter-spacing: 6px;
    color: #fff;
    line-height: 350px;
    background-color: #7dbbfe;
}
.wrapper .recuit-content {
    height: 800px;
    width: 0;
    position: relative;
    margin: 0 auto;
}
.wrapper .recuit-content .recuit-box {
    position: absolute;
    width: 850px;
    height: 700px;
    left: 0;
    top: -60px;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.3);
    transform: translateX(-50%);
    background-color: #fff;
}

/*doll-list*/
.wrapper .doll-list {
    margin-bottom: 100px;
}
.wrapper .doll-list .doll-item {
    float: left;
    margin: 0 20px;
}
.wrapper .doll-list .doll-item .doll {
    display: block;
    width: 340px;
    height: 380px;
    background: url('~assets/images/doll.png') no-repeat;
}
.debug-icon {
    background-position: -65px -8px
}
.wrapper .doll-list .doll-item .text {
    margin: 40px 0 0;
}
</style>
