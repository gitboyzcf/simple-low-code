import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { PublicGroupConfigClass } from '@/packages/public/publicConfig'
import debounce from 'lodash-es/debounce'
import cloneDeep from 'lodash-es/cloneDeep'
// 记录记录
import { useChartHistoryStore } from '@/stores/modules/chartHistoryStore'
// 全局设置
import { useSettingStore } from '@/stores/modules/settingStore'
import { getUUID, isString, isArray } from '@/utils'

import {
  MenuEnum,
  ChartEditStoreEnum,
  HistoryActionTypeEnum,
  HistoryTargetTypeEnum,
  RequestHttpIntervalEnum
} from '@/enum'

const chartHistoryStore = useChartHistoryStore()
const settingStore = useSettingStore()
// 编辑区域内容
export const useChartEditStore = defineStore({
  id: 'useChartEditStore',
  state: () => ({
    // 画布属性
    editCanvas: {
      // 编辑区域 Dom
      editLayoutDom: null,
      editContentDom: null,
      // 偏移量
      offset: 20,
      // 系统控制缩放
      scale: 1,
      // 用户控制的缩放
      userScale: 1,
      // 锁定缩放
      lockScale: false,
      // 初始化
      isCreate: false,
      // 拖拽中
      isDrag: false,
      // 框选中
      isSelect: false,
      // 代码编辑中
      isCodeEdit: false
    },
    // 右键菜单
    rightMenuShow: false,
    // 鼠标定位
    mousePosition: {
      startX: 0,
      startY: 0,
      x: 0,
      y: 0
    },
    // 目标图表
    targetChart: {
      hoverId: undefined,
      selectId: []
    },
    // 记录临时数据（复制等）
    recordChart: undefined,
    // -----------------------
    // 画布属性（需存储给后端）
    editCanvasConfig: {
      // 项目名称
      projectName: undefined,
      // 默认宽度
      width: 1920,
      // 默认高度
      height: 1080,
      // 启用滤镜
      filterShow: false,
      // 色相
      hueRotate: 0,
      // 饱和度
      saturate: 1,
      // 对比度
      contrast: 1,
      // 亮度
      brightness: 1,
      // 透明度
      opacity: 1,
      // 变换（暂不更改）
      rotateZ: 0,
      rotateX: 0,
      rotateY: 0,
      skewX: 0,
      skewY: 0,
      // 混合模式
      blendMode: 'normal',
      // 默认背景色
      background: undefined,
      backgroundImage: undefined,
      // 是否使用纯颜色
      selectColor: true,
      // chart 主题色
      chartThemeColor: 'dark',
      // 自定义颜色列表
      chartCustomThemeColorInfo: undefined
    },
    // 数据请求处理（需存储给后端）
    requestGlobalConfig: {
      requestDataPond: [],
      requestOriginUrl: '',
      requestInterval: 30,
      requestIntervalUnit: RequestHttpIntervalEnum.SECOND,
      requestParams: {
        Body: {
          'form-data': {},
          'x-www-form-urlencoded': {},
          json: '',
          xml: ''
        },
        Header: {},
        Params: {}
      }
    },
    // 图表数组（需存储给后端）
    componentList: []
  }),
  getters: {
    getMousePosition() {
      return this.mousePosition
    },
    getRightMenuShow() {
      return this.rightMenuShow
    },
    getEditCanvas() {
      return this.editCanvas
    },
    getEditCanvasConfig() {
      return this.editCanvasConfig
    },
    getTargetChart() {
      return this.targetChart
    },
    getRecordChart() {
      return this.recordChart
    },
    getRequestGlobalConfig() {
      return this.requestGlobalConfig
    },
    getComponentList() {
      return this.componentList
    },
    // 获取需要存储的数据项
    getStorageInfo() {
      return {
        [ChartEditStoreEnum.EDIT_CANVAS_CONFIG]: this.getEditCanvasConfig,
        [ChartEditStoreEnum.COMPONENT_LIST]: this.getComponentList,
        [ChartEditStoreEnum.REQUEST_GLOBAL_CONFIG]: this.getRequestGlobalConfig
      }
    }
  },
  actions: {
    // * 设置 editCanvas 数据项
    setEditCanvas(key, value) {
      this.editCanvas[key] = value
    },
    // * 设置 editCanvasConfig（需保存后端） 数据项
    setEditCanvasConfig(key, value) {
      this.editCanvasConfig[key] = value
    },
    // * 设置右键菜单
    setRightMenuShow(value) {
      this.rightMenuShow = value
    },
    // * 设置目标数据 hover
    setTargetHoverChart(hoverId) {
      this.targetChart.hoverId = hoverId
    },
    // * 设置目标数据 select
    setTargetSelectChart(selectId, push = false) {
      // 重复选中
      if (this.targetChart.selectId.find((e) => e === selectId)) return
      // 无 id 清空
      if (!selectId) {
        this.targetChart.selectId = []
        return
      }
      // 多选
      if (push) {
        // 字符串
        if (isString(selectId)) {
          this.targetChart.selectId.push(selectId)
          return
        }
        // 数组
        if (isArray(selectId)) {
          this.targetChart.selectId.push(...selectId)
          return
        }
      } else {
        // 字符串
        if (isString(selectId)) {
          this.targetChart.selectId = [selectId]
          return
        }
        // 数组
        if (isArray(selectId)) {
          this.targetChart.selectId = selectId
          return
        }
      }
    },
    // * 设置记录数据
    setRecordChart(item) {
      this.recordChart = cloneDeep(item)
    },
    // * 设置鼠标位置
    setMousePosition(x, y, startX, startY) {
      if (x) this.mousePosition.x = x
      if (y) this.mousePosition.y = y
      if (startX) this.mousePosition.startX = startX
      if (startY) this.mousePosition.startY = startY
    },
    // * 找到目标 id 数据的下标位置，id可为父级或子集数组（无则返回-1）
    fetchTargetIndex(id) {
      const targetId =
        id || (this.getTargetChart.selectId.length && this.getTargetChart.selectId[0]) || undefined
      if (!targetId) {
        $loading(false)
        return -1
      }
      const targetIndex = this.componentList.findIndex((e) => e.id === targetId)
      // 当前
      if (targetIndex !== -1) {
        return targetIndex
      } else {
        const length = this.getComponentList.length
        for (let i = 0; i < length; i++) {
          if (this.getComponentList[i].isGroup) {
            for (const cItem of this.getComponentList[i].groupList) {
              if (cItem.id === targetId) {
                return i
              }
            }
          }
        }
      }
      return -1
    },
    // * 统一格式化处理入参 id
    idPreFormat(id) {
      const idArr = []
      if (!id) {
        idArr.push(...this.getTargetChart.selectId)
        return idArr
      }
      if (isString(id)) idArr.push(id)
      if (isArray(id)) idArr.push(...id)
      return idArr
    },
    /**
     * * 新增组件列表
     * @param componentInstance 新图表实例
     * @param isHead 是否头部插入
     * @param isHistory 是否进行记录
     * @returns
     */
    addComponentList(componentInstance, isHead = false, isHistory = false) {
      if (componentInstance instanceof Array) {
        componentInstance.forEach((item) => {
          this.addComponentList(item, isHead, isHistory)
        })
        return
      }
      if (isHistory) {
        chartHistoryStore.createAddHistory([componentInstance])
      }
      if (isHead) {
        this.componentList.unshift(componentInstance)
        return
      }
      this.componentList.push(componentInstance)
    },
    // * 删除组件
    removeComponentList(id, isHistory = true) {
      try {
        const idArr = this.idPreFormat(id)
        const history = []
        // 遍历所有对象
        if (!idArr.length) return
        $loading(true)
        idArr.forEach((ids) => {
          const index = this.fetchTargetIndex(ids)
          if (index !== -1) {
            history.push(this.getComponentList[index])
            this.componentList.splice(index, 1)
          }
        })
        isHistory && chartHistoryStore.createDeleteHistory(history)
        $loading(false)
        return
      } catch (value) {
        $loading(false)
      }
    },
    // * 重置组件位置
    resetComponentPosition(item, isForward) {
      const index = this.fetchTargetIndex(item.id)
      if (index > -1) {
        const componentInstance = this.getComponentList[index]
        if (isForward) {
          componentInstance.attr = Object.assign(componentInstance.attr, {
            x: item.attr.x + item.attr.offsetX,
            y: item.attr.y + item.attr.offsetY
          })
        } else {
          componentInstance.attr = Object.assign(componentInstance.attr, {
            x: item.attr.x,
            y: item.attr.y
          })
        }
      }
    },
    // * 移动组件
    moveComponentList(item) {
      chartHistoryStore.createMoveHistory(item)
    },
    // * 更新组件列表某一项的值
    updateComponentList(index, newData) {
      if (index < 1 && index > this.getComponentList.length) return
      this.componentList[index] = newData
    },
    // * 设置页面样式属性
    setPageStyle(key, value) {
      const dom = this.getEditCanvas.editContentDom
      if (dom) {
        dom.style[key] = value
      }
    },
    // * 移动组件列表层级位置到两端
    setBothEnds(isEnd = false, isHistory = true) {
      try {
        // 暂不支持多选
        if (this.getTargetChart.selectId.length > 1) return
        $loading(true)
        const length = this.getComponentList.length
        if (length < 2) {
          $loading(false)
          return
        }
        const index = this.fetchTargetIndex()
        const targetData = this.getComponentList[index]
        if (index !== -1) {
          // 置底排除最底层, 置顶排除最顶层
          if ((isEnd && index === 0) || (!isEnd && index === length - 1)) {
            $loading(false)
            return
          }
          // 记录原有位置
          const setIndex = (componentInstance, i) => {
            const temp = cloneDeep(componentInstance)
            temp.attr.zIndex = i
            return temp
          }
          // 历史记录
          if (isHistory) {
            chartHistoryStore.createLayerHistory(
              [setIndex(targetData, index)],
              isEnd ? HistoryActionTypeEnum.BOTTOM : HistoryActionTypeEnum.TOP
            )
          }
          // 插入两端
          this.addComponentList(targetData, isEnd)
          this.getComponentList.splice(isEnd ? index + 1 : index, 1)
          $loading(false)
          return
        }
      } catch (value) {
        $loading(false)
      }
    },
    // * 置顶
    setTop(isHistory = true) {
      this.setBothEnds(false, isHistory)
    },
    // * 置底
    setBottom(isHistory = true) {
      this.setBothEnds(true, isHistory)
    },
    // * 上移/下移互换图表位置
    wrap(isDown = false, isHistory = true) {
      try {
        // 暂不支持多选
        if (this.getTargetChart.selectId.length > 1) return
        $loading(true)
        const length = this.getComponentList.length
        if (length < 2) {
          $loading(false)
          return
        }
        const index = this.fetchTargetIndex()
        if (index !== -1) {
          // 下移排除最底层, 上移排除最顶层
          if ((isDown && index === 0) || (!isDown && index === length - 1)) {
            $loading(false)
            return
          }
          // 互换位置
          const swapIndex = isDown ? index - 1 : index + 1
          const targetItem = this.getComponentList[index]
          const swapItem = this.getComponentList[swapIndex]
          // 历史记录
          if (isHistory) {
            chartHistoryStore.createLayerHistory(
              [targetItem],
              isDown ? HistoryActionTypeEnum.DOWN : HistoryActionTypeEnum.UP
            )
          }
          this.updateComponentList(index, swapItem)
          this.updateComponentList(swapIndex, targetItem)
          $loading(false)
          return
        }
      } catch (value) {
        $loading(false)
      }
    },
    // * 图层上移
    setUp(isHistory = true) {
      this.wrap(false, isHistory)
    },
    // * 图层下移
    setDown(isHistory = true) {
      this.wrap(true, isHistory)
    },
    // * 复制
    setCopy(isCut = false) {
      try {
        // 暂不支持多选
        if (this.getTargetChart.selectId.length > 1) return
        // 处理弹窗普通复制的场景
        if (document.getElementsByClassName('n-modal-body-wrapper').length) return
        $loading(true)
        const index = this.fetchTargetIndex()
        if (index !== -1) {
          const copyData = {
            charts: this.getComponentList[index],
            type: isCut ? HistoryActionTypeEnum.CUT : HistoryActionTypeEnum.COPY
          }
          this.setRecordChart(copyData)
          window['$message'].success(isCut ? '剪切图表成功' : '复制图表成功！')
          $loading(false)
        }
      } catch (value) {
        $loading(false)
      }
    },
    // * 剪切
    setCut() {
      this.setCopy(true)
    },
    // * 粘贴
    setParse() {
      try {
        $loading(true)
        const recordCharts = this.getRecordChart
        if (recordCharts === undefined) {
          $loading(false)
          return
        }
        const parseHandle = (e) => {
          e = cloneDeep(e)
          e.attr.x = this.getMousePosition.x + 30
          e.attr.y = this.getMousePosition.y + 30
          // 外层生成新 id
          e.id = getUUID()
          // 分组列表生成新 id
          if (e.isGroup) {
            e.groupList.forEach((item) => {
              item.id = getUUID()
            })
          }
          return e
        }
        const isCut = recordCharts.type === HistoryActionTypeEnum.CUT
        const targetList = Array.isArray(recordCharts.charts)
          ? recordCharts.charts
          : [recordCharts.charts]
        // 多项
        targetList.forEach((e) => {
          this.addComponentList(parseHandle(e), undefined, true)
          // 剪切需删除原数据
          if (isCut) {
            this.setTargetSelectChart(e.id)
            this.removeComponentList(undefined, true)
          }
        })
        if (isCut) this.setRecordChart(undefined)
        $loading(false)
      } catch (value) {
        $loading(false)
      }
    },
    // * 撤回/前进 目标处理
    setBackAndSetForwardHandle(HistoryItem, isForward = false) {
      // 处理画布
      if (HistoryItem.targetType === HistoryTargetTypeEnum.CANVAS) {
        this.editCanvas = HistoryItem.historyData[0]
        return
      }
      // 取消选中
      this.setTargetSelectChart()
      // 重新选中
      let historyData = HistoryItem.historyData
      if (isArray(historyData)) {
        // 选中目标元素，支持多个
        historyData.forEach((item) => {
          this.setTargetSelectChart(item.id, true)
        })
      }
      // 处理新增类型
      const isAdd = HistoryItem.actionType === HistoryActionTypeEnum.ADD
      const isDel = HistoryItem.actionType === HistoryActionTypeEnum.DELETE
      if (isAdd || isDel) {
        if ((isAdd && isForward) || (isDel && !isForward)) {
          historyData.forEach((item) => {
            this.addComponentList(item)
          })
          return
        }
        historyData.forEach((item) => {
          this.removeComponentList(item.id, false)
        })
        return
      }
      // 处理移动
      const isMove = HistoryItem.actionType === HistoryActionTypeEnum.MOVE
      if (isMove) {
        historyData.forEach((item) => {
          this.resetComponentPosition(item, isForward)
        })
        return
      }
      // 处理层级
      const isTop = HistoryItem.actionType === HistoryActionTypeEnum.TOP
      const isBottom = HistoryItem.actionType === HistoryActionTypeEnum.BOTTOM
      if (isTop || isBottom) {
        if (!isForward) {
          // 插入到原有位置
          if (isTop) this.getComponentList.pop()
          if (isBottom) this.getComponentList.shift()
          this.getComponentList.splice(historyData[0].attr.zIndex, 0, historyData[0])
          return
        }
        if (isTop) this.setTop(false)
        if (isBottom) this.setBottom(false)
      }
      const isUp = HistoryItem.actionType === HistoryActionTypeEnum.UP
      const isDown = HistoryItem.actionType === HistoryActionTypeEnum.DOWN
      if (isUp || isDown) {
        if ((isUp && isForward) || (isDown && !isForward)) {
          this.setUp(false)
          return
        }
        this.setDown(false)
        return
      }
      // 处理分组
      const isGroup = HistoryItem.actionType === HistoryActionTypeEnum.GROUP
      const isUnGroup = HistoryItem.actionType === HistoryActionTypeEnum.UN_GROUP
      if (isGroup || isUnGroup) {
        if ((isGroup && isForward) || (isUnGroup && !isForward)) {
          const ids = []
          if (historyData.length > 1) {
            historyData.forEach((item) => {
              ids.push(item.id)
            })
          } else {
            const group = historyData[0]
            group.groupList.forEach((item) => {
              ids.push(item.id)
            })
          }
          this.setGroup(ids, false)
          return
        }
        // 都需使用子组件的id去解组
        if (historyData.length > 1) {
          this.setUnGroup([historyData[0].id], undefined, false)
        } else {
          this.setUnGroup([historyData[0].groupList[0].id], undefined, false)
        }
        return
      }
      // 处理锁定
      const isLock = HistoryItem.actionType === HistoryActionTypeEnum.LOCK
      const isUnLock = HistoryItem.actionType === HistoryActionTypeEnum.UNLOCK
      if (isLock || isUnLock) {
        if ((isLock && isForward) || (isUnLock && !isForward)) {
          historyData.forEach((item) => {
            this.setLock(!item.status.lock, false)
          })
          return
        }
        historyData.forEach((item) => {
          this.setUnLock(false)
        })
        return
      }
      // 处理隐藏
      const isHide = HistoryItem.actionType === HistoryActionTypeEnum.HIDE
      const isShow = HistoryItem.actionType === HistoryActionTypeEnum.SHOW
      if (isHide || isShow) {
        if ((isHide && isForward) || (isShow && !isForward)) {
          historyData.forEach((item) => {
            this.setHide(!item.status.hide, false)
          })
          return
        }
        historyData.forEach((item) => {
          this.setShow(false)
        })
        return
      }
    },
    // * 撤回
    setBack() {
      try {
        $loading(true)
        const targetData = chartHistoryStore.backAction()
        if (!targetData) {
          $loading(false)
          return
        }
        this.setBackAndSetForwardHandle(targetData)
        $loading(false)
      } catch (value) {
        $loading(false)
      }
    },
    // * 前进
    setForward() {
      try {
        $loading(true)
        const targetData = chartHistoryStore.forwardAction()
        if (!targetData) {
          $loading(false)
          return
        }
        this.setBackAndSetForwardHandle(targetData, true)
        $loading(false)
      } catch (value) {
        $loading(false)
      }
    },
    // * 移动位置
    setMove(keyboardValue) {
      const index = this.fetchTargetIndex()
      if (index === -1) return
      const attr = this.getComponentList[index].attr
      const distance = settingStore.getChartMoveDistance
      switch (keyboardValue) {
        case MenuEnum.ARROW_UP:
          attr.y -= distance
          break
        case MenuEnum.ARROW_RIGHT:
          attr.x += distance
          break
        case MenuEnum.ARROW_DOWN:
          attr.y += distance
          break
        case MenuEnum.ARROW_LEFT:
          attr.x -= distance
          break
      }
    },
    // * 创建分组
    setGroup(id, isHistory = true) {
      try {
        const selectIds = this.idPreFormat(id) || this.getTargetChart.selectId
        if (selectIds.length < 2) return
        $loading(true)
        const groupClass = new PublicGroupConfigClass()
        // 记录整体坐标
        const groupAttr = {
          l: this.getEditCanvasConfig.width,
          t: this.getEditCanvasConfig.height,
          r: 0,
          b: 0
        }
        const targetList = []
        const historyList = []
        // 若目标中有数组则先解组
        const newSelectIds = []
        selectIds.forEach((id) => {
          const targetIndex = this.fetchTargetIndex(id)
          if (targetIndex !== -1 && this.getComponentList[targetIndex].isGroup) {
            this.setUnGroup(
              [id],
              (e) => {
                e.forEach((e) => {
                  this.addComponentList(e)
                  newSelectIds.push(e.id)
                })
              },
              false
            )
          } else if (targetIndex !== -1) {
            newSelectIds.push(id)
          }
        })
        newSelectIds.forEach((id) => {
          // 获取目标数据并从 list 中移除 (成组后不可再次成组, 断言处理)
          const item = this.componentList.splice(this.fetchTargetIndex(id), 1)[0]
          const { x, y, w, h } = item.attr
          const { l, t, r, b } = groupAttr
          // 左
          groupAttr.l = l > x ? x : l
          // 上
          groupAttr.t = t > y ? y : t
          // 宽
          groupAttr.r = r < x + w ? x + w : r
          // 高
          groupAttr.b = b < y + h ? y + h : b
          targetList.push(item)
          historyList.push(toRaw(item))
        })
        // 修改原数据之前，先记录
        if (isHistory) chartHistoryStore.createGroupHistory(historyList)
        // 设置子组件的位置
        targetList.forEach((item) => {
          item.attr.x = item.attr.x - groupAttr.l
          item.attr.y = item.attr.y - groupAttr.t
          groupClass.groupList.push(item)
        })
        // 设置 group 属性
        groupClass.attr.x = groupAttr.l
        groupClass.attr.y = groupAttr.t
        groupClass.attr.w = groupAttr.r - groupAttr.l
        groupClass.attr.h = groupAttr.b - groupAttr.t
        this.addComponentList(groupClass)
        this.setTargetSelectChart(groupClass.id)
        $loading(false)
      } catch (error) {
        console.log(error)
        window['$message'].error('创建分组失败，请联系管理员！')
        $loading(false)
      }
    },
    // * 解除分组
    setUnGroup(ids, callBack, isHistory = true) {
      try {
        const selectGroupIdArr = ids || this.getTargetChart.selectId
        if (selectGroupIdArr.length !== 1) return
        $loading(true)
        // 解组
        const unGroup = (targetIndex) => {
          const targetGroup = this.getComponentList[targetIndex]
          if (!targetGroup.isGroup) return
          // 记录数据
          if (isHistory) chartHistoryStore.createUnGroupHistory(cloneDeep([targetGroup]))
          // 分离组件并还原位置属性
          targetGroup.groupList.forEach((item) => {
            item.attr.x = item.attr.x + targetGroup.attr.x
            item.attr.y = item.attr.y + targetGroup.attr.y
            if (!callBack) {
              this.addComponentList(item)
            }
          })
          this.setTargetSelectChart(targetGroup.id)
          // 删除分组
          this.removeComponentList(targetGroup.id, false)
          if (callBack) {
            callBack(targetGroup.groupList)
          }
        }
        const targetIndex = this.fetchTargetIndex(selectGroupIdArr[0])
        // 判断目标是否为分组父级
        if (targetIndex !== -1) {
          unGroup(targetIndex)
        }
        $loading(false)
      } catch (error) {
        console.log(error)
        window['$message'].error('解除分组失败，请联系管理员！')
        $loading(false)
      }
    },
    // * 锁定
    setLock(status = true, isHistory = true) {
      try {
        // 暂不支持多选
        if (this.getTargetChart.selectId.length > 1) return
        $loading(true)
        const index = this.fetchTargetIndex()
        if (index !== -1) {
          // 更新状态
          const targetItem = this.getComponentList[index]
          targetItem.status.lock = status
          // 历史记录
          if (isHistory) {
            status
              ? chartHistoryStore.createLockHistory([targetItem])
              : chartHistoryStore.createUnLockHistory([targetItem])
          }
          this.updateComponentList(index, targetItem)
          // 锁定添加失焦效果
          if (status) this.setTargetSelectChart(undefined)
          $loading(false)
          return
        }
      } catch (value) {
        $loading(false)
      }
    },
    // * 解除锁定
    setUnLock(isHistory = true) {
      this.setLock(false, isHistory)
    },
    // * 隐藏
    setHide(status = true, isHistory = true) {
      try {
        // 暂不支持多选
        if (this.getTargetChart.selectId.length > 1) return
        $loading(true)
        const index = this.fetchTargetIndex()
        if (index !== -1) {
          // 更新状态
          const targetItem = this.getComponentList[index]
          targetItem.status.hide = status
          // 历史记录
          if (isHistory) {
            status
              ? chartHistoryStore.createHideHistory([targetItem])
              : chartHistoryStore.createShowHistory([targetItem])
          }
          this.updateComponentList(index, targetItem)
          $loading(false)
          // 隐藏添加失焦效果
          if (status) this.setTargetSelectChart(undefined)
        }
      } catch (value) {
        $loading(false)
      }
    },
    // * 显示
    setShow(isHistory = true) {
      this.setHide(false, isHistory)
    },
    // ----------------
    // * 设置页面大小
    setPageSize(scale) {
      this.setPageStyle('height', `${this.editCanvasConfig.height * scale}px`)
      this.setPageStyle('width', `${this.editCanvasConfig.width * scale}px`)
    },
    // * 计算缩放
    computedScale() {
      if (this.getEditCanvas.editLayoutDom) {
        // 现有展示区域
        const width =
          this.getEditCanvas.editLayoutDom.clientWidth - this.getEditCanvas.offset * 2 - 5
        const height = this.getEditCanvas.editLayoutDom.clientHeight - this.getEditCanvas.offset * 4
        // 用户设定大小
        const editCanvasWidth = this.editCanvasConfig.width
        const editCanvasHeight = this.editCanvasConfig.height
        // 需保持的比例
        const baseProportion = parseFloat((editCanvasWidth / editCanvasHeight).toFixed(5))
        const currentRate = parseFloat((width / height).toFixed(5))
        if (currentRate > baseProportion) {
          // 表示更宽
          const scaleWidth = parseFloat(((height * baseProportion) / editCanvasWidth).toFixed(5))
          this.setScale(scaleWidth > 1 ? 1 : scaleWidth)
        } else {
          // 表示更高
          const scaleHeight = parseFloat((width / baseProportion / editCanvasHeight).toFixed(5))
          this.setScale(scaleHeight > 1 ? 1 : scaleHeight)
        }
      } else {
        window['$message'].warning('请先创建画布，再进行缩放')
      }
    },
    // * 监听缩放
    listenerScale() {
      const resize = debounce(this.computedScale, 200)
      // 默认执行一次
      resize()
      // 开始监听
      window.addEventListener('resize', resize)
      // 销毁函数
      const remove = () => {
        window.removeEventListener('resize', resize)
      }
      return remove
    },
    /**
     * * 设置缩放
     * @param scale 0~1 number 缩放比例;
     * @param force boolean 强制缩放
     */
    setScale(scale, force = false) {
      if (!this.getEditCanvas.lockScale || force) {
        this.setPageSize(scale)
        this.getEditCanvas.userScale = scale
        this.getEditCanvas.scale = scale
      }
    }
  }
})
