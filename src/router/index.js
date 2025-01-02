import { createRouter, createWebHashHistory } from 'vue-router'
import { usePageTitle } from './helper'
import storage from '@/utils/storage'
import Layout from '@/layout/Layout.vue'

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
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home/:id(.*)*',
          name: 'Home',
          component: () => import('@/views/home/home.vue'),
          meta: {
            title: '首页',
            isAuth: true,
            noKeepAlive: true
          },
          children: [
            {
              path: 'edit',
              name: 'HomeEdit',
              component: () => import('@/views/edit/edit.vue'),
              meta: {
                title: '编辑',
                isAuth: true,
                noKeepAlive: false
              }
            }
          ]
        }
      ]
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
  $loading(true)
  const token = storage.local.get('token')
  usePageTitle(to)
  if (to?.meta && to.meta.isAuth) {
    if (token) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    if (token && to.name === 'Login') {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  $loading(false)
})

async function setupRouter(app) {
  app.use(router)
}

export { router, setupRouter }
