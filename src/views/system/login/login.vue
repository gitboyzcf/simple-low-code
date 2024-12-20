<template>
  <div class="login-container w-full h-full flex flex-col">
    <Header />
    <div class="flex-1 flex justify-center items-center gap-10">
      <div class="w-100 overflow-hidden">
        <Carousel
          :value="products"
          :numVisible="1"
          :numScroll="1"
          :showIndicators="false"
          :circular="true"
          :autoplayInterval="3000"
          :pt="{
            indicator: '!hidden',
            pcPrevButton: {
              root: '!hidden'
            },
            pcNextButton: {
              root: '!hidden'
            }
          }"
        >
          <template #item="slotProps">
            <img class="w-full b-rd-l" :src="slotProps.data" />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getStaticResource } from '@/utils'

  const products = ref([
    getStaticResource('assets/images/chart/charts/bar_x.png'),
    getStaticResource('assets/images/chart/charts/tree_map.png'),
    getStaticResource('assets/images/chart/charts/radar.png')
  ])

  const responsiveOptions = ref([
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ])
</script>

<style lang="scss" scoped></style>
