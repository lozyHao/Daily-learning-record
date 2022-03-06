import { createRouter, createWebHashHistory } from 'vue-router';
// 引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import NotFound from '../components/NotFound.vue'
import User from '../components/User.vue'
import Hengban from '../components/Hengban.vue'
import Shuban from '../components/Shuban.vue'

const routes = [
    // 路由匹配组件
    {
        path: '/',
        component: Home
    }, {
        path: '/about',
        component: About
    }, {
        path: '/news/:id',
        component: News
    }, {
        path: '/:path(.*)',
        component: NotFound
    }, {
        path: '/user/:id',
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
    }
]

const router = createRouter({
    // 路由hash模式
    history: createWebHashHistory(),
    routes,
})

// 导出路由
export default router;