<template>
  <div absolute border-t box-contents-border-color>
    <div
      text-lg
      :class="item.isActive ? 'background-gradient' : 'bg-transparent'"
      :style="{
        color: item.isActive ? 'var(--base-text-color)' : 'var(--box-contents-text-color)',
      }"
      v-for="item in items"
      :key="item.id"
    >
      <div
        grid
        gap-3
        border-b
        items-center
        py-1
        pl-1
        pr-1.5
        box-contents-border-color
        class="grid-cols-[120px_1fr]"
      >
        <div flex items-baseline font-bold>
          <span font-en>{{ item.year }}</span>
          <span text-xs mr-1 class="ml-[0.1rem]">年</span>
          <span font-en>{{ item.month }}</span>
          <span text-xs class="ml-[0.1rem]">月</span>
        </div>
        <div grid py-1 class="grid-cols-[120px_1fr]">
          <div flex items-center>
            <div font-en font-bold line-height-4.5 class="mr-[0.5rem]">{{ item.title }}</div>
          </div>
          <div>
            <div v-for="content in item.content" :key="content">・{{ content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// アクティブにする番号をpropsで受け取る
const props = defineProps({
  active: {
    type: Number,
    required: true,
  },
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

const items = computed(() => [
  {
    id: 0,
    isActive: props.active === 0,
    year: '2023',
    month: '2',
    title: 'v-tokyo #16',
    content: ['オフライン開催', 'v-tokyo 初参加'],
  },
  {
    id: 1,
    isActive: props.active === 1,
    year: '2023',
    month: '3',
    title: 'Vue Fes Japan 2023',
    content: ['コアフタッフ初参画', '企画運営チームリーダー'],
  },
  {
    id: 2,
    isActive: props.active === 2,
    year: '2024',
    month: '2',
    title: 'Vue Fes Japan 2024',
    content: ['コアスタッフ継続', '企画運営チームリーダー'],
  },
  {
    id: 3,
    isActive: props.active === 3,
    year: '2025',
    month: '2',
    title: 'Vue Fes Japan 2025',
    content: ['コアスタッフ継続', '企画チームサブリーダー'],
  },
])
</script>

<style scoped>
.slidev-layout .history {
  top: v-bind(top);
  left: v-bind(left);
  bottom: v-bind(bottom);
  right: v-bind(right);
}
</style>
