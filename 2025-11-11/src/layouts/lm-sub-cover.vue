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

    <div
      absolute
      h-30
      w-30
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-25px] left-[540px]"
    >
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
      <div text-4xl font-bold font-en flex justify-center>
        <span>PART. {{ partNumber }}</span>
      </div>
    </div>

    <!-- タイトル -->
    <div z-20 py-7 px-20 flex justify-center items-center flex-col border-2 border-white rounded-md>
      <div text-3xl font-bold mb-4>
        <slot name="title">TITLE</slot>
      </div>
      <div text-2xl font-bold>
        <slot name="sub-title">SUB TITLE</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  partNumber: {
    type: String,
    required: true,
  },
  partTitle: {
    type: String,
    required: true,
  },
  partSubtitle: {
    type: String,
    required: true,
  },
})
</script>

<style></style>
