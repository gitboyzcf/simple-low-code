<script setup>
  import { RouterView } from 'vue-router'
  import { useToast } from 'primevue/usetoast'
  import { useOutsideSystemStore } from '@/stores/modules/system'

  const systemStore = useOutsideSystemStore()
  const toast = useToast()

  /**
   * 全局提示消息
   * @param type 类型 success info warn error
   * @param text  提示文本
   */
  window['$toast'] = (type, text) => {
    toast.add({
      unstyled: true,
      severity: type,
      summary: text,
      life: 3000,
      pt: {
        closeButton: 'hidden!'
      }
    })
  }

  /**
   * 全局加载状态
   * @param loading 加载状态 true | false
   */
  window['$loading'] = (loading) => systemStore.setLoading(loading)
</script>

<template>
  <ProgressBar
    v-if="systemStore.loading"
    mode="indeterminate"
    :pt="{ root: 'b-rd-0! h-1! w-full absolute! z-9999' }"
  ></ProgressBar>
  <PubToast type="success" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
