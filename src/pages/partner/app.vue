<template>
    <div class="partner">
        <navigator></navigator>
        <banner :text="'商家/自媒体入驻'" :src="url" :miniText="'轻松推广'"></banner>
        <div class="part-wrapper">
            <div class="part-title">入驻流程</div>
            <!-- 入驻步骤 -->
            <div class="part-process" v-for="(item, index) in processList" :key="index">
                <div class="letf-icon">
                    <img :src="item.icon_img" alt="">
                </div>
                <div class="right-main">
                    <p class="p-step">{{item.step}}</p>
                    <p class="p-text">{{item.text}}</p>
                    <p class="p-detail">{{item.detail}}</p>
                </div>
            </div>
        </div>
        <div class="cooper-apply">
            <div class="cooper-title">合作申请</div>
            <!-- 进度条 -->
            <div class="cooper-process" :class="curClass">
                <!-- 步骤一 -->
                <div class="process-bar">
                    <div class="inner-bar" ref="innerBar"></div>
                </div>
                <div class="cooper-step1-box">
                    <div class="step1-img"></div>
                    <div class="step1-text">合作意向</div>
                </div>
                <div class="cooper-step2-box">
                    <div class="step2-img"></div>
                    <div class="step1-text">公司信息</div>
                </div>
                <div class="cooper-step3-box">
                    <div class="step3-img"></div>
                    <div class="step1-text">联系人信息</div>
                </div>
            </div>
        </div>
        <div class="form-viewport">
            <el-form 
                label-width="80px" 
                :model="registerForm" 
                style="width: 1512px" 
                ref="registerForm"
                label-position="left"
                :rules="registerRules"
            >
                <!-- 合作意向 -->
                <div class="form-group">
                    <!-- 省份 -->
                    <p class="form-title">合作意向</p>
                    <el-form-item label="合作省份" prop="province">
                        <el-select v-model="registerForm.province" placeholder="请选择" @change=proviceChange>
                            <el-option
                            v-for="item in provinceList"
                            :key="item.adcode"
                            :label="item.name"
                            :value="item.adcode">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="合作城市" prop="city">
                        <el-select v-model="registerForm.city" placeholder="请选择">
                            <el-option
                            v-for="item in cityList"
                            :key="item.adcode"
                            :label="item.name"
                            :value="item.adcode">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>

                <!-- 公司信息 -->
                <div class="form-group">
                    <!-- 省份 -->
                    <p class="form-title">公司信息</p>
                    <el-form-item label="企业名称" prop="ename">
                        <el-input v-model="registerForm.ename"></el-input>
                    </el-form-item>
                    <el-form-item label="企业地址" prop="address">
                        <el-input v-model="registerForm.address"></el-input>
                    </el-form-item>
                    <el-form-item label="企业性质" prop="property">
                        <el-select v-model="registerForm.property" placeholder="请选择">
                            <el-option
                            v-for="item in companyProperties"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="成立时间" prop="setuptime">
                        <el-date-picker
                        v-model="registerForm.setuptime"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </div>
                <!-- 联系人信息 -->
                <div class="form-group">
                    <!-- 省份 -->
                    <p class="form-title">联系人</p>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="registerForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="registerForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="registerForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="vcode">
                        <el-col :span="15">
                            <el-input v-model="registerForm.vcode"></el-input>
                        </el-col>
                        <el-col :span="4" :offset="2">
                            <el-button @click="getvcode" type="primary" style="background-color: #7cbbfe; border-color: #7cbbfe;">获取验证码</el-button>
                        </el-col>
                    </el-form-item>
                </div>
            </el-form>
            <el-button @click="stepHandle" style="border-radius:8px;width: 100%; background-color: #7cbbfe; border-color: #7cbbfe; margin: 10px 0 0" type="primary">{{formText}}</el-button>
            <p class="last" @click="lastClick">返回上一步</p>
        </div>
        <mfooter></mfooter>
    </div>
</template>

<script type="text/ecmascript-6">
import Navigator from "@/components/nav";
import Banner from "@/components/banner";
import Mfooter from '@/components/footer'
import img from '@/assets/images/cooperation_banner.jpg'
//引入中国省份信息js
import {getProvince, getCity} from '@/api/city.js'



