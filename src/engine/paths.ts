import { defineAsyncComponent } from 'vue';

const components = {
  'text': defineAsyncComponent(
    () => import('@/components/basics/text.vue')
  ),
  'spacing': defineAsyncComponent(
    () => import('@/components/basics/spacing.vue')
  ),
  'button': defineAsyncComponent(
    () => import('@/components/basics/button.vue')
  )
};

export default components;
