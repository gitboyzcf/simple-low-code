import { piniaStore } from '@/stores'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {}
})

export const useOutSideUserStore = () => {
  return useUserStore(piniaStore)
}
