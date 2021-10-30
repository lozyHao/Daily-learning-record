import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
// 引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Article from '../components/Article.vue'
import User from '../components/User.vue'
import Hengban from '../components/Hengban.vue'
import Shuban from '../components/Shuban.vue'
import Page from '../components/Page.vue'
import ShopMain from '../components/ShopMain.vue'
import ShopTop from '../components/ShopTop.vue'
import ShopFooter from '../components/ShopFooter.vue'
import NotFound from '../components/NotFound.vue'

// 设置组件
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
// const News = { template: '<div>News</div>' }

const routes = [
    // 路由匹配组件
    { path: '/', component: Home },
    { path: '/about', component: About },
    // 动态路由
    { name: 'news', path: '/news/:id', component: News },
    // 路由参数中的自定义正则表达式
    { path: '/article/:id(\\d+)', component: Article },
    // 嵌套组件
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'hengban',
                component: Hengban
            }, {
                path: 'shuban',
                component: Shuban
            }
        ]
    },
    // js跳转
    {
        path: '/page',
        component: Page,
        beforeEnter: (to, from) => { // 导航守卫，每路由保护
            console.log(to, from);
        }
    },
    // 命名视图(一个路由中含有多个组件)
    {
        path: '/shop',
        alias: [ '/laochenshop', '/shopop' ], //别名
        components: {
            default: ShopMain,
            ShopTop,
            ShopFooter
        }
    },
    // 重定向
    {
        path: '/mall',
        redirect: '/shop'
        // redirect: (to) => {
        //     return { path: '/shop' }
        // }
    },
    // 路由未找到进入报错路由页面
    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    // 路由hash模式，路径中含有/#/
    history: createWebHashHistory(),
    // Html5模式，路径中没有/#/
    // history: createWebHistory(), //使用此项，后端需要相应配置
    routes,
})

// 导航守卫，每次路由跳转之前执行的函数
router.beforeEach((to, from, next) => {
    next();
    // return false //禁止访问
})


// 导出路由
export default router;