<template>
  <div h-full w-full relative py-6 px-8 flex flex-col items-center class="slidev-layout lm-columns">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <div
      absolute
      h-30
      w-30
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-30px] right-[-5px]"
    >
      <img src="/logo.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- タイトルエリア (デフォルトでは非表示。slotにtitleを追加すると表示される) -->
    <div z-10 mb-18 border-b-2 border-white pb-1 v-if="$slots.title">
      <div text-2xl font-bold font-en flex justify-center>
        <slot name="title" />
      </div>
    </div>

    <!-- CONTENTエリア -->
    <div z-10 grid gap-4 overflow-hidden class="max-h-[320px]" :style="{ gridTemplateColumns }">
      <template v-for="i in columnCount" :key="i">
        <div rounded-md overflow-hidden>
          <slot :name="`content-${i}`">CONTENT {{ i }}</slot>
        </div>
      </template>
    </div>

    <!-- Descriptionエリア (デフォルトでは非表示。slotにdescriptionを追加すると表示される) -->
    <div z-10 w-full flex-1 v-if="$slots.description">
      <slot name="description" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  columnCount: {
    type: Number,
    required: true,
  },
})

const gridTemplateColumns = computed(() => {
  switch (props.columnCount) {
    // 4つ以上の場合は2行にする
    case 4:
      return `repeat(2, minmax(0, 1fr))`
    default:
      return `repeat(${props.columnCount}, minmax(0, 1fr))`
  }
})
</script>

<style></style>
