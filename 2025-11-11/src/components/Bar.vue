<template>
  <div class="bar" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    rotation?: number
    bgColor?: string
  }>(),
  {
    width: '12px',
    height: '300px',
    rotation: 0,
    bgColor: 'black',
  }
)

const rotationDeg = `${props.rotation}deg`
</script>

<style scoped>
.bar {
  width: v-bind(width);
  height: v-bind(height);
  background: v-bind(bgColor);
  transform: rotate(v-bind(rotationDeg));
  box-shadow: 20px 18px 2px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
}
</style>
