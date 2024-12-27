<template>
  <div class="header-box card">
    <Menubar :model="items" :pt="{ root: 'b-rd-0!' }">
      <template #start>
        <!-- <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8"
        >
          <path
            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
            fill="var(--p-primary-color)"
          />
          <path
            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
            fill="var(--p-text-color)"
          />
        </svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 16 16">
          <path
            fill="var(--p-primary-color)"
            d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134l2.75 1.571v-3.134L8.5 9.933zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643L8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"
          />
        </svg>

        <span v-if="!isLogin" class="text-2xl font-bold ml-2" style="color: var(--p-text-color)"
          >SIMPLE LOW CODE</span
        >
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <ToggleTheme />
          <a
            href="https://github.com/gitboyzcf"
            target="_blank"
            rel="noopener noreferrer"
            class="topbar-item"
          >
            <Button icon="pi pi-github" rounded variant="outlined" aria-label="Filter" />
          </a>
          <Button icon="pi pi-palette" rounded variant="outlined" aria-label="Filter" />
          <Avatar
            v-if="isLogin"
            shape="circle"
            :image="userStore.userInfo.avatar"
            :pt="{ root: 'w-40px! h-40px! cursor-pointer' }"
            @click="toggle"
          />
          <Popover ref="op" :pt="{ content: 'p-0!' }">
            <div class="list-none p-0 m-0 flex flex-col">
              <Button
                v-for="(item, i) in operateBtns"
                :key="i"
                :icon="item.icon"
                :label="item.name"
                :pt="{ label: 'text-sm!', icon: 'text-sm!' }"
                @click="operateEvent[item.click]"
                severity="info"
                variant="text"
              />
            </div>
          </Popover>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
  import { useOutSideUserStore } from '@/stores/modules/user'
  import { useOutsideSystemStore } from '@/stores/modules/system'

  const userStore = useOutSideUserStore()
  const systemStore = useOutsideSystemStore()
  const route = useRoute()
  const router = useRouter()
  const items = ref([])

  const isLogin = computed(() => {
    return route.name != 'Login'
  })
  const op = ref()
  const toggle = (event) => {
    op.value.toggle(event)
  }
  const operateBtns = ref([{ name: '退出登录', icon: 'pi pi-sign-out', click: 'logout' }])
  const operateEvent = {
    logout: () => {
      systemStore.loginOut(router)
    }
  }
</script>
