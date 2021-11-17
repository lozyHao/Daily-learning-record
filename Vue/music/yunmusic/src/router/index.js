import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/listview',
    name: 'Listview',
    component: () => import('../views/Listview.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/me',
    name: 'Me',
    // 路由守卫，判断是否登录
    beforeEnter: (to, from, next) => {
      console.log(store.state.user);
      if (store.state.user.isLogin) {
        next();
      } else {
        next('/login')
      }

    },
    component: () => import('../views/Me.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
