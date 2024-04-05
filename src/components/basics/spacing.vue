<template>
  <div :style="{height: `${config.space}px`}"></div>
</template>

<script setup lang="ts">
defineProps<{
  config: any
}>()
</script>
