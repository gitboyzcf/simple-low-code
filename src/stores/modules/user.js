import { piniaStore } from '@/stores'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  actions: {}
})

export const useOutSideUserStore = () => {
  return useUserStore(piniaStore)
}
