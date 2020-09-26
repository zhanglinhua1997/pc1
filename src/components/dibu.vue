<template>
  <div>
    <!-- 底部模块 -->
    <footer class="foot">
      <div class=" box">
        版权所有;&nbsp;XXXXXXXXXXXXXXXX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">唯品互动</a> Copyright 2020> weipin design All rights
        reserved
      </div>
    </footer>
    <!-- 底部模块 -->
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style lang="less" scoped>
// 底部模块
.foot {
  background-color: black;
  height: 50px;
  width: 100%;
  line-height: 50px;
  .box {
    color: white;
    padding-left: 50%;
    transform: translateX(-25%);
  }
}
// 底部模块
</style>
