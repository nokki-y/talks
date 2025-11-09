<template>
  <div
    h-full
    w-full
    relative
    py-6
    px-8
    flex
    flex-col
    items-center
    class="slidev-layout lm-three-columns"
  >
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <div
      absolute
      h-30
      w-36
      z-20
      flex
      items-center
      justify-center
      class="bottom-[-25px] right-[20px]"
    >
      <img src="/vue-fes-japan-2025.svg" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- タイトル -->
    <div z-10 mb-18 border-b-2 border-white>
      <div text-2xl font-bold font-en flex justify-center>
        <slot name="title">TITLE</slot>
      </div>
    </div>

    <!-- 3つのCONTENTエリア -->
    <div z-10 grid grid-cols-3 gap-4>
      <div rounded-md overflow-hidden>
        <slot name="left-content">LEFT CONTENT</slot>
      </div>
      <div rounded-md overflow-hidden>
        <slot name="center-content">CENTER CONTENT</slot>
      </div>
      <div rounded-md overflow-hidden>
        <slot name="right-content">RIGHT CONTENT</slot>
      </div>
    </div>

    <!-- Descriptionエリア (デフォルトでは非表示。slotにdescriptionを追加すると表示される) -->
    <div z-10 w-full flex-1 v-if="$slots.description">
      <slot name="description" />
    </div>
  </div>
</template>

<script setup></script>

<style>
.slidev-layout .lm-three-columns .content-item {
  width: 33.33%;
}
</style>
