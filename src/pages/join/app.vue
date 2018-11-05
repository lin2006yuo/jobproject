<template>
    <div class="join">
        <navigator ></navigator>
        <banner :text="'未来并不遥远，就在你脚下'" :src="url"></banner>
        <div class="wrapper">
            <div class="welfare-box">
                <div class="w-title">福利待遇</div>
                <p class="w-title-b">给员工营造好的工作环境，我们用心做好每一步</p>
                <ul class="w-list clearfix">
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t1"></i>
                        <div class="w-item-text">五险一金</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t2"></i>
                        <div class="w-item-text">周末双休</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t3"></i>
                        <div class="w-item-text">法定节假日</div>
                    </div>
                    <div class="w-item">
                        <i class="icon-img debug-icon icon-t4"></i>
                        <div class="w-item-text">企业培训</div>
                    </div>
                </ul>
            </div>
            <div class="recuit-title">职位招聘</div>
            <div class="recuit-content">
                <div class="recuit-box">
                    <div class="recuit-m-title">职位招聘</div>
                    <el-collapse  class="m-collapse" accordion>
                        <el-collapse-item>
                            <template slot="title">
                                COO
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1、依据战略目标和产品规划制定和拆解运营目标，建立运营策略和打法；</p>
                                <p>2、研究竞品策略、运营数据和用户反馈，挖掘产品及运营痛点，为运营策略改进和产品优化提供可靠依据；</p>
                                <p>3、有效整合公司内外部资源，梳理运营部流程，把握项目完成进度，合理安排项目的排期和进展。</p>
                                <p>4、建立和塑造公司的品牌和风格，提高平台知名度和品牌影响力；</p>
                                <p>5、运营团队的搭建和管理，建立有效的团队管理和激励制度，驱动团队高效快速执行。</p>
                                <p class="m-title">任职要求：</p>
                                <p>1、10年以上管理经验，同岗位工作经验超过5年；</p>
                                <p>2、具有多平台（PC、移动端）协同运营、推广、管理经验；</p>
                                <p>3、目标导向，具备优秀的项目和团队协调、沟通、管理能力及优异的执行力。</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                新媒体编辑
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1、负责文章的编辑。</p>
                                <p>2、负责公司网站及相关产品的内容编辑</p>
                                <p class="m-title">任职要求：</p>
                                <p>1.会简单的文章编辑</p>
                                <p>2.对工作认真负责,灵活处理工作事务;</p>
                                <p>3.对互联网有强烈兴趣,主动探索思考,提出自己的观点,责任心强;</p>
                                <p>4.接受应届毕业生</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                前端工程师
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1、参与公司各项目中的设计、开发和实现；</p>
                                <p>2、与后端人员配合，高质量完成前端开发工作；</p>
                                <p>3、根据用户反馈，对产品进行性能优化和维护；</p>
                                <p class="m-title">任职要求：</p>
                                <p>1、精通jQuery、Bootstrap等前端开发技术。</p>
                                <p>2、熟悉Javascript，熟悉目前主流客户端类型产品特点，技术架构。</p>
                                <p>3、熟悉postman等接口测试工具使用以及RESTfulAPI标准，并能熟练解决前后台联调中出现的各种问题。</p>
                                <p>4、熟悉webpack/gulp其中一个；</p>
                                <p>5、有微信小程序及混合APP开发经验。</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                销售总监
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1.依据公司整体战略，组织制定营销战略，组织市场销售推广工作。</p>
                                <p>2.规划公司销售系统的整体运营，建立、健全各项规章制度，推动公司销售系统管理的规范化。</p>
                                <p>3.参与制定公司销售中长期规划，依据公司整体销售目标年度销售计划和方案，年度销售预算、计划方案,监督实施销售全过程，完成销售任务。</p>
                                <p class="m-title">任职要求：</p>
                                <p>1、本科及以上学历，有互联网产品销售工作经验。</p>
                                <p>2、有5年及以上互联网行业销售部总监相关职务的工作经验</p>
                                <p>3、熟悉商务拓展流程，擅于抓住客户需求，有较强的客户服务意识；</p>
                                <p>4、形象佳、出色的沟通能力、商务谈判能力和会议宣讲能力；</p>
                                <p>5、具备较强的市场分析、营销、推广能力和良好的人际沟通、协调能力，分析和解决问题的能力</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                销售
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1、销售人员职位，在上级的领导和监督下定期完成量化的工作要求，并能独立处理和解决所负责的任务</p>
                                <p>2、管理客户关系，完成销售任务；</p>
                                <p>3、了解和发掘客户需求及购买愿望，介绍自己产品的优点和特色；</p>
                                <p class="m-title">任职要求：</p>
                                <p>1、大专及以上学历；</p>
                                <p>2、性格外向、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；</p>
                                <p>3、具备一定的市场分析及判断能力，良好的客户服务意识；</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                管理实习生培训岗
                                <span class="title-left">了解详情</span>
                            </template>
                            <div class="content-wrapper">
                                <div class="c-title">职位描述</div>
                                <p class="m-title">岗位职责:</p>
                                <p>1、接受公司相关培训，学习和理解公司产品、销售业务技能、运营管理，商业管理等知识；</p>
                                <p>2、完成公司基本考核任务及协助主管处理相关事宜；</p>
                                <p class="m-title">任职要求：</p>
                                <p>1.熟练运用各种办公软件</p>
                                <p>2.具备较好的沟通、协调及执行能力</p>
                                <p>3.工作踏实认真、应对快捷敏锐，责任心强</p>
                                <p>4.应届毕业生，实习生优先</p>
                                <button type="primary" class="m-btn">申请职位</button>
                            </div>
                        </el-collapse-item>

                    </el-collapse>
                </div>
            </div>
            <ul class="doll-list clearfix">
                <li class="doll-item">
                    <img src="@/assets/images/doll.png" alt="">
                    <p class="text">COO</p>
                </li>
                <li class="doll-item">
                    <img src="@/assets/images/doll2.png" alt="">
                    <p class="text">编辑</p>
                </li>
                <li class="doll-item">
                    <img src="@/assets/images/doll3.png" alt="">
                    <p class="text">前端工程师</p>
                </li>
                <li class="doll-item">
                    <img src="@/assets/images/doll4.jpg" alt="">
                    <p class="text">销售总监</p>
                </li>
                <li class="doll-item">
                    <img src="@/assets/images/doll5.png" alt="">
                    <p class="text">销售</p>
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
import img from "@/assets/images/information_banner.jpg";
import {isMobile} from '@/assets/js/mobile.js'

