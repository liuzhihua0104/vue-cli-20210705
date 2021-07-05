import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 2. 定义路由
const routes = [
  { path: '/', redirect: "/login" },
  {
    path: '/login', component: () => import("@/pages/login")
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



export default router