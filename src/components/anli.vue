<template>
  <div>
    <!-- 案例展示 -->
    <div class="case">
      <div class="common casetop">
        <h2>我们的项目案例展示</h2>
        <div class="line"></div>
      </div>
      <div class="common casebox">
        <a href="#" class="box">
          <img src="../assets/imges/case1.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case2.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case3.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case4.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case5.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case6.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case7.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case8.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
        <a href="#" class="box">
          <img src="../assets/imges/case9.jpg" alt="" />
          <div class="ceng">
            <h3>这是标题文字</h3>

            <p>
              内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍
            </p>
          </div>
        </a>
      </div>
    </div>
    <!-- 案例展示 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.common {
  width: 1200px;
  margin: 0 auto;
}
.case {
  padding-top: 30px;

  .casetop {
    text-align: center;

    h2 {
      font-size: 32px;
      font-weight: 400;
      color: black;
    }

    .line {
      width: 50px;
      height: 2px;
      background-color: blue;
      display: inline-block;
    }
  }

  .casebox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .box {
      display: block;
      width: 32%;
      margin-bottom: 30px;
      position: relative;
      perspective: 600px;
      overflow: hidden;

      &:hover .ceng {
        transform: rotate(0);
      }

      img {
        width: 100%;
        height: 100%;
      }

      .ceng {
        transition: 0.5s;
        display: none;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
        opacity: 0.8;
        top: 0;
        left: 0;
        transform: rotatex(110deg);
        transform-origin: bottom;

        h3 {
          font-size: 25px;
          padding: 20px;
          color: white;
          text-align: center;
        }

        p {
          padding: 20px;

          color: white;
          text-align: center;
        }
      }
    }
  }
}
</style>
