import mitt from 'mitt'
export * from './type'

/**
 * 获取资源路径
 * @param {相对路径} relativePath
 *    如果要获取assets的文件文件夹下的images中的图片
 *      relativePath 传入 assets/images/name.png
 * @returns 文件所在路径
 */
export const getStaticResource = (relativePath) => {
  console.log(relativePath)

  return new URL(`../${relativePath}`, import.meta.url)
}

/**
 * 模块话方式处理 默认处理 modules文件夹下的所有js文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
export const modulesHandle = (moduleContext = {}) => {
  if (!Object.keys(moduleContext).length) return
  const modules = {}
  Object.keys(moduleContext).forEach((v) => {
    for (let key in moduleContext[v].default) {
      modules[key] = moduleContext[v].default[key]
    }
  })
  return modules
}

/**
 *
 * @returns 订阅/发布者对象
 */
export const $mitt = mitt()

/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}
