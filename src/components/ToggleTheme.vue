<!-- 主题切换 -->
<template>
  <Button
    type="button"
    rounded
    variant="outlined"
    class="topbar-item"
    :icon="`pi ${toggleDarkModel ? 'pi-moon' : 'pi-sun'}`"
    @click="toggleTheme"
  >
  </Button>
</template>

<script setup>
  import { useTheme } from '@/hooks/useTheme.js'

  defineOptions({
    name: 'ToggleTheme'
  })
  const { toggleDarkModel, toggleTheme } = useTheme()

</script>
