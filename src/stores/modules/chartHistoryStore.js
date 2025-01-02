import { defineStore } from 'pinia'
import { HistoryStackItemEnum, HistoryActionTypeEnum, HistoryTargetTypeEnum } from '@/enum'
export const useChartHistoryStore = defineStore({
  id: 'useChartHistoryStore',
  state: () => ({
    // 后退栈
    backStack: [],
    // 前进栈
    forwardStack: []
  }),
  getters: {
    getBackStack() {
      return this.backStack
    },
    getForwardStack() {
      return this.forwardStack
    }
  },
  actions: {
    /**
     * * 新增记录并插入栈
     * @param item 图表实例
     * @param actionType 动作类型
     * @param targetType 对象类型（默认图表）
     */
    createStackItem(item, actionType, targetType = HistoryTargetTypeEnum.CHART) {
      // 优化性能转为 freeze
      this.pushBackStackItem(
        Object.freeze({
          [HistoryStackItemEnum.ID]: new Date().getTime().toString(),
          [HistoryStackItemEnum.HISTORY_DATA]: item,
          [HistoryStackItemEnum.ACTION_TYPE]: actionType,
          [HistoryStackItemEnum.TARGET_TYPE]: targetType
        })
      )
    },
    // * 画布初始化
    canvasInit(canvas) {
      this.createStackItem([canvas], HistoryActionTypeEnum.ADD, HistoryTargetTypeEnum.CANVAS)
    },
    // * 推入后退栈
    pushBackStackItem(item, notClear = false) {
      if (item instanceof Array) this.backStack = [...this.backStack, ...item]
      else this.backStack.push(item)
      this.backStack.splice(0, this.backStack.length - 100)
      // 新动作需清空前进栈
      if (notClear) return
      this.clearForwardStack()
    },
    // * 推入前进栈
    pushForwardStack(item) {
      if (item instanceof Array) this.forwardStack = [...this.forwardStack, ...item]
      else this.forwardStack.push(item)
    },
    // * 移出后退栈
    popBackStackItem() {
      if (this.backStack.length > 0) {
        return this.backStack.pop()
      }
    },
    // * 移出前进栈
    popForwardStack() {
      if (this.forwardStack.length > 0) {
        return this.forwardStack.pop()
      }
    },
    // * 清空前进栈
    clearForwardStack() {
      this.forwardStack = []
    },
    // * 清空后退栈(保留初始化)
    clearBackStack() {
      const canvasHistory = this.getBackStack[0]
      this.backStack = [canvasHistory]
    },
    // * 撤回
    backAction() {
      try {
        $loading(true)
        // 排除画布初始化
        if (this.getBackStack.length > 1) {
          const targetData = this.popBackStackItem()
          if (!targetData) {
            $loading(false)
            return
          }
          // 移除记录到前进堆
          this.pushForwardStack(targetData)
          $loading(false)
          return targetData
        }
        $loading(false)
      } catch (error) {
        $loading(false)
      }
    },
    // * 前进
    forwardAction() {
      try {
        $loading(true)

        if (this.getForwardStack.length) {
          const targetData = this.popForwardStack()
          if (!targetData) {
            $loading(false)
            return
          }
          // 放入后退栈
          this.pushBackStackItem(targetData, true)
          $loading(false)
          return targetData
        }
        $loading(false)
      } catch (error) {
        $loading(false)
      }
    },
    // * 新增组件记录
    createAddHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.ADD, HistoryTargetTypeEnum.CHART)
    },
    // * 更新属性记录（大小、图表属性）
    createUpdateHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.UPDATE, HistoryTargetTypeEnum.CHART)
    },
    // * 删除组件记录
    createDeleteHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.DELETE, HistoryTargetTypeEnum.CHART)
    },
    // * 移动组件记录
    createMoveHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.MOVE, HistoryTargetTypeEnum.CHART)
    },
    // * 改变层级组件记录
    createLayerHistory(item, type) {
      this.createStackItem(item, type, HistoryTargetTypeEnum.CHART)
    },
    // * 剪切组件记录
    createPasteHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.CUT, HistoryTargetTypeEnum.CHART)
    },
    // * 创建分组
    createGroupHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.GROUP, HistoryTargetTypeEnum.CHART)
    },
    // * 解除分组
    createUnGroupHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.UN_GROUP, HistoryTargetTypeEnum.CHART)
    },
    // * 锁定记录
    createLockHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.LOCK, HistoryTargetTypeEnum.CHART)
    },
    // * 解锁记录
    createUnLockHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.UNLOCK, HistoryTargetTypeEnum.CHART)
    },
    // * 隐藏记录
    createHideHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.HIDE, HistoryTargetTypeEnum.CHART)
    },
    // * 展示记录
    createShowHistory(item) {
      this.createStackItem(item, HistoryActionTypeEnum.SHOW, HistoryTargetTypeEnum.CHART)
    }
  }
})