export default {
    data() {
        return {
            url: img,
            processList: [
                {
                    step: '第一步',
                    text: '注册新媒体SAAS平台账号',
                    detail: '输入手机号/邮箱/企业信息注册账号',
                    icon_img: require('@/assets/images/cooper1.png')
                },
                {
                    step: '第二步',
                    text: '提交资质',
                    detail: '上传您的身份证/营业执照/资质等信息',
                    icon_img: require('@/assets/images/cooper2.png')
                },
                {
                    step: '第三步',
                    text: '审核',
                    detail: '资质初审，资质复审',
                    icon_img: require('@/assets/images/cooper3.png')
                },
                {
                    step: '第四步',
                    text: '下载天使之翼APP',
                    detail: '点击即可下载APP',
                    icon_img: require('@/assets/images/cooper4.png')
                },
            ],
            companyProperties: [
                {
                    value: 'guoyou',
                    label: '国有企业'
                },
                {
                    value: 'waizi',
                    label: '外资企业'
                },
                {
                    value: 'siying',
                    label: '私营企业'
                },
                {
                    value: 'hehuo',
                    label: '合伙企业'
                },
                {
                    value: 'geti',
                    label: '个体企业'
                },
                {
                    value: 'other',
                    label: '其他'
                },
            ],
            registerForm: {
                province: '',
                city:'',
                ename: '',
                address: '',
                property: '',
                setuptime: '',
                name: '',
                email: '',
                phone: '',
                vcode: ''
            },
            provinceList: '',
            cityList: '',
            formText: '下一步',
            curstep: 0,
            registerRules: {
                province: [
                    {required: true, message: '请选择省份', trigger: 'blur'}
                ],
                city: [
                    {required: true, message: '请选择城市', trigger: 'blur'}
                ],
                ename: [
                    {required: true, message: '请输入企业名称', trigger: 'blur'}
                ],
                address: [
                    {required: true, message: '请输入企业地址', trigger: 'blur'}
                ],
                property: [
                    {required: true, message: '请选择企业性质', trigger: 'blur'}
                ],
                setuptime: [
                    {required: true, message: '请选择成立时间', trigger: 'blur'}
                ],
                name: [
                    {required: true, message: '请输入联系人姓名', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '请输入联系人邮箱', trigger: 'blur'}
                ],
                phone: [
                    {required: true, message: '请输入联系人手机号码', trigger: 'blur'}
                ],
                vcode: [
                    {required: true, message: '请输入验证码', trigger: 'blur'}
                ],
            }
        }
    },
    mounted(){
        // window.addEventListener('scroll',this.count)
        getProvince().then(res => {
                // console.log(res)
            if(res.status === '1'){
                this.provinceList = res.districts[0].districts
            }
        })
    },
    computed: {
        curClass(){
            if(this.curstep === 1) {
                return 'curstep2'
            }else if(this.curstep === 2){
                return 'curstep2 curstep3'
            }
        }
    },
    watch: {
        curstep(){
            let formStyle = this.$refs.registerForm.$el.style
            let innerBar = this.$refs.innerBar.style
            console.log(this.curstep)
            formStyle.transform = `translate3d(-${this.curstep*500}px,0,0)`
            if(this.curstep === 1) {
                innerBar.width = '50%'
                this.formText = '下一步'
            }
            else if(this.curstep === 2){
                innerBar.width = '100%'
                this.formText = '提交'
            }
            else{
                innerBar.width = '2%'
                this.formText = '下一步'
            }
        }
    },
    components: {
        Banner,
        Navigator,
        Mfooter,
    },
    methods: {
        stepHandle(){
            //完成表单
            if(this.curstep >= 2){
                //表单验证
                this.$refs.registerForm.validate((valid) => {
                    if(valid){
                        console.log('提交表单') 
                        //ajax
                    }else{
                        return false
                    }
                })
                return 
            }
            this.curstep ++
        },
        lastClick(){
            if(this.curstep === 0){
                return
            }
            this.curstep --
        },
        getvcode(){
            // 暂未开放
            this.$confirm('暂未上线',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            //获取验证码
        },
        proviceChange(){
            getCity(this.registerForm.province).then(res => {
                this.registerForm.city = ''
                if(res.status === '1'){
                    this.cityList = res.districts[0].districts
                }
            })
        }
    }
};
</script>

<style scoped lang="stylus">
@import '~assets/css/mixin'
.partner
    .part-wrapper
        width 416px
        margin 100px auto 0
        .part-title
            width 400px
            height 68px
            background-color #eee
            text-align center
            font-size 32px
            color #fff
            line-height 68px
            background center center / cover  url('~assets/images/cooper_title.png')
        .part-process
            margin 36px 0 45px
            clearfix()
            .letf-icon
                float left
                width 120px
                text-align center
                padding-top 35px
                img
                    width 45px
            .right-main
                float left
                width 294px
                p
                    line-height 38px
                .p-step
                    color #7dbbfe
                    font-size 22px
                .p-text
                    color #353535
                    font-size 30px
                    font-weight bold
                    white-space nowrap
                .p-detail
                    color #838383
                    font-size 16px


.cooper-apply
    width 416px
    margin 86px auto 0
    .cooper-title
        width 400px
        height 68px
        background-color #eee
        text-align center
        font-size 32px
        color #fff
        line-height 68px
        background center center / cover  url('~assets/images/cooper_title.png')
    .cooper-process
        width 825px
        height 7px
        position relative
        margin 120px 0
        left -55%
        &.curstep2
            .step2-img
                background center center / cover url('~assets/images/step2_active.png') !important
        &.curstep3
            .step3-img
                background center center / cover url('~assets/images/step3_active.png') !important
        .process-bar
            width 100%
            height 100%
            background-color #e6e6e6
            position relative
            .inner-bar
                position absolute
                background-color #7dbbfe
                height 100%
                width 2%
                transition width .35s
        .cooper-step1-box
            position absolute
            text-align center
            left -30px
            top -24px
            .step1-img
                display inline-block
                width 52px
                height 52px
                background center center / cover url('~assets/images/step1_active.png')
            .step1-text
                color #666
                font-size 20px
                margin-top 10px
        .cooper-step2-box
            position absolute
            text-align center
            left 374px
            top -24px
            .step2-img
                display inline-block
                width 52px
                height 52px
                background center center / cover url('~assets/images/step2.png')
            .step1-text
                color #666
                font-size 20px
                margin-top 10px
        .cooper-step3-box
            position absolute
            text-align center
            right -72px
            top -24px
            .step3-img
                display inline-block
                width 52px
                height 52px
                background center center / cover url('~assets/images/step3.png')
            .step1-text
                color #666
                font-size 20px
                margin-top 10px
.form-viewport
    width 500px
    margin 0 auto
    overflow hidden
    .last
        text-align center
        color #666
        font-size 14px
        margin 15px 0 80px
        cursor pointer
    .el-form
        transition transform .35s 
        .form-group
            display inline-block
            width 500px
            vertical-align top
            .el-input
                width 95%
            .el-select
                width 90%
            .form-title
                font-size 22px
                color #7dbbfe
                margin 20px 0
</style>
