<template>
  <div
    h-full
    w-full
    relative
    py-20
    px-15
    flex
    flex-col
    items-center
    class="slidev-layout lm-sub-cover"
  >
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />
    <!-- マスク -->
    <div absolute top-0 left-0 size-full bg-black op-40></div>

    <div absolute h-30 w-30 z-20 flex items-center justify-center class="top-[457px] left-[540px]">
      <img src="/logo.png" alt="logo" />
    </div>

    <div
      absolute
      h-30
      w-36
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-25px] left-[315px]"
    >
      <img src="/vue-fes-japan-2025.svg" alt="logo" />
    </div>

    <!-- パート番号 -->
    <div z-10 mb-24 border-b-2 border-white>
      <div text-4xl font-bold flex justify-center>
        <span font-en>CAPTURE.{{ captureNumber }}</span>
      </div>
    </div>

    <!-- タイトル -->
    <div z-20 py-7 px-20 flex justify-center items-center flex-col border-2 border-white rounded-md>
      <div text-3xl font-bold>
        <slot name="title">TITLE</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  captureNumber: {
    type: String,
    required: true,
  },
})
</script>

<style></style>