export default {
    data() {
        return {
            url: img
        };
    },
    mounted() {
        isMobile()
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
    margin: 0 50px;
}
.wrapper .welfare-box .w-list .w-item .icon-img {
    display: block;
    width: 120px;
    height: 120px;
    background-image: url('~assets/images/icon_test.png');
    background-repeat no-repeat
    margin-bottom: 20px;
}
.wrapper .welfare-box .w-list .w-item .icon-img.icon-t1
    background-position: -8px -8px;
    background-image url('~assets/images/icon_t1.png')
.wrapper .welfare-box .w-list .w-item .icon-img.icon-t2
    background: center center / cover url('~assets/images/icon_c2.png')
.wrapper .welfare-box .w-list .w-item .icon-img.icon-t3
    background center center/cover url('~assets/images/icon_c.png')
.wrapper .welfare-box .w-list .w-item .icon-img.icon-t4
    background center center/cover url('~assets/images/icon_book.png')
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
    height: 1020px;
    width: 0;
    position: relative;
    margin: 0 auto;
}
.wrapper .recuit-content .recuit-box {
    text-align left 
    position: absolute;
    width: 850px;
    height: 966px;
    left: 0;
    top: -100px;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.3);
    transform: translateX(-50%);
    background-color: #fff;
}
.wrapper .recuit-content .recuit-box .recuit-m-title
    text-align left 
    font-size 14px
    color #999
    padding 25px 40px
.wrapper .recuit-content .recuit-box .m-collapse
    padding 0 40px
    border-bottom: none
.wrapper .recuit-content .recuit-box .m-collapse >>> .el-collapse-item__header
    height: 80px;
    line-height: 80px;
    font-size 16px
.wrapper .recuit-content .recuit-box .m-collapse >>> .title-left
    float right
    line-height: 80px;
    margin-right 20px
    color #7dbbfe
.wrapper .recuit-content .recuit-box .m-collapse >>> .el-collapse-item__header.is-active
    border-bottom 1px solid #ebeef5
.wrapper .recuit-content .recuit-box .m-collapse >>> .el-collapse-item__arrow
    line-height 80px
.wrapper .recuit-content .recuit-box .m-collapse .content-wrapper
    padding 10px
.wrapper .recuit-content .recuit-box .m-collapse .content-wrapper .c-title
    color #000
    font-size 14px
.wrapper .recuit-content .recuit-box .m-collapse .content-wrapper .m-title
    margin-top 10px
.wrapper .recuit-content .recuit-box .m-collapse .content-wrapper .m-btn
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
    padding: 10px 15px;
    margin-top: 20px;
    background-color: #7dbbfe;
    border: 1px solid #7dbbfe;
    &:hover
        background-color #66acf7
/*doll-list*/
.wrapper .doll-list {
    padding 0 20px
    margin-bottom: 100px;
    // width 100%
    font-size 0
}
.wrapper .doll-list .doll-item {
    width 15%
    display inline-block
    position relative
    margin-bottom: 100px;
    margin 0 10px
}
.wrapper .doll-list .doll-item .doll {
    display: block;
    width 100%;
    height 100%
    background: url('~assets/images/dollmore.png') no-repeat;
}
.wrapper .doll-list .doll-item img
    width 100%
    margin-bottom 40px
.debug-icon {
    background-position: -65px -8px
}
.wrapper .doll-list .doll-item .text {
    // margin: 40px 0 0;
    color #999
    font-size 18px
}
.wrapper .doll-list .doll-item .doll.doll1
    background-image url('~assets/images/doll.png')
.wrapper .doll-list .doll-item .doll.doll2
    background-image url('~assets/images/doll2.png')
.wrapper .doll-list .doll-item .doll.doll3
    background-image url('~assets/images/doll3.png')
</style>
