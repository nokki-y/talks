<template>
  <div class="history-point-shadow">
    <div class="history-point">
      <span font-en>POINT</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  position: {
    type: {
      top: String,
      left: String,
      bottom: String,
      right: String,
    },
    required: true,
  },
})

const top = computed(() => props.position?.top ?? 'auto')
const left = computed(() => props.position?.left ?? 'auto')
const bottom = computed(() => props.position?.bottom ?? 'auto')
const right = computed(() => props.position?.right ?? 'auto')
</script>

<style scoped>
.slidev-layout .history-point {
  background-color: #f46315;
  color: #ffffff;
  padding: 0.35rem 2rem 0.4rem 2.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  clip-path: polygon(8% 13%, 80% 0%, 100% 50%, 80% 100%, 8% 87%);
}

.slidev-layout .history-point-shadow {
  top: v-bind(top);
  left: v-bind(left);
  bottom: v-bind(bottom);
  right: v-bind(right);

  position: absolute;
  filter: drop-shadow(16px 8px 0.5px rgba(0, 0, 0, 0.3));
}
</style>
