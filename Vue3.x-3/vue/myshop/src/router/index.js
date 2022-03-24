import store from '@/store';
import { createRouter, createWebHistory } from 'vue-router'
import { Notify, Toast } from "vant";

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Detail = () => import('../views/detail/Detail');
const ShopCart = () => import('../views/shopcart/ShopCart');
const Profile = () => import('../views/profile/Profile');
const Register = () => import('../views/profile/Register');
const Login = () => import('../views/profile/Login');
const Address = () => import('../views/profile/Address');
const AddressEdit = () => import('../views/profile/AddressEdit');
const Order = () => import('../views/order/Order');
const CreateOrder = () => import('../views/order/CreateOrder');
const OrderDetail = () => import('../views/order/OrderDetail');

const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: "萝茗书库"
    }
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "萝茗书库"
    }
  }, {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: "萝茗书库-商品分类"
    }
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: "萝茗书库-商品详情"
    }
  }, {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: "萝茗书库-购物车",
      isAuthRequired: true,
    }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "萝茗书库-个人中心",
      isAuthRequired: true,
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "萝茗书库-用户注册"
    }
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "萝茗书库-用户登录"
    }
  }, {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title: "萝茗书库-地址管理"
    }
  },{
    path: '/addressEdit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta: {
      title: "萝茗书库-地址管理"
    }
  },{
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title: "萝茗书库-订单管理"
    }
  },{
    path: '/createOrder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta: {
      title: "萝茗书库-创建订单"
    }
  },{
    path: '/orderDetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title: "萝茗书库-订单详情"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 通过路由守卫设置页面标题
router.beforeEach((to, from, next) => {
  // 如果没有登录，这里直接到Login
  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    Notify("您还未登陆，请先登录！");
    return next('/login')
  } else {
    next();
  }
  document.title = to.meta.title;
})

export default router
