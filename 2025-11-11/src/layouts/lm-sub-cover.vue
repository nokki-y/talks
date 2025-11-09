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

    <!-- パート番号 -->
    <div
      z-10
      absolute
      op50
      flex
      items-end
      justify-center
      font-bold
      class="part-number bottom-[10px] left-[10px]"
    >
      <span
        font-bold
        font-en
        class="text-[160px] part-number"
        :style="{ transform: 'scale(1, 1.6)' }"
        >{{ partNumber }}</span
      >
      <!-- 飾りハイフン -->
      <div class="hyphen w-[100px] h-[10px] bg-white mb-[17.5px] rounded-sm"></div>
    </div>

    <!-- タイトル -->
    <div z-30 absolute box-contents p-2 pr-3 class="title-container top-[50px] left-[20px]">
      <div text-3xl font-bold>
        <slot name="title">TITLE</slot>
      </div>
    </div>

    <!-- サブタイトル -->
    <div z-30 absolute box-contents p-2 pr-4 class="sub-title-container top-[140px] left-[20px]">
      <div text-2xl font-bold op50>
        <slot name="sub-title">SUB TITLE</slot>
      </div>
    </div>

    <!-- コンテンツエリア -->
    <div
      z-10
      absolute
      box-contents
      p-2
      pr-3
      class="content-container top-[0px] right-[0px] w-[60%] h-[100%]"
    >
      <slot name="content">
        <div flex justify-center items-center size-full>CONTENT</div>
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
.slidev-layout.lm-sub-cover .part-number {
  background: linear-gradient(
    135deg,
    #b3002d 0%,
    #c21c46 15%,
    #e4dbdd 35%,
    #f2ecee 55%,
    #c85273 75%,
    #f48fa7 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.slidev-layout.lm-sub-cover .hyphen {
  background: linear-gradient(
    135deg,
    #b3002d 0%,
    #c21c46 2%,
    #e4dbdd 45%,
    #f2ecee 55%,
    #c85273 87%,
    #f48fa7 100%
  );
}

.slidev-layout.lm-sub-cover .title-container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 74%, 96% 100%, 0% 100%);
}

.slidev-layout.lm-sub-cover .sub-title-container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 78%, 95% 100%, 0% 100%);
}

.slidev-layout.lm-sub-cover .content-container {
  background-color: rgba(var(--box-contents-background-color-rgb), 0.7);
}
</style>
