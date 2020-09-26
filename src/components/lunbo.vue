<template>
  <el-carousel indicator-position="none" :interval="3000">
    <el-carousel-item v-for="item in 2" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  background: url("../assets/imges/banner1.jpg") no-repeat 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  background: url("../assets/imges/banner2.jpg") no-repeat 100%;
}
</style>
