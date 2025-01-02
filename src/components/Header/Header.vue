<template>
  <div class="header-box card">
    <Menubar :model="items" :pt="{ root: 'b-rd-0!' }">
      <template #start>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <g
            fill="var(--p-primary-color)"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"
            />
            <path
              d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"
            />
          </g>
        </svg>

        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 16 16">
          <path
            fill="var(--p-primary-color)"
            d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134l2.75 1.571v-3.134L8.5 9.933zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643L8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"
          />
        </svg> -->

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
