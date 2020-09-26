import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  }, //放置状态信息
  mutations: {}, //方法。默认参数state
  actions: {},
  modules: {}
})