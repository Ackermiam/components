<template>
  <component :is="config.type">
    {{ config.text }}
  </component>
</template>

<script setup lang="ts">
defineProps<{
  config: any
}>()
</script>