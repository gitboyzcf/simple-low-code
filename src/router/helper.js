/**
 * @author zcf
 * @E-mail boyzcf@qq.com
 * @description:
 * @date 2023-08-08 13:56
 */
import { router } from './index'
import { useOutsideSystemStore } from '@/stores/modules/system.js'


export async function urlParamsLogin(router) {
  const useSystem = useOutsideSystemStore()
  let params = useUrlSearchParams('hash')
  if (params.t) {
    console.info('开启系统免等')
    useSystem.noLogin(params).then(() => {
      console.info('免登成功')
      router.replace({ path: '/' })
    })
  }
}

export const usePageTitle = (to) => {
  const projectTitle = import.meta.env.VITE_APP_TITLE
  const rawTitle = normalizeTitle(to.meta.title)
  const title = useTitle()
  title.value = rawTitle ? `${projectTitle} | ${rawTitle}` : projectTitle
  function normalizeTitle(raw) {
    return typeof raw === 'function' ? raw() : raw
  }
}

/**
 * * 根据名称获取路由信息
 * @param pageName
 * @param p
 */
export const fetchPathByName = (pageName, p) => {
  try {
    const pathData = router.resolve({
      name: pageName
    })
    return p ? pathData[p] : pathData
  } catch (error) {
    window.$toast('warn', '查询路由信息失败，请联系管理员！')
  }
}

/**
 * * 根据路径跳转路由
 * @param path
 * @param query
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByPath = (path, query, isReplace, windowOpen) => {
  let fullPath = ''
  if (query?.length) {
    fullPath = `${path}/${query.join('/')}`
  }
  if (windowOpen) {
    return openNewWindow(fullPath)
  }
  if (isReplace) {
    router.replace({
      path: fullPath
    })
    return
  }
  router.push({
    path: fullPath
  })
}

/**
 * * 新开页面
 * @param url
 */
export const openNewWindow = (url) => {
  return window.open(url, '_blank')
}
