<template>
  <div class="login-form h-full w-56">
    <div class="card flex flex-col items-center gap-4 justify-center w-full h-full">
      <h2 class="font-bold">登录</h2>
      <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        @submit="onFormSubmit"
        class="flex flex-col gap-4 w-full"
      >
        <div class="flex flex-col gap-1">
          <FloatLabel variant="on">
            <InputText id="username" name="username" fluid />
            <label for="username">用户名</label>
          </FloatLabel>
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
            $form.username.error?.message
          }}</Message>
        </div>
        <div class="flex flex-col gap-1">
          <FloatLabel variant="on">
            <Password
              name="password"
              inputId="password"
              :feedback="false"
              fluid
              toggleMask
              :pt="{ pcInputText: { root: { autocomplete: 'off' } } }"
            />
            <label for="password">密码</label>
          </FloatLabel>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
            $form.password.error?.message
          }}</Message>
        </div>
        <Button type="submit" label="登录" raised :loading="loading" />
      </Form>
    </div>
  </div>
</template>

<script setup>
  import storage from '@/utils/storage'
  import { useOutSideUserStore } from '@/stores/modules/user'
  import { zodResolver } from '@primevue/forms/resolvers/zod'
  import { useToast } from 'primevue/usetoast'
  import { z } from 'zod'

  const userStore = useOutSideUserStore()
  console.log(userStore)

  const loading = ref(false)
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const initialValues = ref({
    username: '',
    password: ''
  })

  const resolver = ref(
    zodResolver(
      z.object({
        username: z.string().min(1, { message: '请输入用户名' }),
        password: z.string().min(1, { message: '请输入密码' })
      })
    )
  )

  const onFormSubmit = ({ valid }) => {
    if (valid) {
      loading.value = true
      // 模拟登录
      setTimeout(() => {
        toast.add({
          unstyled: true,
          severity: 'success',
          summary: '登录成功',
          life: 3000,
          pt: {
            closeButton: 'hidden!'
          }
        })
        Object.assign(userStore.userInfo, {
          user: 'admin',
          avatar: 'https://primefaces.org/cdn/primevue/images/organization/walter.jpg'
        })
        storage.local.set('token', 'token')
        loading.value = false
        router.replace({ path: route.query.redirect || '/' })
      }, 1500)
    }
  }
</script>
