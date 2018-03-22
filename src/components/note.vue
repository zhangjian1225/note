<template>
  <div class="main">
    <div class="time">{{time}}</div>
    <div class="drag" v-show="isShow">
      <div class="addBox">
        <p><input type="text" ref="addVal" placeholder="写入新加的付款方"></p>
        <button class="true" @click="saveAddMessage()">保 存</button><button class="false" @click="closeDrag()">取 消</button>
      </div>
    </div>
    <div class="form">
      <ul>
        <li>付 方：<select><option v-for="item in list" :value="item.id" :key="item.id">{{item.val}}</option></select> <span class="add" @click="showAddBox()">+</span></li>
        <li>收 款：<input type="text"/></li>
        <li>单 价：<input type="text"/></li>
        <li>成 本：<input type="text"/></li>
        <li>时 间：<input type="date"/></li>
        <li style="margin-top:1rem;">状 态：<input type="radio" name="radio" class="radio" checked="checked"/><span>已付</span><input type="radio" name="radio" class="radio"/><span>欠款</span></li>
        <li><button class="submit">保 存</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      time: '',
      list: [
      ],
      isShow: false
    }
  },
  methods: {
    showAddBox () {
      this.isShow = true
    },
    saveAddMessage () {
      var thisList = this.list
      thisList.push(
        {
          id: this.list.length + 1,
          val: this.$refs.addVal.value
        }
      )
      // 提交
      let self = this
      let qs = require('qs')
      self.$http.post('http://172.16.201.194:3000/setList', qs.stringify({
        username: '15810219338',
        data: JSON.stringify(thisList)
      })).then(function (response) {
        console.log(response)
        // self.list = JSON.parse(response.data[0].list)
      }).catch(function () {
        alert('登录失败，请再次登录')
      })
      this.isShow = false
    },
    closeDrag () {
      this.isShow = false
    }
  },
  mounted () {
    let that = this
    function getTimeMessage () {
      let date = new Date()
      let year = date.getFullYear()
      that.time = year + '年 '
      let month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      that.time += month + '月'
      let nowDate = date.getDate()
      if (nowDate < 10) {
        nowDate = '0' + nowDate
      }
      that.time += nowDate + '日 '
      let mowDay = date.getDay()
      switch (mowDay) {
        case 1:
          mowDay = '一'
          break
        case 2:
          mowDay = '二'
          break
        case 3:
          mowDay = '三'
          break
        case 4:
          mowDay = '四'
          break
        case 5:
          mowDay = '五'
          break
        case 6:
          mowDay = '六'
          break
        case 'X':
          mowDay = '日'
          break
      }
      that.time += '星期' + mowDay
      that.time += ' '
      let hours = date.getHours()
      if (hours < 10) {
        hours = '0' + hours
      }
      that.time += hours + '时'
      let minutes = date.getMinutes()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      that.time += minutes + '分'
      let seconds = date.getSeconds()
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      that.time += seconds + '秒'
    }
    getTimeMessage()
    setInterval(getTimeMessage, 1000)
    let self = this
    let qs = require('qs')
    self.$http.post('http://172.16.201.194:3000/getList', qs.stringify({
      username: '15810219338'
    })).then(function (response) {
      self.list = JSON.parse(response.data[0].list)
    }).catch(function () {
      alert('登录失败，请再次登录')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .drag{
      position: absolute;
      width: 1000%;
      height: 100%;
      background: rgba(0, 0, 0, .8);
      .addBox{
        width: 15rem;;
        height: 7rem;
        background: #fff;
        margin: 5rem 0 0 2rem;
        border-radius: .5rem;
        p{
          width: 100%;
          box-sizing: border-box;
          padding: 1rem;
          input{
            width: 100%;
            height: 2rem;
            font-size: 1rem;
            box-sizing: border-box;
            padding-left: .5rem;
            border: 1px solid black;
          }
        }
        .true{
            width: 5rem;
            height: 2rem;
            border: none;
            margin: 0 0 0 2rem;
            background: linear-gradient(rgb(0, 217, 255),rgb(0, 132, 255));
            color: #fff;
            font-size: 1rem;
        }
        .false{
            width: 5rem;
            height: 2rem;
            border: none;
            margin: 0 0 0 1rem;
            background: linear-gradient(rgb(0, 217, 255),rgb(0, 132, 255));
            color: #fff;
            font-size: 1rem;
        }
      }
    }
  }
  .time{
    text-align: center;
    height: 2rem;
    width: 100%;
    line-height: 2rem;
    background: linear-gradient(rgb(0, 217, 255),rgb(0, 132, 255));
    color: #fff;
  }
  .form{
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    li{
      margin-top: .5rem;
    }
    .add{
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid black;
      border-radius: .5rem;
      text-align: center;
      line-height: 1rem;
      margin-left: .5rem;
      font-size: 1rem;
      font-weight: bold;
    }
    select{
      width: 10rem;
      height: 1.5rem;
      border: 1px solid grey;
      font-size: 1rem;
    }
    // option{
    //   display: block;
    //   width: 10rem;
    //   height: 1.5rem;
    // }
    input{
      width: 10rem;
      height: 1.5rem;
      border: 1px solid grey;
      font-size: 1rem;
    }
    .radio{
      width: 2rem;
      height: 1rem;
      margin-left: .5rem;
    }
    .submit{
      border: none;
      width: 10rem;
      height: 2rem;
      margin: .5rem 0 0 3rem;
      line-height: 2rem;
      background: linear-gradient(rgb(0, 217, 255),rgb(0, 132, 255));
      color: #fff;
      font-size: 1rem;
    }
  }
</style>
