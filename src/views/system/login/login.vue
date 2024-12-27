<template>
  <div class="login-container w-full h-full flex flex-col">
    <Header />
    <div class="main flex-1 flex flex-col gap-10 justify-center items-center">
      <div class="flex justify-center items-center">
        <h1 id="typewriter"></h1>
      </div>
      <Card
        :class="[
          'main-container w-0 overflow-hidden transition-width duration-800',
          pageLoad ? 'lg:w-680px lt-lg:w-264px' : ''
        ]"
      >
        <template #content>
          <div class="flex gap-4 items-center">
            <div class="w-100 overflow-hidden lt-lg:hidden">
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
            <LoginForm />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
  import Typewriter from 'typewriter-effect/dist/core'
  import LoginForm from './components/login-form.vue'
  import { getStaticResource } from '@/utils'

  const pageLoad = ref(false)
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

  onMounted(() => {
    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      cursor: '_',
      delay: 60
    })
    typewriter
      .pauseFor(500)
      .typeString(
        '<span style="background: linear-gradient(120deg, rgba(189,52,254,1) 30%, rgba(65,209,255,1) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent">SIMPLE LOW CODE</span'
      )
      .pauseFor(800)
      .deleteChars(15)
      .typeString(
        '一个<strong><span style="color: #27ae60;"> 简单、轻量 </span></strong>的可视化低代码平台'
      )
      .pauseFor(1000)
      .start()

    setTimeout(() => {
      pageLoad.value = true
    }, 800)
  })
</script>

<style lang="scss" scoped></style>
