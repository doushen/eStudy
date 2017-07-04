import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'
import store from '@/store'

const login = r => require.ensure([], () => r(require('../views/login/login')), 'login')
const oces = r => require.ensure([], () => r(require('../views/oces/Oces')), 'oces')
const home = r => require.ensure([], () => r(require('../views/oces/home/home')), 'home')
const courses = r => require.ensure([], () => r(require('../views/oces/courses/courses')), 'courses')
const my = r => require.ensure([], () => r(require('../views/oces/my/my')), 'my')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/oces/'
    },
    {
      path: '/index.html',
      redirect: '/oces/'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/oces/',
      component: oces,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'courses',
          name: 'courses',
          component: courses
        },
        {
          path: 'my',
          name: 'my',
          // meta: {
          //   requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
          // },
          component: my
        }
      ]
    }
  ],
  mode: routerMode
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  store.dispatch('showLoading', false) // 隐藏加载中动画
  if (to.meta && to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // store.state.isLogin = true
    if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
