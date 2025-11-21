<template>
  <div h-full w-full relative py-6 px-8 flex flex-col items-center class="slidev-layout lm-columns">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />
    <!-- マスク -->
    <div absolute top-0 left-0 size-full bg-black op-40></div>

    <div
      absolute
      h-20
      w-30
      z-20
      flex
      items-center
      justify-center
      class="bottom-[12px] right-[-5px]"
    >
      <img src="/logo-trim.png" alt="logo" />
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
    <div z-10 grid gap-4 w-full class="max-h-[320px]" :style="{ gridTemplateColumns }">
      <template v-for="i in columnCount" :key="i">
        <div>
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
      return `repeat(2, 1fr)`
    default:
      return `repeat(${props.columnCount}, 1fr)`
  }
})
</script>

<style></style>
