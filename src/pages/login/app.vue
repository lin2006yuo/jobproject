<template>
    <div class="login">
        <navigator></navigator>
        <div class="l-container" id="app">
        <div class="l-wrapper clearfix">
            <div class="w-l">
                <div class="w-l-title"><span class="pre">全新SAAS</span>新媒体内容管理平台</div>
                <span class="w-l-line"></span>
                <ul class="w-l-list">
                    <li class="w-l-item">强大的数据新媒体内容素材</li>
                    <li class="w-l-item">商家/自媒体简约，便捷一键跨平台矩阵式推广</li>
                    <li class="w-l-item">用户需求挖掘，用户焦点数据</li>
                    <li class="w-l-item">用户定位数据</li>
                    <li class="w-l-item">便捷的广告编辑处理</li>
                    <li class="w-l-item">线上线下结合</li>
                    <li class="w-l-item">自主研发人工智能（AI）搜索</li>
                    <li class="w-l-item">海量媒体资源，精准定向投放，自动化推广交易平台</li>
                    <li class="w-l-item">综合行业影响力，提供多平台新媒体服务</li>
                    <li class="w-l-item">广告转化，精准营销</li>
                </ul>
            </div>
            <div class="w-r">
                <div class="w-r-box">
                    <!-- tab -->
                    <div class="w-r-tabs">
                        <div class="corner-icon-view view-type-qrcode">
                            <div class="master-login-title" style="text-align:left;font-size: 18px;">{{isLoinByPwd ? '密码登录' : '扫码登录'}}</div>
                            <i class="iconfont" :class="isLoinByPwd ? 'icon-qrcode' : 'icon-password'"  @click="isLoinByPwd = !isLoinByPwd"></i>
                            <div class="login-tip">
                                <div class="poptip">
                                    <div class="poptip-arrow">
                                        <em></em>
                                        <span></span>
                                    </div>
                                    <div class="poptip-content">{{isLoinByPwd ? '扫码登录' : '密码登录'}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pwd-box" v-show="isLoinByPwd">
                        <el-form ref="loginForm" class="w-r-form" v-show="isLoinByPwd" :rules="rules" :model="loginForm">
                            <el-form-item class="m-input" prop="username"><el-input   prefix-icon="iconfont icon-phone " placeholder="请输入账号" v-model="loginForm.username"></el-input></el-form-item>
                            <el-form-item class="m-input" style="margin-bottom: 10px" prop="pwd"><el-input  prefix-icon="iconfont icon-46 " placeholder="请输入密码" v-model="loginForm.pwd"></el-input></el-form-item>
                            <!-- <el-form-item style="width: 120px" ><el-input placeholder="请验证码"></el-input></el-form-item> -->
                            <el-form-item style="margin:0 0 14px">
                                    <el-checkbox label="记住密码" name="type"></el-checkbox>
                                    <a href="#">忘记密码</a>
                            </el-form-item>
                            <el-form-item style="margin-bottom: 17px">
                                <el-button type="primary" style="width: 100%;height:38px;border-radius:25px" @click="submitForm('loginForm')">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="wechat-box" v-show="!isLoinByPwd">
                        <div class="qr-code-wrapper">
                            <img src="@/assets/images/code2.jpg" alt="">
                        </div>
                        <p style="text-align: center;margin-top: 8px" class="intro">请使用微信扫描二维码登录<br>"天使之翼"</p>
                    </div>
                    <button class="register" @click="registerHandle">立即注册</button>
                    <!-- 注册 -->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
 
 
<script>
// import {setCookie,getCookie} from '../../assets/js/cookie.js'
import Navigator from "@/components/nav.vue";
export default{
	data(){
            return{
                isLoinByPwd: true,
                loginForm: {
                    username: ''
                },
                rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                pwd: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
                }
            }
        },
  mounted(){

  },
  components: {
      Navigator
  },
  methods:{
        loginHandle(flag) {
            if(flag){
                this.isLoinByPwd = true
            }else{
                this.isLoinByPwd = false
            }
        },
        submitForm(name) {
          this.$refs[name].validate((valid) => {
              if(valid){
                  console.log(1)
                  this.$message.error('账号密码错误')
              }else{
                  console.log('error submit!!');
                  return false;
              }
          })
              //   console.log(1)
        },
        registerHandle(){
            this.$confirm('暂未上线', '', {
                 type: 'warning',
            })
        }
  }
}
</script>

<style scoped>
/* @import "~@/assets/css/l-iconfont.css";
@import "~@/assets/fonts/l-iconfont/l-iconfont.css"; */

