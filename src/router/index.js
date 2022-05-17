import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
// 侧边栏组件
import MyHome from '@/views/home/MyHome.vue'
import Custom from '@/views/custom/Custom.vue'
import Order from '@/views/order/Order.vue'
import Power from '@/views/power/Power.vue'
import Theme from '@/views/theme/Theme.vue'

import Personal from '@/views/home/personal/Personal.vue'

// 客户
import Customlist from '@/views/custom/CustomList.vue'
import AddCustom from '@/views/custom/addCustom.vue'
import AdminCustom from '@/views/custom/adminCustom.vue'

// 订单
import OrderList from '@/views/order/OrderList.vue'
import AddOrder from '@/views/order/AddOder.vue'
import AdminOrder from '@/views/order/AdminOrder.vue'

Vue.use(VueRouter)

// 避免相同地址互相跳转时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    meta: { tagName: '首页' },
    children: [
      { path: '', redirect: '/home/home' }, {
        path: 'home',
        component: MyHome,
        meta: { tagName: '首页', fullPath: '/home/home' }
      },
      {
        path: 'custom',
        component: Custom,
        meta: { tagName: '客户', title: '客户', fullPath: '/home/custom' },
        children: [
          { path: '', redirect: '/home/custom/customlist' },
          {
            path: 'customlist',
            component: Customlist,
            meta: { tagName: '客户列表', title: '客户列表', fullPath: '/home/custom/customlist' }
          },
          {
            path: 'addcustom',
            component: AddCustom,
            meta: { tagName: '客户列表', title: '客户列表', fullPath: '/home/custom/addcustom' }
          },
          {
            path: 'admincustom',
            component: AdminCustom,
            meta: { tagName: '客户管理', title: '客户管理', fullPath: '/home/custom/admincustom' }
          }
        ]
      },
      {
        path: 'order',
        component: Order,
        meta: { tagName: '订单', title: '订单', fullPath: '/home/order' },
        children: [
          { path: '', redirect: '/home/order/orderlist' },
          {
            path: 'orderlist',
            component: OrderList,
            meta: { tagName: '订单列表', title: '订单列表', fullPath: '/home/order/orderlist' }
          },
          {
            path: 'addorder',
            component: AddOrder,
            meta: { tagName: '添加订单', title: '添加订单', fullPath: '/home/order/addorder' }
          },
          {
            path: 'adminorder',
            component: AdminOrder,
            meta: { tagName: '退款处理', title: '退款处理', fullPath: '/home/order/adminorder' }
          }
        ]
      },
      {
        path: 'power',
        component: Power,
        meta: { tagName: '权限', title: '权限', fullPath: '/home/power' }
      },
      {
        path: 'theme',
        component: Theme,
        meta: { tagName: '主题', title: '主题', fullPath: '/home/theme' }
      }, {
        path: 'personal',
        component: Personal,
        meta: { tagName: '个人中心', title: '个人中心', fullPath: '/home/personal' }
      }]
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = sessionStorage.getItem('Token')
    if (token) {
      next()
    } else {
      alert('请登录')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
