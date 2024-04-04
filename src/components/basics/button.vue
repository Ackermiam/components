<template>
  <button class="Button">
    {{ config.label }}
  </button>
</template>

<script setup lang="ts">

defineProps<{
  config: any
}>()
</script>

<style scoped>
.Button {
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  background: rgb(1, 206, 206);
  color: white;
  border-radius: 4px;
  overflow: hidden;
  transition: all .3s;
}

.Button:hover {
  border-radius: 99px;
  pointer-events: none;
}
</style>