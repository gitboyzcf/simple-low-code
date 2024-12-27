<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <PubToast type="success" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
