import { createRouter, createWebHashHistory } from 'vue-router'
import { usePageTitle } from './helper'
import storage from '@/utils/storage'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Test',
    //   component: () => import('@/views/demo/index.vue'),
    //   meta: {
    //     title: '测试'
    //   }
    // },

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        title: '首页',
        isAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/system/login/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/system/404/404.vue'),
      meta: {
        title: '找不到页面'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  usePageTitle(to)
  if (to.meta && to.meta.isAuth) {
    if (storage.local.get('token')) {
      next({ path: from.query.redirect || '/' })
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

async function setupRouter(app) {
  app.use(router)
}

export { router, setupRouter }
