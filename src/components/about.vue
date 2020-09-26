<template>
  <div>
    <!-- 关于模块 -->
    <section class="about">
      <div class="common about1">
        <h2>我们是不断创新，专注研究，充满活力<br />用户体验专家</h2>
        <div class="line"></div>
        <div class="common box">
          <p>
            我们是不断创新，专注研究，充满活力
            用户体验专家我们是不断创新，专注研究，充满活力 用户体验专家
          </p>
          <div class="btnbox">
            <a href="#" class="btn lef">咨询我们</a>
            <a href="#" class="btn rig">了解更多</a>
          </div>
        </div>
      </div>
    </section>
    <!-- 关于模块 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
//关于模块
.about {
  padding: 90px 0;
  background: url("../assets/imges/aboutBg.jpg") no-repeat center fixed;
  .about1 {
    text-align: center;

    h2 {
      font-size: 32px;
      font-weight: 400;
      color: white;
    }

    .line {
      width: 50px;
      height: 2px;
      background-color: white;
      display: inline-block;
    }
  }

  .box {
    p {
      padding-top: 20px;
      color: white;
    }
  }

  .btnbox {
    width: 100%;
    text-align: center;
    padding-top: 20px;

    .btn {
      display: inline-block;
      width: 150px;
      height: 50px;
      background-image: linear-gradient(to right, red, yellow);
      line-height: 50px;
      border-radius: 8px;

      &:nth-child(2) {
        background-image: linear-gradient(to right, blue, green);
      }
    }
  }
}

//关于模块
</style>
