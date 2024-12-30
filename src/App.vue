<script setup>
  import { RouterView } from 'vue-router'
  import { useOutsideSystemStore } from '@/stores/modules/system'

  const systemStore = useOutsideSystemStore()
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
