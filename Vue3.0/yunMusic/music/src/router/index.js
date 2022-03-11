import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import LoginView from '../views/LoginView.vue'
import MeView from '../views/MeView.vue'
import store from "@/store/index.js"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    // 歌单详情页面
    path: '/listview',
    name: 'listview',
    component: ListView
  },{
    // 登录页面
    path: '/loginview',
    name: 'loginview',
    component: LoginView
  },{
    // 个人中心页面
    path: '/meview',
    name: 'meview',
    // 路由前卫，判断是否登录
    beforeEnter:(to, from,next) => {
     console.log(store.state.user);
     if(store.state.user.isLogin){
      next()
     }else{
       next("loginview")
     }
     
    },
    component: MeView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
