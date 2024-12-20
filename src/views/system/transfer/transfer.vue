<script setup>
  import { useOutSideUserStore } from '@/stores/modules/user'

  defineOptions({ name: 'Transfer' })

  const userStore = useOutSideUserStore()
  onBeforeRouteLeave((to, from, next) => {
    console.log('to', to);

    next(false)
  })
</script>
