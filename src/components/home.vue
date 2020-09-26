<template>
  <div>
    <!-- 头部 -->
    <header class="header">
      <div class="common hd">
        <a href="#" class="logo">
          <img src="../assets/imges/hd_logo.png" alt="" />
        </a>
        <div class="nav">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">案例</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">新闻咨询</a></li>
          </ul>
        </div>
        <div class="hdbox">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </header>
    <!-- 头部 -->
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style lang="less" scoped>
// <!-- 头部 -->
.common {
  width: 1200px;
  margin: 0 auto;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 10;
  height: 60px;
  width: 100%;
  background-color: whitesmoke;

  .hd {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;

      li a {
        &::after {
          display: none;
          content: "";
          width: 6px;
          height: 6px;
          background-color: blue;
          border-radius: 50%;
          position: absolute;
          bottom: 10px;
          left: 50%;
          margin-left: -3px;
        }
      }

      li a {
        display: block;
        font-size: 18px;
        padding: 0 30px;
        transition: 0.5s;
        position: relative;
        line-height: 60px;

        &:hover {
          color: blue;

          &::after {
            display: block;
          }
        }
      }
    }
  }

  .hdbox {
    display: none;
    width: 40px;
    border: 1px soild blue;
    border-radius: 3px;
    padding: 3px 0;

    i {
      display: block;
      width: 30px;
      height: 2px;
      background-color: blueviolet;
      margin: 7px auto;
    }
  }
}

// <!-- 头部 -->
</style>
