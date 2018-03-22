<template>
  <div class="sgin">
    <p class="sginShow"></p>
    <div class="form">
      <input type="number" class="number" placeholder="手机号码" ref="user"/>
      <input type="password" class="number" placeholder="设置密码" ref="psw"/>
      <input type="password" class="number" placeholder="确认密码" ref="pswAgin"/>
      <button class="sginBtn" @click="sgin()">注 册</button>
      <router-link to="/"><span class="toLogin">去登录</span></router-link>
      <div class="err" v-show="errShow" ref="err">454</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sgin',
  data () {
    return {
      errShow: false
    }
  },
  methods: {
    sgin () {
      let self = this
      let errFun = (text) => {
        self.errShow = true
        self.$refs.err.innerHTML = text
        setTimeout(function () {
          self.errShow = false
        }, 2000)
      }
      let user = self.$refs.user.value
      let psw = self.$refs.psw.value
      let pswAgin = self.$refs.pswAgin.value
      if (user && psw && pswAgin) {
        if (psw === pswAgin) {
          document.getElementById('setMessage').innerHTML = '注册中 . . . '
          document.getElementById('loading').style.display = 'block'
          let qs = require('qs')
          self.$http.post('http://localhost:3000/sgin', qs.stringify({
            username: user,
            password: psw
          })).then(function (response) {
            document.getElementById('loading').style.display = 'none'
            if (response.data === 0) {
              errFun('注册失败，请再次注册')
            } else if (response.data === 1) {
              errFun('用户已存在')
            } else {
              errFun('注册成功')
            }
          }).catch(function () {
            errFun('注册失败，请再次注册')
          })
        } else {
          errFun('两次密码不一致')
        }
      } else {
        errFun('信息不完整')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sgin{
    width: 100%;
    height: 100%;
    background:url("../assets/loginBg.jpg") no-repeat;
    background-size: 100% 100%;
    .sginShow{
      width: 3rem;
      height: 3rem;
      background:url("../assets/loginShow.png") no-repeat;
      background-size: 100% 100%;
    }
    .form{
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 1.5rem;
      input{
        width: 100%;
        height: 2rem;
        background: none;
        border: none;
        line-height: 2rem;
        border-bottom: 2px solid #fff;
        box-sizing: border-box;
        padding-left: .5rem;
        font-size: 1rem;
        color: #fff;
        outline:none;
        margin-top: 1rem;
      }
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        font-size: 1rem;
        line-height: 2rem;
      }
      .sginBtn{
        width: 100%;
        height: 2rem;
        background:rgba(250,160,0,.8);
        border: none;
        color: #fff;
        outline:none;
        font-size: 1rem;
        margin-top: 1rem;
        border-radius: .3rem;
      }
      .toLogin{
        float: right;
        font-size: .9rem;
        margin-top: .5rem;
        margin-right: .2rem;
        color:orange;
      }
    }
    .err{
        width: 100%;
        margin-top: 2rem;
        background: rgb(194, 83, 83);
        text-align: center;
        color: #fff;
      }
  }
</style>
