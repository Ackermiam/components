<template>
  <div class="Loader">
    <component
      v-for="(component, index) in config"
      :key="index"
      :is="findComponent(component.block)"
      :config="component.props"
    ></component>
  </div>
</template>

<script setup lang="ts">
import { findComponent } from './componentFinder';

defineProps<{
  config: any;
}>();
</script>

<style scoped>
.Loader {
  width: 100%;
  max-width: 1440px;
  background: beige;
  margin: 0 auto;
}
</style>