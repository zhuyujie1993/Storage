import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Home from '../views/Home.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path: '/', 
    redirect: '/home' 
},
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
