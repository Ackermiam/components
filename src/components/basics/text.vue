<template>
  <component :is="config.type" class="Text">
    {{ config.text }}
  </component>
</template>

<script setup lang="ts">

defineProps<{
  config: any
}>()
</script>

<style scoped>
.Text {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>