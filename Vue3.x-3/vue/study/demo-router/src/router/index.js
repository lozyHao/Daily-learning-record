import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("@/views/HomeView.vue")
const AboutView = () => import('../views/AboutView.vue')
const AboutOne = () => import('../views/about/AboutOne.vue')
const AboutTwo = () => import('../views/about/AboutTwo.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // redirect: '/about/aboutone', //重定向，默认显示的子路由
    children: [
      {
        path:"",
        component: AboutOne
      },{
        path: 'aboutone',
        component: AboutOne
      }, {
        path: 'abouttwo',
        component: AboutTwo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
