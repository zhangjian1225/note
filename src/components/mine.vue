<template>
  <div class="mine">
    <div class="mineBox">
        <input type="file"  id="load"/>
        <div class="headImg" @click="loadImg()" for="">
            <label class="font">添加头像</label>
            <label class="img" for="load">
                <img src="/static/image/img.png" v-show="isHaveImg"/>
            </label>
        </div>
        <div class="user">用户：15810219338</div>
        <div class="back">退 出 登 录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isHaveImg: false
    }
  },
  methods: {
    loadImg () {
      console.log(0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .mine{
        height: 100%;
        width: 100%;
        background: rgb(221, 217, 217);
        .mineBox{
            position: relative;
            height: 4.2rem;;
            left: .5rem;
            top: .5rem;
            #load{
                display: none;
            }
            .headImg{
                position: absolute;
                width: 4rem;
                height: 4rem;
                border: 2px solid white;
                border-radius: 2rem;
                overflow: hidden;
                background: rgb(247, 242, 242);
                .font{
                    position: absolute;
                    width: 1.6rem;
                    font-size: .7em;
                    font-weight: bold;
                    text-align: center;
                    margin-top: .9rem;
                    margin-left: 1.2rem;
                    z-index: 10;
                }
                .img{
                    position: absolute;
                    z-index: 11;
                    width: 100%;
                    height: 100%;
                    border-radius: 2rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .user{
                position: absolute;
                left: 4rem;
                bottom: 0;
                // font-weight: bold;
                color: white;
                font-size: .8rem;
            }
            .back{
                width: 90%;
                height: 2rem;
                position: absolute;
                top: 6rem;
                text-align: center;
                line-height: 2rem;
                color: white;
                background: linear-gradient(rgb(0, 132, 255), rgb(0, 217, 255));
            }
        }
    }
</style>
