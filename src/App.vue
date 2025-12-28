<script lang="ts" setup>
import WebApp from '@twa-dev/sdk'
import { onMounted, ref } from 'vue'

const user = ref(WebApp.initDataUnsafe.user)

onMounted(() => user.value = WebApp.initDataUnsafe.user)
</script>

<template>
  Привет,
  <pre>
    {{ user }}
  </pre>
</template>
