<template>
  <div class="arrow-label" px-6 py-2>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor?: string
    width?: string
    height?: string
    fontSize?: string
    borderWidth?: number
    borderRadius?: string
  }>(),
  {
    bgColor: '#4ade80',
    width: 'fit-content',
    height: 'fit-content',
    fontSize: '1.5rem',
    borderWidth: 4,
    borderRadius: '0.5rem',
  }
)

const borderWidthPx = `${props.borderWidth}px`
</script>

<style scoped>
.arrow-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: v-bind(width);
  height: v-bind(height);
  font-size: v-bind(fontSize);
  font-weight: bold;
  background: v-bind(bgColor);
  border: v-bind(borderWidthPx) solid black;
  border-radius: v-bind(borderRadius);
  box-shadow: 24px 18px 2px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  letter-spacing: 0.05em;
  box-sizing: border-box;
}
</style>
