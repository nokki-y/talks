<template>
  <div h-full w-full relative class="slidev-layout lm-sub-cover">
    <!-- 背景画像 -->
    <img src="/background.png" alt="background" absolute top-0 left-0 bottom-0 right-0 size-full />

    <!-- 右上のロゴ -->
    <div absolute h-12 w-12 z-20 class="top-[48px] right-[22px]">
      <img src="/logo-red.png" alt="logo" />
    </div>

    <!-- 左下のコピーライト -->
    <div absolute bottom-1 left-2 z-10 text-2 op50 font-en>
      <span>© Link and Motivation Group</span>
    </div>

    <!-- タイトル -->
    <div z-20 absolute box-contents p-2 pl-4 pr-6 class="title-container top-[50px] left-[20px]">
      <div text-3xl font-bold>
        <slot name="title">TITLE</slot>
      </div>
    </div>

    <!-- サブタイトル -->
    <div
      z-30
      absolute
      box-contents
      p-2
      pl-4
      pr-6
      class="sub-title-container top-[140px] left-[20px]"
    >
      <div text-2xl font-bold op50>
        <slot name="sub-title">SUB TITLE</slot>
      </div>
    </div>

    <!-- 左側コンテンツエリア -->
    <div
      z-10
      absolute
      p-2
      pl-3
      class="left-content-container bottom-[0px] left-[0px] w-[40%] h-[60%]"
    >
      <slot name="left-content">
        <div flex justify-center items-center size-full>LEFT CONTENT</div>
      </slot>
    </div>

    <!-- 右側コンテンツエリア -->
    <div
      z-10
      absolute
      p-2
      pr-3
      class="right-content-container top-[0px] right-[0px] w-[60%] h-[100%]"
    >
      <slot name="right-content">
        <div flex justify-center items-center size-full>RIGHT CONTENT</div>
      </slot>
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

<style>
.slidev-layout.lm-sub-cover .title-container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 74%, 96% 100%, 0% 100%);
}

.slidev-layout.lm-sub-cover .sub-title-container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 78%, 95% 100%, 0% 100%);
}

.slidev-layout.lm-sub-cover .right-content-container {
  background-color: rgba(var(--box-contents-background-color-rgb), 0.7);
}
</style>
