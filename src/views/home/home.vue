<template>
  <div class="home h-full">
    <Header />
    <div class="home-main">
      编辑
    </div>
  </div>
</template>

<script setup>
import {
  selectOptions,
  selectValue,
  clickItemHandle,
  menuOptions,
} from './hooks/useAside.hook'

console.log(menuOptions);

</script>
