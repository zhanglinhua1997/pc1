import Vue from 'vue'
import VueRouter from 'vue-router'
import quanbu from "../components/quanbu"




Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: quanbu,

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "login") return next()
//   const took = window.sessionStorage.getItem("token")
//   if (!took) return next("/login")
// })
export default router