.icon-phone {
    font-size: 20px
}
.icon-46 {
    font-size: 20px
}

.qr-code-wrapper {
    width: 140px;
    height: 140px;
    margin: 20px auto 0;
    padding: 5px;
    border: 1px solid #eaeaea
}
.qr-code-wrapper img {
    width: 100%;
    height: 100%;
}
.login .el-input__inner{
    border:none;
    border-bottom: 1px solid #aaa;
    border-radius: 0
}

.login {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 1000;
    background: center center / cover url('~@/assets/images/login_bg.jpg');
}
.l-container {
width: 100%;
height: 100%;
/* background: center center/cover url("./img/bg.jpg") no-repeat; */
position: relative;
overflow-x: hidden;
}
.l-container .mask {
  position: absolute;
  left: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}
.l-container .l-wrapper {
  width: 1060px;
  margin: 0 auto;
  position: relative;
  margin-top: 158px;
}
@media screen and (min-width: 1500px) {
    .l-container .l-wrapper {
        width: 1200px;
    }
}
@media screen and (min-width: 1600px) {
    .l-container .l-wrapper {
        width:1300px;
    }
}
@media screen and (max-width: 1137px) {
    .l-container .l-wrapper {
        width:970px;
    }
}


.l-container .l-wrapper.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.l-container .l-wrapper .w-l {
  float: left;
}
.l-container .l-wrapper .w-l .w-l-title {
  font-size: 30px;
  color: #fff;
  letter-spacing: 5px;
}
.l-container .l-wrapper .w-l .w-l-title .pre {
  font-size: 56px;
  color: #7dbbfe;
}
.l-container .l-wrapper .w-l .w-l-line {
  margin: 25px 0;
  display: block;
  width: 500px;
  height: 1px;
  background-color: #7dbbfe;
}
.l-container .l-wrapper .w-l .w-l-list .w-l-item {
  font-size: 16px;
  color: #fff;
  position: relative;
  margin-bottom: 20px;
    text-indent: 20px;
    letter-spacing: 2px
}
.l-container .l-wrapper .w-l .w-l-list .w-l-item:after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #7dbbfe;
  position: absolute;
  left: 0;
  top: 40%;
}



.l-container .l-wrapper .w-r {
  float: right;
  margin-top: 103px
}
.l-container .l-wrapper .w-r .w-r-box {
  background-color: #fff;
  padding: 40px 30px 30px;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs {
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  width: 100%;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs .l-line {
  position: absolute;
  left: 50%;
  top: 4px;
  width: 1px;
  height: 20px;
  background-color: #666;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs .w-r-tab {
  float: left;
  width: 50%;
  cursor: pointer;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs .w-r-tab .w-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-tabs .w-r-tab span {
  font-size: 16px;
  color: #333;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .m-input {
  width:300px;
  margin-bottom: 26px;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .m-input.loginbtn {
  background-color: #7dbbfe;
  border-radius: 25px;
  color: #fff;
  height: 50px;
  font-size: 16px;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .isbox {
  width: 100%;
  margin: 30px 0;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .isbox.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .isbox .checkbox {
  float: left;
  vertical-align: middle;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .isbox .checkbox .check {
  background-color: #fff;
  border: none;
  outline: 0;
  width: 15px;
  height: 15px;
  margin: 0 6px 0 0;
  display: inline-block;
  vertical-align: middle;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form .isbox .checkbox span {
  color: #999;
  font-size: 10px;
}
.l-container .l-wrapper .w-r .w-r-box .w-r-form a {
  float: right;
  vertical-align: middle;
  color: #999;
  font-size: 10px;
}
.l-container .l-wrapper .w-r .w-r-box .register {
  cursor: pointer;
  display: block;
  width: 100px;
  margin: 0 auto;
  color: #7dbbfe;
  outline: 0;
  border: 0;
  background-color: #fff;
}
.l-container .l-wrapper .w-r .w-r-box .wechat-box,
.l-container .l-wrapper .w-r .w-r-box .pwd-box {
  width: 300px;
  height: 250px;
  overflow: hidden;
  padding-top: 15px
}



.icon-user {
  font-size: 26px !important;
  vertical-align: middle;
  padding-right: 4px;
}
.icon-user.active {
  color: #7dbbfe;
}
.icon-wechat {
  font-size: 26px !important;
  vertical-align: middle;
  padding-right: 9px;
}
.icon-wechat.active {
  color: #7dbbfe;
}


</style>
