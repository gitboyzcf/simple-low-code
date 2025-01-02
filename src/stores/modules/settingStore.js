import { defineStore } from 'pinia'
import { systemSetting } from '@/settings/systemSetting'
import { asideCollapsedWidth } from '@/settings/designSetting'
import storage from '@/utils/storage'
const storageSetting = storage.local.get('system_c')
// 全局设置
export const useSettingStore = defineStore({
  id: 'useSettingStore',
  state: () => storageSetting || systemSetting,
  getters: {
    getHidePackageOneCategory() {
      return this.hidePackageOneCategory
    },
    getChangeLangReload() {
      return this.changeLangReload
    },
    getAsideAllCollapsed() {
      return this.asideAllCollapsed
    },
    getAsideCollapsedWidth() {
      return this.asideAllCollapsed ? 0 : asideCollapsedWidth
    },
    getChartMoveDistance() {
      return this.chartMoveDistance
    },
    getChartAlignRange() {
      return this.chartAlignRange
    },
    getChartToolsStatus() {
      return this.chartToolsStatus
    },
    getChartToolsStatusHide() {
      return this.chartToolsStatusHide
    }
  },
  actions: {
    setItem(key, value) {
      this.$patch((state) => {
        state[key] = value
      })
      setLocalStorage('system_c', this.$state)
    }
  }
})
