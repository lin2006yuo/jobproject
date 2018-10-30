var app = new Vue({
    el: '#app',
    data: {
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
    },
    methods: {
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
                  console.log('submit');
              }else{
                  console.log('error submit!!');
                  return false;
              }
          })
              //   console.log(1)
        }
    }
})