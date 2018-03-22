<template>
  <div class="container">
      <header>随 时 记</header>
      <section>
          <router-view></router-view>
      </section>
      <footer>
          <ul>
              <li>
                  <router-link to="/home/">
                      <span style="font-size:1.8rem;  line-height:1.9rem;" class="iconfont icon-zhangben"></span>
                      <em>记账</em>
                  </router-link>
              </li>
              <li>
                  <router-link to="/watch">
                      <span style=" font-size:1.6rem;" class="iconfont icon-chakan"></span>
                      <em>查看</em>
                  </router-link>
              </li>
              <li>
                  <router-link to="/more">
                      <span  style=" font-size:1.4rem; font-weight:bold" class="iconfont icon-xiangqing"></span>
                      <em>详情</em>
                  </router-link>
              </li>
              <li>
                  <router-link to="/mine">
                      <span  style=" font-size:1.6rem; font-weight:bold" class="iconfont icon-wode"></span>
                      <em>我的</em>
                  </router-link>
              </li>
          </ul>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 2rem;
        background: linear-gradient(rgb(0, 132, 255), rgb(0, 217, 255));
        text-align: center;
        line-height: 2rem;
        color: white;
    }
    section{
        width: 100%;
        flex: 1;
    }
    footer{
        width: 100%;
        height: 3.5rem;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            a{
               text-decoration:none;
               -webkit-tap-highlight-color:rgba(0,0,0,0);
            }
            li{
                list-style: none;
                flex: 1;
                height: 3.5rem;
                box-sizing: border-box;
                span{
                    display: inline-block;
                    width: 100%;
                    height: 2rem;
                    border-top: 1px solid #ccc;
                    text-align: center;
                    color: #333;
                    line-height: 2rem;
                }
                em{
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    font-size: .7rem;
                    color: #333;
                    font-style: normal;
                }
            }
        }
    }
    .router-link-exact-active span{
        color: rgb(0, 132, 255);
        border-top: 1px solid rgb(0, 132, 255);
    }
    .router-link-exact-active em{
        color:rgb(0, 132, 255);
    }
</style>
