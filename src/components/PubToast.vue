<template>
  <Toast :position="position" :unstyled="true" :pt="ptOptions[type]" />
</template>

<script setup>
  defineProps({
    position: {
      type: String,
      default: 'top-center'
    },
    type: {
      type: String,
      default: 'success'
    }
  })
  const pt = {
    root: 'top-80px! transition-all',
    message: 'mb-1!',
    messageText: 'text-xs font-semibold',
    closeButton: 'hidden!'
  }

  const ptOptions = {
    success: {
      ...pt,
      messageContent:
        'bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105',
      messageIcon: 'h-5 w-5 flex-shrink-0 mr-2 text-green-600'
    },
    error: {
      ...pt,
      messageContent:
        'bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105',
      messageIcon: 'h-5 w-5 flex-shrink-0 mr-2 text-red-600'
    },
    warning: {
      ...pt,
      messageContent:
        'bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105',
      messageIcon: 'h-5 w-5 flex-shrink-0 mr-2 text-yellow-600'
    },
    info: {
      ...pt,
      messageContent:
        'bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105',
      messageIcon: 'h-5 w-5 flex-shrink-0 mr-2 text-blue-600'
    }
  }
</script>

<style lang="scss" scoped></style>
