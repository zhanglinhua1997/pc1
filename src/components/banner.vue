<template>
  <div>
    <!-- 服务模块 -->
    <section class="service">
      <div class="  bd">
        <h2>我们专注的服务内容</h2>
        <div class="line"></div>
        <div class="common bot">
          <a href="#" class="box">
            <div class="boxbot">
              <i class="iconfont icon-diannao"></i>
            </div>
            <h3>App开发</h3>
            <p>
              从HTML5最基础的media媒体查询开始讲起，介绍不同的响应式网站的技术，讲解Bootstrap的原理，
            </p>
          </a>
          <a href="#" class="box">
            <div class="boxbot">
              <i class="iconfont icon-shouji"></i>
            </div>
            <h3>App开发</h3>
            <p>
              从HTML5最基础的media媒体查询开始讲起，介绍不同的响应式网站的技术，讲解Bootstrap的原理，
            </p>
          </a>
          <a href="#" class="box">
            <div class="boxbot">
              <i class="iconfont icon-gouwuche01"></i>
            </div>
            <h3>App开发</h3>
            <p>
              从HTML5最基础的media媒体查询开始讲起，介绍不同的响应式网站的技术，讲解Bootstrap的原理，
            </p>
          </a>
          <a href="#" class="box">
            <div class="boxbot">
              <i class="iconfont icon-jiaoyuxingye"></i>
            </div>
            <h3>App开发</h3>
            <p>
              从HTML5最基础的media媒体查询开始讲起，介绍不同的响应式网站的技术，讲解Bootstrap的原理，
            </p>
          </a>
        </div>
      </div>
    </section>
    <!-- 服务模块 -->
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
//服务模块
.common {
  width: 1200px;
  margin: 0 auto;
}
.service {
  padding: 90px 0 50px;

  .bd {
    text-align: center;

    h2 {
      font-size: 32px;
      font-weight: 400;
    }

    .line {
      width: 50px;
      height: 2px;
      background-color: blue;
      display: inline-block;
    }

    .bot {
      padding-top: 60px;
      display: flex;

      .box {
        display: block;
        height: 380px;

        padding: 0 20px;

        .boxbot {
          width: 200px;
          height: 200px;
          border: 1px solid blue;
          border-radius: 50%;
          margin: 0 auto;
          line-height: 200px;

          &:hover {
            background-color: blueviolet;
          }

          &:hover .iconfont {
            color: white;
          }

          .iconfont {
            font-size: 100px;
            color: blue;
          }
        }

        h3 {
          padding: 50px 0 25px;
          font-size: 20px;
          font-weight: 400px;

          &:hover {
            color: blue;
          }
        }
      }
    }
  }
}

//服务模块
</style>
