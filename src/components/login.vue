<template>
  <div class="login">
    <p class="loginShow"></p>
    <div class="form">
      <p><input type="number" class="number" maxlength="11" placeholder="手机号码" ref="name"/></p>
      <p><input type="password" maxlength="16" class="number" placeholder="密码" ref="pws"/><span @click="changeFont()" class="showHide" v-bind:class="isShowFont"></span></p>
      <button class="loginBtn" @click="login()">登 录</button>
      <!-- <p><router-link to="/home"><button class="loginBtn">登 录</button></router-link></p> -->
      <p><router-link to="/sgin"><span class="toSgin">注册</span></router-link></p>
    </div>
    <div class="err" v-show="errShow" ref="err"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isShowFont: 'iconfont icon-biyan',
      errShow: false
    }
  },
  methods: {
    login () {
      // 错误提示
      let errFun = (text) => {
        self.errShow = true
        self.$refs.err.innerHTML = text
        setTimeout(function () {
          self.errShow = false
        }, 2000)
      }
      let name = this.$refs.name.value
      let pws = this.$refs.pws.value
      let self = this
      if (name) {
        if (pws) {
          document.getElementById('setMessage').innerHTML = '登录中 . . . '
          document.getElementById('loading').style.display = 'block'
          let qs = require('qs')
          self.$http.post('http://172.16.201.194:3000/login', qs.stringify({
            username: name,
            password: pws
          })).then(function (response) {
            document.getElementById('loading').style.display = 'none'
            if (response.data === 0) {
              errFun('登录失败，请再次登录')
            } else if (response.data === 1) {
              errFun('密码不正确，请重新登录')
            } else {
              self.$router.push({path: '/home'})
              // localstrong
              localStorage.setItem('myAppUser', name)
            }
          }).catch(function () {
            errFun('登录失败，请再次登录')
          })
        } else {
          errFun('密码为空，请先输入密码')
        }
      } else {
        errFun('账号为空，请先输入账号')
      }
    },
    changeFont () {
      if (this.$refs.pws.type === 'password') {
        this.$refs.pws.type = 'text'
        this.isShowFont = 'iconfont icon-xianshi'
      } else {
        this.$refs.pws.type = 'password'
        this.isShowFont = 'iconfont icon-biyan'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login{
    width: 100%;
    height: 100%;
    background:url("../assets/loginBg.jpg") no-repeat;
    background-size: 100% 100%;
    .loginShow{
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
      p{
        width: 100%;
        position: relative;
      }
      .showHide{
        position: absolute;
        font-size: 1.5rem;
        color: #fff;
        line-height: 2rem;
        right: 0;
        top: .5rem;
      }
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
      .loginBtn{
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
      .toSgin{
        float: right;
        font-size: .9rem;
        margin-top: .5rem;
        margin-right: .2rem;
        color:orange;
      }
    }
    .err{
      width: 100%;
      margin-top: 1rem;
      background: rgb(194, 83, 83);
      text-align: center;
      color: #fff;
    }
  }
</style>
